import {
  ArticleIcon,
  CertificateIcon,
  ClockIcon,
  fullStar,
  personFive,
  personFour,
  personOne,
  personThree,
  personTwo,
  VideoCameraIcon,
  VideoIcon,
} from "../assets/Courses/detailImages/courseDetailImages";

export const courseTitleByUrl = {
  // For "master-basics"
  "master-the-basics-korean-for-beginner":
    "Master the Basics: Korean for Beginner",
  "master-the-basics-thailand-for-beginner":
    "Master the Basics: Thailand for Beginner",
  "master-the-basics-japanese-for-beginner":
    "Master the Basics: Japanese for Beginner",
  "master-the-basics-spanish-for-beginner":
    "Master the Basics: Spanish for Beginner",
  "master-the-basics-english-for-beginner":
    "Master the Basics: English for Beginner",

  // For "elementary"
  "elementary-korean-master-the-basics": "Elementary Korean: Master the Basics",
  "elementary-thailand-master-the-basics":
    "Elementary Thailand: Master the Basics",
  "elementary-japanese-master-the-basics":
    "Elementary Japanese: Master the Basics",
  "elementary-spanish-master-the-basics":
    "Elementary Spanish: Master the Basics",
  "elementary-english-master-the-basics":
    "Elementary English: Master the Basics",

  // For "intermediate"
  "intermediate-korean-core-mastery": "Intermediate Korean: Core Mastery",
  "intermediate-thailand-core-mastery": "Intermediate Thailand: Core Mastery",
  "intermediate-japanese-core-mastery": "Intermediate Japanese: Core Mastery",
  "intermediate-spanish-core-mastery": "Intermediate Spanish: Core Mastery",
  "intermediate-english-core-mastery": "Intermediate English: Core Mastery",
};

export const chartData = [
  { number: 100 },
  { number: 80 },
  { number: 60 },
  { number: 40 },
  { number: 20 },
];

export const tabData = (slug) => {
  return [
    { label: "Overview", path: `/courses/${slug}` },
    {
      label: "Contents",
      path: `/courses/${slug}/contents`,
    },
    {
      label: "Instructor",
      path: `/courses/${slug}/instructor`,
    },
    {
      label: "Reviews",
      path: `/courses/${slug}/reviews`,
    },
    { label: "FAQ", path: `/courses/${slug}/faq` },
  ];
};

export const includedData = [
  { icon: VideoIcon, text: "12 hours video" },
  { icon: CertificateIcon, text: "Certificate" },
  { icon: ArticleIcon, text: "12 Article" },
  { icon: VideoCameraIcon, text: "Watch Offline" },
  { icon: ClockIcon, text: "Lifetime Access" },
];

export const testimonialData = [
  {
    image: personOne,
    name: "Htet Yadanar Win",
    icon: fullStar,
    text: "Their team offers a unique blend of creativity and insight that's truly rare. They're not just teachers; they're dedicated partners invested in our learning journey. We’re excited to continue growing with their guidance.",
  },
  {
    image: personTwo,
    name: "Kaung Zaw Thant",
    icon: fullStar,
    text: "Learning Japanese with them has been an incredible experience. The lessons are engaging, and they provide just the right mix of challenge and support. I’ve made so much progress and can’t wait to continue my journey with their guidance!",
  },
  {
    image: personThree,
    name: "Ei Su Naing",
    icon: fullStar,
    text: "Tr Olivia Wilson is an amazing teacher. She explains everything clearly and makes learning Japanese really fun. I’ve learned so much and feel more confident every day. Highly recommend!",
  },
  {
    image: personFour,
    name: "Su Yee Htet",
    icon: fullStar,
    text: "Olivia's teaching style is both engaging and insightful. She simplifies complex concepts and makes learning Korean an enjoyable experience. Her dedication and passion inspire confidence and motivate students to achieve their language goals.",
  },
  {
    image: personFive,
    name: "Aung Myo Min",
    icon: fullStar,
    text: "Learning Korean with Olivia feels like hanging out with a friend while watching your favorite TV show. Her fun and relaxed teaching style makes every lesson enjoyable, like binge-watching a series you can’t get enough of!",
  },
];
