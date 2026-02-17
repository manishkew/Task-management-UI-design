import "../styles/form.css";

function TaskForm() {
  return (
    <div className="task-form-wrapper">
      <div className="activity-tabs">
        <span>Log Calls</span>
        <span className="active-tab">Tasks</span>
        <span>Event</span>
        <span>Make Note</span>
        <span>Add Attachment</span>
        <span>Activity Set</span>
        <span>Custom Field</span>
      </div>

      <div className="task-form-section">
        <h4 className="section-title">New Task</h4>

        <div className="form-grid">
          <div className="form-left">
            <div className="form-group">
              <label>Task Type*</label>

              <div className="select-wrapper">
                <div className="fake-select">Select Task Type</div>

                <div className="select-arrow">
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

            <div className="form-group">
              <label style={{ marginTop: "2px" }}>Assigned To*</label>
              <div className="select-wrapper">
                <div className="fake-select">Select User</div>

                <div className="select-arrow">
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

            <div className="date-row">
              <div className="form-group">
                <label>Start Date</label>
                <div className="date-box">
                  <input placeholder="mm/dd/yyyy" />
                  <span className="calendar-icon" />
                </div>
              </div>

              <div className="form-group">
                <label style={{ marginTop: "5px" }}>End Date</label>
                <div className="date-box">
                  <input placeholder="mm/dd/yyyy" />
                  <span className="calendar-icon" />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Reminder On</label>
              <div className="date-box">
                <input placeholder="mm/dd/yyyy" />
                <span className="calendar-icon" />
              </div>
            </div>
          </div>

          <div className="form-right">
            <div className="form-group">
              <label>Subject</label>
              <input />
            </div>

            <div className="form-group">
              <label>Details</label>
              <textarea rows="8" />
            </div>
          </div>
        </div>

        <div className="button-row">
          <button className="cancel-btn">Cancel</button>
          <button className="apply-btn">Apply</button>
        </div>
      </div>
    </div>
  );
}

export default TaskForm;
