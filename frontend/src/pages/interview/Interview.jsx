import React from 'react'
import { useState } from 'react';
import './Interview.css'
// function displayData(skills){
//   $('.bars').html('');
//   $('.skills').html('');
//   for (var key in skills){
//     var personal = skills[key].personal,
//         work = skills[key].work;
    
//     $('.skills').append("<li><span>"+key+"</span></li>");
//     $('.bars').append("<li><div data-percentage='"+skills[key].personal+"' class='bar'>"+personal+"</div><div data-percentage='"+skills[key].work+"' class='bar'>"+work+"</div></li>"); 
    
//   };
// }

function Interview() {
  const [skills, setSkills] = useState([
    {    
    "SQL":{work:50,personal:10},
    }, 
    {    "PHP":{work:70,personal:20},
    "JavaScript":{work:20,personal:10},
    "JQuery" :{work:45,personal:35},
    "Wordpress":{personal:30},
    "Tea Making":{work:1,personal:90}}
  ]
)

  return (
    <div class="chart">
      <div class="skills">
        <li>
          <span>
            PHP
          </span>
        </li>
      </div>
      <div class="bars">
        <li>
          <div data-percentage='"10"'></div>
        </li>
      </div> 
      <div class='footer'>  
        Confidence in Skill (%) 
      </div> 
    </div>
  )
}

export default Interview