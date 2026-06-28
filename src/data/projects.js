export const projects = [
  {
    id: '01',
    name: 'Drummer Robot (PULSE)',
    tagline: 'A drumming robot with six arms and a twisting torso.',
    description: 'A robot that plays the drums via MIDI note signals. It has 6 adjustable arms, a kick drum, and a torso that twists and bends via stepper motors. Controlled by a Teensy 4.1 (C++) and a Raspberry Pi. \nBuilt by CERAS/Robotic Band subteam @ NU Robotics Club · See live performances @cerasnu · Currently building a guitar-playing robot',
    image: '/pulse.png',
    imagePosition: 'center 30%',
    tags: ['C++', 'Python', 'Real-Time Event-Driven Processing (MIDI)', 'Microcontrollers', 'Raspberry Pi', 'Robotics'],
    repo: 'https://github.com/NU-CERAS/DrummerBot_PIO',
    live: null,
  },
  {
    id: '02',
    name: 'AWS Song Recommender',
    tagline: 'Find ten songs that sound like the one you love.',
    description: 'A web app that recommends 10 similar songs based on audio features like tempo, energy, and danceability, then pulls them from Spotify\'s API. Uses a K-Nearest Neighbors model trained on 100k+ tracks from a Kaggle dataset. Built on AWS with Lambda, API Gateway, and RDS.',
    image: '/frontend_image.png',
    tags: ['AWS', 'Python', 'Spotify API', 'Machine Learning (K-Nearest Neighbors)', 'HTML/CSS'],
    repo: 'https://github.com/NU-Formula-Racing/daq-dash-25',
    live: null,
  },
  {
    id: '03',
    name: 'Formula Racing Dashboard & Telemetry',
    tagline: 'Real-time telemetry dashboard for an EV race car.',
    description: 'An LCD dashboard for Northwestern Formula Racing\'s first operational EV. Displays real-time speed, battery, temperature, and debugging data across 4 display interfaces, with a logging system for post-run analysis. Built in C++ on a Teensy 4.1. Team placed 22nd out of 86 at Formula SAE 2025.',
    image: '/formula_dash.png',
    tags: ['C++', 'Teensy 4.1', 'Embedded Systems', 'UI Design', 'SD Card Logging'],
    repo: 'https://github.com/NU-Formula-Racing/daq-dash-25',
    live: null,
  },
  {
    id: '04',
    name: 'Guava: Smart Route Generator (WildHacks 2025 finalist, top 10 out of 94 teams)',
    tagline: 'Generates safer, smarter cycling and running routes.',
    description: 'Web app that generates optimized cycling and running routes based on safety, road type, and distance. Built with React, Leaflet.js, and OpenStreetMap.',
    image: '/guava_frontend.png',
    tags: ['React.js', 'Node.js', 'OpenStreetMaps API', 'Leaflet.js', 'Tailwind CSS'],
    repo: 'https://devpost.com/software/guava-efod7v',
    live: null,
  },
]

export const research = [
  {
    id: 'r01',
    name: 'HAND ERC: Robotic Hand Manipulation',
    tagline: 'Teaching a robot hand to manipulate objects with RL.',
    description: 'Using Reinforcement Learning to implement CPO RL to train a LEAP robot hand to perform object manipulation. Currently ongoing research.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=450&fit=crop&q=80',
    tags: ['PyTorch', 'Python', 'Reinforcement Learning', 'mjlab', 'Google Colab', 'Robotics'],
    repo: null,
    live: null,
  },
  {
    id: 'r02',
    name: 'ExoDiscovery-Benchmark',
    tagline: 'Can LLMs judge exoplanet habitability from raw data?',
    description: 'LLM benchmark evaluating whether language models can reason exoplanet habitability from raw NASA data. Tested Qwen3-8B and Gemini 2.5 Flash. Found smaller models struggle with boundary cases, and both models are swayed by out-of-range values. Part of Prof. Manling Li’s CS396 course.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop&q=80',
    tags: ['Python', 'LLM Evaluation', 'Prompt Engineering', 'HuggingFace', 'Google Colab', 'LaTeX'],
    repo: 'https://github.com/julianeguo/exodiscovery-benchmark',
    live: null,
  },
]

export const moreProjects = [
  { name: 'Placeholder Project A', repo: 'https://github.com' },
  { name: 'Placeholder Project B', repo: 'https://github.com' },
  { name: 'Placeholder Project C', repo: 'https://github.com' },
]
