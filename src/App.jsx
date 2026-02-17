import ActivityTabs from "./components/ActivityTabs";
import HeaderStepper from "./components/HeaderStepper";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Timeline from "./components/Timeline";

import "./styles/layout.css";

function App() {
  return (
    <div className="app-container">

      <HeaderStepper />
      <ActivityTabs/>
      <div className="main-layout">
        
       <div className="task-section">
  <div className="task-form-wrapper">
    <TaskForm />
  </div>

  <div className="task-divider"></div>

  <div className="task-list-wrapper">
    <TaskList />
  </div>
</div>

        <div className="right-panel">
          <Timeline/>
        </div>

      </div>

    </div>
  );
}

export default App;
