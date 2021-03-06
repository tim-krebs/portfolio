import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Tim | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello my name is',
  name: 'Tim',
  subtitle: 'I am a Embedded Software Engineer.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',   // Put profile image here (apsect ratio: square)
  paragraphOne: 'I am a Embedded Software Engineer with speciality in C/C++, Python, Assembler.',
  paragraphTwo: 'I am interest in developing natural language procssseing (nlp) applications on MCUs.',
  paragraphThree: '...',
  //resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'houseparty.jpeg',
    title: 'House Part App',
    info: 'House party is a WebApp built with Django and React. The Backend is connected with Spotify.',
    info2: 'Users can create Party Rooms and share the room code with their freinds.',
    url: '',
    repo: 'https://github.com/tim-krebs/housepartyapp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'nlp.png',
    title: 'NLP in C++',
    info: 'This library detects your voice. The NN is trained with the MNIST Dataset.',
    info2: 'Unfortunately it is not completed yet, but I will work on it.',
    url: '',
    repo: 'https://github.com/tim-krebs/CPP_ML', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '',
    title: 'Search Engine',
    info: 'This is a Search Engine built in C++ and CMAKE.',
    info2: 'It is not yet uploaded',
    url: '',
    repo: 'https://github.com/tim-krebs/', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'timkrebs9@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://github.com/tim-krebs',
    },
    {
      id: nanoid(),
      name: 'medium',
      url: 'https://medium.com/@tim-krebs',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'linkedin.com/in/tim-krebs-04693a1b5',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/tim-krebs',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
