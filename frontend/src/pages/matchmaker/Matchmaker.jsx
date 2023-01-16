import React from "react";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";

import { quizContent } from "./quiz-content";

StylesManager.applyTheme("defaultV2");

function Matchmaker() {
  // const [isDone, setDone] = useState(false);

  function languageScore(language, scores) {
    if (language === "Python") {
      scores[0] = 3;
      scores[2] = 3;
      scores[4] = 3;
      scores[5] = 3;
    } else if (language === "Java") {
      scores[2] = 3;
      scores[3] = 3;
      scores[4] = 3;
    } else if (language === "C++") {
      scores[0] = 3;
      scores[3] = 3;
      scores[5] = 3;
    } else if (language === "C#") {
      scores[3] = 3;
    } else if (language === "JavaScript") {
      scores[1] = 3;
      scores[3] = 3;
      scores[4] = 3;
    } else {
      scores[2] = 3;
    }
  }

  function mathScore() {

  }

  const survey = new Model(quizContent);

  survey.onComplete.add((sender, options) => {
    console.log("Answers:\n" + JSON.stringify(sender.data, null, 3));
    // setDone(false);
    const role = "ML Engineer";

    const roles = [
      "Data scientist",
      "Frontend Developer",
      "Backend Developer",
      "Mobile App Developer",
      "Fullstack Developer",
      "ML Engineer" 
    ];

    let scores = [0, 0, 0, 0, 0, 0];
    languageScore(sender.data.language[0], scores);
    languageScore(sender.data.language[1], scores);


      
    sender.setValue("role", role);
  });

  return (
    <div>
      <Survey model={survey} />
    </div>
  );
}
/*

{
   "language": [
      "Java",
      "C++"
   ],
   "maths": "I can't find the area of a square",
   "thinking": "Brainstormer",
   "interest": "I just love to code!",
   "social": "social5"
}


*/

export default Matchmaker;