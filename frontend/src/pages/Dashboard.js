export const Dashboard = () =>{
    return (
        <main className="c-grid__main">
          <h1 className='c-title'>
            Dashboard
          </h1>
          <div className="c-dashboard">
            <div className="c-dashboard__item">
              <h2 className="c-dashboard__title">
                Temperature
              </h2>
              <p className="c-dashboard__value">
                25°C
              </p>
            </div>
            <div className="c-dashboard__item">
              <h2 className="c-dashboard__title">
                Light Intensity
              </h2>
              <p className="c-dashboard__value">
                70%
              </p>
            </div>
            <div className="c-dashboard__item">
              <h2 className="c-dashboard__title">
                Humidity
              </h2>
              <p className="c-dashboard__value">
                60%
              </p>
            </div>
            <div className="c-dashboard__item u-grid-2">
              <h2 className="c-dashboard__title">
                Temperature
              </h2>
              <p className="c-dashboard__value">
                25°C
              </p>
            </div>
          </div>
        </main>
    )
}