import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { markers } from "../utils/constants/Markers";
import { Icon } from "leaflet";
import MarkerIcon from "../assets/Marker.svg";
import { useState } from "react";

export const Tracker = () => {
  const customIcon = new Icon({
    iconUrl: MarkerIcon,
    iconSize: [16, 16],
  });

  const companyCounts = {};
  const statusCounts = {};

  const [filterStatus, setFilterStatus] = useState("all");
  const [filterSupplier, setFilterSupplier] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const normalizeString = (str) =>
    str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  const handleCompanyFilterChange = (companyName) => {
    setFilterSupplier((prevFilters) => {
      if (prevFilters.includes(companyName)) {
        return prevFilters.filter((filter) => filter !== companyName);
      } else {
        return [...prevFilters, companyName];
      }
    });
  };

  const handleStatusFilterChange = (status) => {
    setFilterStatus(status);
  };

  const handleSearchFilterChange = (orderCode) => {
    setSearchTerm(orderCode);
  };

  const filteredMarkers = markers.filter((marker) => {
    const statusMatch =
      filterStatus === "all" || marker.status === filterStatus;
    const supplierMatch =
      filterSupplier.length === 0 ||
      filterSupplier.includes(normalizeString(marker.companyName));
    if (companyCounts[marker.companyName]) {
      companyCounts[marker.companyName]++;
    } else {
      companyCounts[marker.companyName] = 1;
    }
    if (statusCounts[marker.status]) {
      statusCounts[marker.status]++;
    } else {
      statusCounts[marker.status] = 1;
    }
    const searchTermMatch =
      searchTerm === "" ||
      marker.orderCode.toLowerCase().includes(searchTerm.toLowerCase());

    return statusMatch && supplierMatch & searchTermMatch;
  });

  return (
    <main className="c-grid__main">
      <h1 className="c-title">Tracker</h1>
      <div className="c-tracker__map">
        {/* Filters */}
        <aside className="c-tracker__filters">
          {/* Search bar with checkbox filters */}
            <div className="c-tracker__search">
              <input
                className="c-tracker__search-input"
                type="text"
                placeholder="Search order"
                maxLength="20"
                onChange={(e) => handleSearchFilterChange(e.target.value)}
              />
              <i className="c-tracker__search-icon"></i>
            </div>
            <div className="c-tracker__filter">
              <div className="c-tracker__filter-title">Filter by Supplier</div>
              <div className="c-tracker__filter-options">
                <input
                  className="c-tracker__filter-input"
                  type="checkbox"
                  id="freshfarmsco"
                  name="freshfarmsco"
                  value="freshfarmsco"
                  onChange={(e) => {
                    handleCompanyFilterChange(e.target.value);
                  }}
                />
                <label
                  className="c-tracker__filter-label"
                  htmlFor="freshfarmsco"
                >
                  FreshFarms Co.
                  <div className="c-tracker__filter-count">
                    {companyCounts["FreshFarms Co."] || 0}
                  </div>
                </label>
                <input
                  className="c-tracker__filter-input"
                  type="checkbox"
                  id="globalgrains"
                  name="globalgrains"
                  value="globalgrains"
                  onChange={(e) => {
                    handleCompanyFilterChange(e.target.value);
                  }}
                />
                <label
                  className="c-tracker__filter-label"
                  htmlFor="globalgrains"
                >
                  GlobalGrains
                  <div className="c-tracker__filter-count">
                    {companyCounts["GlobalGrains"] || 0}
                  </div>
                </label>
                <input
                  className="c-tracker__filter-input"
                  type="checkbox"
                  id="brananas"
                  name="brananas"
                  value="brananas"
                  onChange={(e) => {
                    handleCompanyFilterChange(e.target.value);
                  }}
                />
                <label className="c-tracker__filter-label" htmlFor="brananas">
                  Brananas
                  <div className="c-tracker__filter-count">
                    {companyCounts["Brananas"] || 0}
                  </div>
                </label>
              </div>
            </div>
            <div className="c-tracker__filter">
              <div className="c-tracker__filter-title">Status</div>
              <div className="c-tracker__filter-options">
                <input
                  defaultChecked
                  className="c-tracker__filter-input"
                  type="radio"
                  id="all"
                  name="status"
                  value="all"
                  onChange={(e) => handleStatusFilterChange(e.target.value)}
                />
                <label className="c-tracker__filter-label" htmlFor="all">
                  All
                  <div className="c-tracker__filter-count">
                    {markers.length}
                  </div>
                </label>
                <input
                  className="c-tracker__filter-input"
                  type="radio"
                  id="transit"
                  name="status"
                  value="transit"
                  onChange={(e) => handleStatusFilterChange(e.target.value)}
                />
                <label className="c-tracker__filter-label" htmlFor="transit">
                  In Transit
                  <div className="c-tracker__filter-count">
                    {statusCounts["transit"] || 0}
                  </div>
                </label>
                <input
                  className="c-tracker__filter-input"
                  type="radio"
                  id="hold"
                  name="status"
                  value="hold"
                  onChange={(e) => handleStatusFilterChange(e.target.value)}
                />
                <label className="c-tracker__filter-label" htmlFor="hold">
                  On hold
                  <div className="c-tracker__filter-count">
                    {statusCounts["hold"] || 0}
                  </div>
                </label>
              </div>
            </div>
        </aside>
        {/* Map */}
        <MapContainer center={[51.505, -0.09]} zoom={2}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {filteredMarkers.map((marker, index) => (
            <Marker key={index} position={marker.coord} icon={customIcon}>
              <Popup>{marker.title}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </main>
  );
};
