import React from "react";
import "../styles/stepper.css"

const HeaderStepper = () => {
  return (
     <div className="ui-stepper">
      <div className="ui-step completed">
        <span>Status 1</span>
        <div className="circle done">✓</div>
      </div>

      <div className="ui-step active">
        <span>New</span>
        <div className="circle"></div>
      </div>

      <div className="ui-step">
        <span>Working</span>
        <div className="circle"></div>
      </div>

      <div className="ui-step">
        <span>Nurturing</span>
        <div className="circle"></div>
      </div>

      <div className="ui-step last">
        <span>Converted</span>
        <div className="circle"></div>
      </div>
    </div>

  );
};

export default HeaderStepper;
