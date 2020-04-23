import React from 'react';

const Chart = () => {
  return (
    <div className="chart">
      <div className="chart__inner">
        <header className="chart__header">
          <h2>Top Languages</h2>
        </header>

        <div className="chart__canvas">
          <div className="chart__pie"></div>

          <div className="chart-legend">
            <ul>
              <li>
                <div className="chart-legend__color chart-legend__color--html"></div>
                <div className="chart-legend__text">
                  HTML
                </div>
              </li>

              <li>
                <div
                  className="chart-legend__color chart-legend__color--javascript"></div>
                <div className="chart-legend__text" >
                  JavaScript
              </div>
              </li>

              <li>
                <div className="chart-legend__color chart-legend__color--others" ></div>
                <div className="chart-legend__text">
                  Others
                </div>
              </li>

              <li>
                <div className="chart-legend__color chart-legend__color--css"></div>
                <div className="chart-legend__text" >
                  CSS
                </div>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
