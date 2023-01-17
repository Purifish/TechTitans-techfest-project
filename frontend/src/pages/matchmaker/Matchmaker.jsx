import React from "react";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";

import { quizContent } from "./quiz-content";
import { languageScore, mathScore, thinkingScore, interestScore } from "./matchmaking-algorithm";

StylesManager.applyTheme("defaultV2");

function Matchmaker() {

    const survey = new Model(quizContent);

    survey.onComplete.add((sender, options) => {
        console.log("Answers:\n" + JSON.stringify(sender.data, null, 3));

        const roles = [
            "Data scientist",
            "Frontend Developer",
            "Backend Developer",
            "Mobile App Developer",
            "Fullstack Developer",
            "ML Engineer" 
        ];

        const imageUrls = [
            "https://cloudinary.hbs.edu/hbsit/image/upload/s--I2Gu66-p--/f_auto,c_fill,h_375,w_750,/v20200101/57C255C00BF4E0FB67F6DA704E94003B.jpg",
            "https://cdn.august.com.au/wp-content/uploads/2015/04/Allan_Get-Web-Developer-Savvy_header.png",
            "https://geekflare.com/wp-content/uploads/2021/09/Backend-solution.png",
            "https://www.vaival.com/wp-content/uploads/2021/01/vaival-application.png",
            "https://res.cloudinary.com/dmsxwwfb5/image/upload/v1595866967/full-stack-devlopment-min.png",
            "https://www.gqrgm.com/wp-content/uploads/2018/10/How-To-Become-A-Machine-Learning-Engineer.jpg"
        ]

        let scores = [0, 0, 0, 0, 0, 0];

        languageScore(sender.data.language[0], scores);
        if (sender.data.language.length > 1) {
            languageScore(sender.data.language[1], scores);
        }
        
        mathScore(sender.data.maths, scores);
        thinkingScore(sender.data.thinking, scores);
        interestScore(sender.data.interest, scores);

        let bestRole = 0;

        console.log(`${roles[0]}: ${scores[0]}`);
        for (let i = 1; i < roles.length; i++) {
            console.log(`${roles[i]}: ${scores[i]}`);
            if (scores[i] > scores[bestRole]) {
                bestRole = i;
                
            } else if (scores[i] === scores[bestRole] && Math.floor((Math.random() * 2) === 1)) {
                bestRole = i;
            }
        }
        
        sender.setValue("role", roles[bestRole]);
        sender.setValue("image", imageUrls[bestRole]);
    });

    return (
        <div>
            <Survey model={survey} />
        </div>
    );
}

export default Matchmaker;