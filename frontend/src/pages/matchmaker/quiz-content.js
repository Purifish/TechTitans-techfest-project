export const quizContent = {
  title: "Tech Career Matchmaker",
  completedHtml: `   
  <section class="section-a">
  <div class="home-container">
    <div>
      <h1 class="section-a-h1">Congratuations! </h1>
      <p class="section-a-p">
      Based on your answers, we think that you would make a great {role}!
      </p>
    </div>
    <img class="section-a-image" src="https://www.gqrgm.com/wp-content/uploads/2018/10/How-To-Become-A-Machine-Learning-Engineer.jpg" alt="" /> 
  </div>
</section>`,
  pages: [
    {
      title: "Which of these languages do you like the most?",
      elements: [
        {
          type: "checkbox",
          name: "language",
          title: "Select up to 2 languages",
          isRequired: true,
          maxSelectedChoices: 2,
          choices: ["Python", "Java", "C++", "C#", "JavaScript", "Golang"],
        },
      ],
    },
    {
      title: "How good are you at Mathematics?",
      elements: [
        {
          type: "radiogroup",
          name: "maths",
          title: "Choose the option that describes you the best",
          isRequired: true,
          choices: [
            "Very good",
            "Above average",
            "Average",
            "Below average",
            "I can't find the area of a square",
          ],
        },
      ],
    },
    {
      title: "Which of these adjectives describes you the best?",
      elements: [
        {
          type: "radiogroup",
          name: "thinking",
          title: "Select only one",
          isRequired: true,
          choices: ["Logical", "Artistic", "Creative", "Brainstormer"],
        },
      ],
    },
    {
      title: "Which of these interests you the most?",
      elements: [
        {
          type: "radiogroup",
          name: "interest",
          title: "Select only one",
          isRequired: true,
          choices: [
            "Artificial intelligence (AI)",
            "Creating an app",
            "Designing an app",
            "Cracking tough coding questions (e.g. from LeetCode, HackerRank, etc)",
            "I just love to code!",
          ],
        },
      ],
    },
    {
      title: "How introverted/extroverted are you?",
      elements: [
        {
          type: "rating",
          name: "social",
          title: "Choose the option that describes you the best",
          rateValues: [
            { value: "social1", text: "1" },
            { value: "social2", text: "2" },
            { value: "social3", text: "3" },
            { value: "social4", text: "4" },
            { value: "social5", text: "5" },
          ],
          minRateDescription: "Highly Introverted",
          maxRateDescription: "Highly Extroverted",
        },
      ],
    },
  ],
};
