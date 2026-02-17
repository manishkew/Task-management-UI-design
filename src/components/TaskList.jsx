import "../styles/tasklist.css";

function TaskList() {
  return (
    <div className="card task-card">

      <div className="task-header">
        <h4>Task List</h4>
      </div>

      <table className="task-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Subject</th>
            <th>Type</th>
            <th>Assigned to</th>
            <th>Due Date</th>
            <th>
               <td>
  <span className="status-with-arrow">
    Not Started
    <svg
      className="status-icon"
      viewBox="0 0 24 24"
      width="14"
      height="14"
    >
      <path
        d="M7 10l5 5 5-5z"
        fill="#6c757d"
      />
    </svg>
  </span>
</td>

            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td className="subject-link">Sample</td>
            <td>To Do</td>
            <td>Ravi Kumar</td>
            <td>13 Nov 2018</td>
            <td>Not Started</td>
          </tr>

          <tr>
            <td>2</td>
            <td className="subject-link">Sample</td>
            <td>To Do</td>
            <td>Anand Pai</td>
            <td>16 Nov 2018</td>
            <td>Not Started</td>
          </tr>

          <tr>
            <td>3</td>
            <td className="subject-link">Sample</td>
            <td>To Do</td>
            <td>Jayaram Ramesh</td>
            <td>12 Dec 2018</td>
            <td>Not Started</td>
          </tr>
          <tr>
            <td>4</td>
            <td className="subject-link">Sample</td>
            <td>To Do</td>
            <td>Alan Gomez</td>
            <td>20 Dec 2018</td>
            <td>Not Started</td>
          </tr>
        </tbody>
      </table>

     <div className="view-more">
  <span>View More</span>
  <svg
    className="view-more-icon"
    width="14"
    height="14"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M5 8L10 13L15 8"
      stroke="#f97316"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</div>


    </div>
  );
}

export default TaskList;
