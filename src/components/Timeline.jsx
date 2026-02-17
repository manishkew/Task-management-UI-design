import "../styles/timeline.css";

function Timeline() {
  return (
    <div className="timeline-section">
      <div className="timeline-filter">
        <div className="filter-wrapper">
          <div className="filter-text">Filter by date</div>

          <div className="filter-icon-box">
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
              <path
                d="M5 8L10 13L15 8"
                stroke="#6b7280"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="timeline-divider"></div>
      <div className="timeline-wrapper">
        <div className="timeline-list">
          <div className="timeline-row">
            <div className="timeline-card">
              <div className="card-top">
                <div className="card-icon blue">
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="currentColor"
                  >
                    <path
                      d="M6.6 10.8c1.5 3 3.6 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3
                    1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V21c0 .6-.4 1-1 1C10.5 22 2 13.5 2 3
                    2 2.4 2.4 2 3 2h4.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2.2 2.2z"
                    />
                  </svg>
                </div>
                <div className="card-content">
                  <h4>Informed Product Features</h4>
                  <p>
                    You contacted with <span>Charles Gomez</span>
                  </p>
                  <small>13 Nov 2018, 05:49 AM</small>
                </div>
              </div>
              <div className="card-expand">▾</div>
            </div>
          </div>
          <div className="timeline-row">
            <div className="timeline-card">
              <div className="card-top">
                <div className="card-icon green">✔</div>
                <div className="card-content">
                  <h4>Send Product Brochure</h4>
                  <p>
                    You added a To DO task with <span>Arun Var</span>
                  </p>
                  <small>10 Nov 2018, 06:49 PM</small>
                </div>
              </div>
              <div className="card-expand">▾</div>
            </div>
          </div>
          <div className="timeline-row">
            <div className="timeline-card">
              <div className="card-top">
                <div className="card-icon red">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 3H14L19 8V21H6V3Z"
                      stroke="#ef4444"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 3V8H19"
                      stroke="#ef4444"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 13H16"
                      stroke="#ef4444"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M8 17H16"
                      stroke="#ef4444"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="card-content">
                  <h4>Send Product Brochure</h4>
                  <p>
                    You added a To DO task with <span>Arun Var</span>
                  </p>
                  <small>10 Nov 2018, 06:49 PM</small>
                </div>
              </div>
              <div className="card-expand">▾</div>
            </div>
          </div>
          <div className="timeline-row">
            <div className="timeline-card">
              <div className="card-top">
                <div className="card-icon blue">
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="currentColor"
                  >
                    <path
                      d="M6.6 10.8c1.5 3 3.6 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3
                    1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V21c0 .6-.4 1-1 1C10.5 22 2 13.5 2 3
                    2 2.4 2.4 2 3 2h4.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2.2 2.2z"
                    />
                  </svg>
                </div>
                <div className="card-content">
                  <h4>Informed Product Features</h4>
                  <p>
                    You contacted with <span>Charles Gomez</span>
                  </p>
                  <small>13 Nov 2018, 05:49 AM</small>
                </div>
              </div>
              <div className="card-expand">▾</div>
            </div>
          </div>
          <div className="timeline-row">
            <div className="timeline-card">
              <div className="card-top">
                <div className="card-icon green">✔</div>
                <div className="card-content">
                  <h4>Send Product Brochure</h4>
                  <p>
                    You added a To DO task with <span>Arun Var</span>
                  </p>
                  <small>10 Nov 2018, 06:49 PM</small>
                </div>
              </div>
              <div className="card-expand">▾</div>
            </div>
          </div>
          <div className="timeline-row">
            <div className="timeline-card">
              <div className="card-top">
                <div className="card-icon red">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 3H14L19 8V21H6V3Z"
                      stroke="#ef4444"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 3V8H19"
                      stroke="#ef4444"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 13H16"
                      stroke="#ef4444"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M8 17H16"
                      stroke="#ef4444"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div className="card-content">
                  <h4>Send Product Brochure</h4>
                  <p>
                    You added a To DO task with <span>Arun Var</span>
                  </p>
                  <small>10 Nov 2018, 06:49 PM</small>
                </div>
              </div>
              <div className="card-expand">▾</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
