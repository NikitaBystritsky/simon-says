const buttonUp = document.querySelector('.up-button');

var rootElement = document.documentElement;

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

buttonUp.addEventListener("click", scrollToTop);

document.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    buttonUp.classList.remove('no-button');
    buttonUp.classList.add('up-button');
  } else {
    buttonUp.classList.remove('up-button');
    buttonUp.classList.add('no-button');
  }
}
);


/*var forWorkCardsList = 
  [
    {
      name: "Bug Magnet",
      description: "Able to find bugs in code like they were placed there on purpose.",
      category: "For Work",
      superpowers: {
        "live": "+500",
        "create": "+500",
        "love": "+200",
        "dream": "+400"
      }
    },
  
    {
      name: "Console.log Guru",
      "description": "Uses console.log like a crystal ball to find any issue.",
      category: "For Work",
      "superpowers": {
        "live": "+500",
        "create": "+500",
        "love": "+200",
        "dream": "+400"
      }
    },
  
    {
      name: "Shortcut Cheater",
      "description": "Knows every keyboard shortcut like they were born with them.",
      category: "For Work",
      "superpowers": {
        "live": "+500",
        "create": "+500",
        "love": "+400",
        "dream": "+200"
      }
    },
  
    {
      name: "Merge Master",
      "description": "Merges branches in Git without conflicts, like a wizard during an exam.",
      category: "For Work",
      "superpowers": {
        "live": "+200",
        "create": "+500",
        "love": "+200",
        "dream": "+300"
      }
    },
  
    {
      name: "Async Tamer",
      "description": "Handles asynchronous code and promises like well-trained pets.",
      category: "For Work",
      "superpowers": {
        "live": "+100",
        "create": "+400",
        "love": "+200",
        "dream": "+300"
      }
    },
  
    {
      name: "CSS Tamer",
      "description": "Can make Flexbox and Grid work together like they were always best friends.",
      category: "For Work",
      "superpowers": {
        "live": "+200",
        "create": "+500",
        "love": "+200",
        "dream": "+300"
      }
    },
  
    {
      name: "Time Hacker",
      "description": "Writes code at the last moment but always meets the deadline.",
      category: "For Work",
      "superpowers": {
        "live": "+500",
        "create": "+500",
        "love": "+500",
        "dream": "+200"
      }
    },
  
    {
      name: "Layout Master",
      "description": "Creates perfect layouts on the first try, like they can read the designer's mind.",
      category: "For Work",
      "superpowers": {
        "live": "+500",
        "create": "+300",
        "love": "+200",
        "dream": "+200"
      }
    },
  
    {
      name: "Documentation Whisperer",
      category: "For Work"
    },
  
    {
      name: "Feedback Master",
      category: "For Work"
    },
  
    {
      name: "Code Minimalist",
      category: "For Work"
    },
  
    {
      name: "Pixel-Perfect Magician",
      category: "For Work"
    },
]

let forHealthCardsList = [ 
  {
  "name": "Posture Levitation",
  "description": "Can sit for hours, but maintains perfect posture like a ballerina.",
  "category": "For Health",
  "superpowers": {
    "live": "+400",
    "create": "+500",
    "love": "+500",
    "dream": "+400"
  }
},

{
  "name": "Step Master",
  "description": "Gets 10,000 steps a day even while sitting at the computer.",
  "category": "For Health",
  "superpowers": {
    "live": "+400",
    "create": "+300",
    "love": "+500",
    "dream": "+400"
  }
},

{
  "name": "Snack Resister",
  "description": "Ignoring desktop snacks like a strict dietician.",
  "category": "For Health",
  "superpowers": {
    "live": "+400",
    "create": "+100",
    "love": "+200",
    "dream": "+400"
  }
},

{
  "name": "Hydration Bot",
  "description": "Drinks the recommended 2 liters of water a day like a health-programmed robot.",
  "category": "For Health",
  "superpowers": {
    "live": "+500",
    "create": "+300",
    "love": "+500",
    "dream": "+500"
  }
},

{
  "name": "Sleep Overlord",
  "description": "Sleeps 6 hours but feels like they had 10.",
  "category": "For Health",
  "superpowers": {
    "live": "+400",
    "create": "+500",
    "love": "+500",
    "dream": "+500"
  }
},

{
  "name": "Break Guru",
  "description": "Takes a stretch break every hour without forgetting, no matter how focused.",
  "category": "For Health",
  "superpowers": {
    "live": "+300",
    "create": "+300",
    "love": "+300",
    "dream": "+400"
  }
},

{
  "name": "Eye Protector",
  "description": "Can work all day at the monitor without feeling like their eyes are on fire.",
  "category": "For Health",
  "superpowers": {
    "live": "+100",
    "create": "+300",
    "love": "+500",
    "dream": "+400"
  }
},

{
  "name": "Stress Dodger",
  "description": "Masters meditation right at the keyboard.",
  "category": "For Health",
  "superpowers": {
    "live": "+100",
    "create": "+400",
    "love": "+200",
    "dream": "+400"
  }
},

{
  "name": "Yoga Coder",
  "description": "Easily switches from coding to yoga and back.",
  "category": "For Health",
  "superpowers": {
    "live": "+400",
    "create": "+400",
    "love": "+400",
    "dream": "+400"
  }
},

{
  "name": "Healthy Snacker",
  "description": "Always picks fruit, even when chocolate is within arm’s reach.",
  "category": "For Health",
  "superpowers": {
    "live": "+400",
    "create": "+300",
    "love": "+200",
    "dream": "+400"
  }
},

{
  "name": "Chair Exerciser",
  "description": "Manages to work out without leaving the chair.",
  "category": "For Health",
  "superpowers": {
    "live": "+500",
    "create": "+500",
    "love": "+500",
    "dream": "+400"
  }
},

{
  "name": "Caffeine Filter",
  "description": "Drinks coffee at night and still falls asleep with no problem.",
  "category": "For Health",
  "superpowers": {
    "live": "+400",
    "create": "+300",
    "love": "+500",
    "dream": "+200"
  }
},]

let forHarmonyCardsList = [
  {
    "name": "Joy Charger",
    "description": "Finds joy in the little things—even in a build that finishes unexpectedly fast.",
    "category": "For Harmony",
    "superpowers": {
      "live": "+200",
      "create": "+200",
      "love": "+500",
      "dream": "+500"
    }
  },

  {
    "name": "Error Laugher",
    "description": "Laughs at code errors like they’re jokes instead of getting angry.",
    "category": "For Harmony",
    "superpowers": {
      "live": "+300",
      "create": "+200",
      "love": "+500",
      "dream": "+500"
    }
  },

  {
    "name": "Bug Acceptance Guru",
    "description": "Accepts bugs as part of the journey to perfection — it’s just another task.",
    "category": "For Harmony",
    "superpowers": {
      "live": "+300",
      "create": "+200",
      "love": "+500",
      "dream": "+400"
    }
  },

  {
    "name": "Spontaneous Coding Philosopher",
    "description": "Philosophically accepts any client suggestion after a long refactor.",
    "category": "For Harmony",
    "superpowers": {
      "live": "+300",
      "create": "+200",
      "love": "+500",
      "dream": "+400"
    }
  },

  {
    "name": "Deadline Sage",
    "description": "Remains zen even when the deadline is close and the project manager is stressed.",
    "category": "For Harmony",
    "superpowers": {
      "live": "+200",
      "create": "+200",
      "love": "+300",
      "dream": "+500"
    }
  },

  {
    "name": "Inspiration Maestro",
    "description": "Finds inspiration on an empty screen as if masterpieces are already there.",
    "category": "For Harmony",
    "superpowers": {
      "live": "+300",
      "create": "+200",
      "love": "+400",
      "dream": "+100"
    }
  },

  {
    "name": "Peace Keeper",
    "description": "Maintains inner calm even in moments of intense crisis.",
    "category": "For Harmony",
    "superpowers": {
      "live": "+200",
      "create": "+200",
      "love": "+500",
      "dream": "+500"
    }
  },

  {
    "name": "Empathy Guru",
    "description": "Feels the team’s mood and can lift everyone’s spirits.",
    "category": "For Harmony",
    "superpowers": {
      "live": "+500",
      "create": "+200",
      "love": "+500",
      "dream": "+500"
    }
  },

  {
    "name": "Laughter Generator",
    "description": "Can lighten any tense situation with a joke that even bugs laugh at.",
    "category": "For Harmony",
    "superpowers": {
      "live": "+300",
      "create": "+200",
      "love": "+200",
      "dream": "+500"
    }
  },

  {
    "name": "Pause Master",
    "description": "Knows when to just step back from the keyboard and breathe.",
    "category": "For Harmony",
    "superpowers": {
      "live": "+300",
      "create": "+200",
      "love": "+100",
      "dream": "+100"
    }
  },

  {
    "name": "Coder Healer",
    "description": "Can support a colleague in their darkest hour, even if it’s a 500 error.",
    "category": "For Harmony",
    "superpowers": {
      "live": "+300",
      "create": "+200",
      "love": "+500",
      "dream": "+500"
    }
  },

  {
    name: "Music Code Curator",
    description: "Creates work playlists so good, even deadlines follow the rhythm.",
    category: "For Harmony",
    superpowers: {
      "live": "+300",
      "create": "+200",
      "love": "+300",
      "dream": "+200"
    }
  }
]

let workCards = document.querySelectorAll('.work-card');
let healthCards = document.querySelectorAll('.health-card');
let harmonyCards = document.querySelectorAll('.harmony-card');
let allTab = document.querySelector('.all-tab')
let workTab = document.querySelector('.for-work-tab')
let healthTab = document.querySelector('.for-health-tab')
let harmonyTab = document.querySelector('.for-harmony-tab')
let mainSection = document.querySelector('.gifts-section')
let giftsDiv = document.querySelector('.gifts-div')
let giftsContainer = document.querySelector('.gifts-page-container')

let makeElement = function (tagName, className, text) {
  let element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

let createCard = function (product) {
  let listItem = makeElement('div', 'card');

  let picture = makeElement('div', 'for-work-img');
  listItem.appendChild(picture);

  let headerContainer = makeElement('div', 'card-header-container');
  listItem.appendChild(picture);

  let h4 = makeElement('h4', 'for-work-h4', product.category);
  headerContainer.appendChild(h4);

  let h3 = makeElement('h3', 'card-h3', product.name);
  headerContainer.appendChild(h3);

  return listItem;
};


workTab.addEventListener('click', function () {
  mainSection.style.height = '1394px';
  giftsDiv.style.height = '1274px';
  allTab.classList.remove('all-tab');
  allTab.classList.add('all-tab-none-active')
  workTab.classList.add('for-work-tab-active')
  for(let i = 0; i < workCards.length; i++){
    workCards[i].remove()
  }
  for(let i = 0; i < harmonyCards.length; i++){
    harmonyCards[i].remove();
  }
  for(let i = 0; i < healthCards.length; i++){
    healthCards[i].remove();
  }
  for(let i = 0; i < forWorkCardsList; i++){
    let card = createCard(forWorkCardsList[i]);
    giftsContainer.append(card);
  }
});*/
