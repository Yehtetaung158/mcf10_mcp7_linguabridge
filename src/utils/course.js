import {
  ArticleIcon,
  CertificateIcon,
  ClockIcon,
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
