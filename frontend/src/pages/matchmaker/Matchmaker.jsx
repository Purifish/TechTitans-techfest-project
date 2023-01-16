import React, { useState } from "react";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";

import { quizContent } from "./quiz-content";

StylesManager.applyTheme("defaultV2");

function Matchmaker() {
  // const [isDone, setDone] = useState(false);
  const survey = new Model(quizContent);

  console.log("Total questions: " + quizContent.pages.length);

  survey.onComplete.add((sender, options) => {
    console.log("Answers:\n" + JSON.stringify(sender.data, null, 3));
    // setDone(false);

    const score = 20;
    const role = "Data analyst";
      
    // Save the scores in survey results
    sender.setValue("score", score);
    sender.setValue("role", role);
  });

  return (
    <div>
      {/* {isDone ? <h3 style={{fontSize: "50px"}}>YOOOO</h3>  : <Survey model={survey} />} */}
      <Survey model={survey} />
    </div>
  );
}

export default Matchmaker;