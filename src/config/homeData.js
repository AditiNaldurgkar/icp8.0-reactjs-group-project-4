import computer from "./Images/computer.png";
import dataScience from "./Images/data-science .png";
import features from "./Images/features.png";
import product from "./Images/product.png";
import digital from "./Images/digital-marketing.png";
import google from "./Images/google.png";
import microsoft from "./Images/microsoft.png";
import social from "./Images/social.png";
import apple from "./Images/apple-logo.png";
import mobile from "./Images/mobile.png";
import arav from "./Images/arav.jpg";
import arjun from "./Images/arjun.png";
import isha from "./Images/isha.jpeg";
import sneha from "./Images/sneha.jpeg";

const highDemandJobs = [
    { imgSrc: computer, alt: 'Software Engineer', title: 'Software Engineer', description: 'Software Engineers design, develop, and maintain software applications and systems. They work on coding, testing, and debugging to ensure software is functional, reliable, and user-friendly.' },
    { imgSrc: dataScience, alt: 'Data Scientist', title: 'Data Scientist', description: 'Data Scientists analyze complex data sets to help organizations make data-driven decisions. They use statistical methods, machine learning, and data visualization to uncover insights and trends from data.' },
    { imgSrc: product, alt: 'Product Manager', title: 'Product Manager', description: 'Product Managers oversee the development and lifecycle of products. They work cross-functionally with engineering, marketing, and sales teams to define product features, develop roadmaps, and ensure successful product launches.' },
    { imgSrc: features, alt: 'UX Designer', title: 'UX Designer', description: 'UX Designers focus on creating intuitive and engaging user experiences for digital products. They conduct user research, create wireframes and prototypes, and collaborate with developers to ensure the product meets user needs and expectations.' },
    { imgSrc: digital, alt: 'Digital Marketer', title: 'Digital Marketer', description: 'Digital Marketers develop and implement online marketing strategies to drive traffic and sales. They use various digital channels, including social media, email, and search engine marketing, to reach and engage target audiences.' },
  ];

  const topCompanies = [
    { 
        logoSrc: google, 
        alt: 'Google', 
        name: 'Google', 
        description: 'Google LLC is a multinational technology company specializing in Internet-related services and products. Its most popular services include search, advertising, cloud computing, and software. Google is renowned for its innovative work environment and is a major player in various tech sectors.',
    },
    { 
        logoSrc: microsoft, 
        alt: 'Microsoft', 
        name: 'Microsoft', 
        description: 'Microsoft Corporation is a global leader in software, hardware, and technology solutions. Known for its Windows operating system, Office suite, and Azure cloud services, Microsoft offers a broad range of career opportunities in technology, business, and research.',
    },
    { 
        logoSrc: social, 
        alt: 'Amazon', 
        name: 'Amazon', 
        description: 'Amazon.com, Inc. is an American multinational technology company focusing on e-commerce, cloud computing, and artificial intelligence. As one of the world\'s largest online retailers, Amazon provides a diverse range of career opportunities in various fields including technology, logistics, and retail.',
    },
    { 
        logoSrc: apple, 
        alt: 'Apple', 
        name: 'Apple', 
        description: 'Apple Inc. is a leading technology company known for its innovative consumer electronics, software, and services. With iconic products like the iPhone, iPad, and Mac, Apple offers exciting career opportunities in design, engineering, retail, and more.',
    },
    { 
        logoSrc: mobile, 
        alt: 'Meta', 
        name: 'Meta (formerly Facebook)', 
        description: 'Meta Platforms, Inc., formerly known as Facebook, Inc., is a multinational technology conglomerate specializing in social media services, virtual reality, and artificial intelligence. Meta focuses on building communities and connecting people around the world, offering diverse career paths in tech and beyond.',
    }
];

  
  const newsArticles = [
    { img:'https://img.freepik.com/premium-photo/jobs-with-wooden-colorfull-cubes_488220-3036.jpg?w=996',title:'New Job Trends for 2024', description: 'Explore the latest job market trends for 2024 and how they might affect your career planning.', date: 'September 1, 2024' },
    { img:'https://img.freepik.com/free-photo/scene-with-business-person-working-futuristic-office-job_23-2151003709.jpg?t=st=1726455187~exp=1726458787~hmac=80224f20675f1608428b36db0592818c62dde06f1dd458394001901c745b30dd&w=996',title: 'Top Skills in Demand', description: 'Find out which skills are most sought after by employers in today’s job market.', date: 'August 25, 2024' },
    { img:'https://img.freepik.com/free-photo/happy-male-candidate-greeting-member-human-resource-team-job-interview-office_637285-6567.jpg?t=st=1726454870~exp=1726458470~hmac=d24929ea66cf7c8a8b37bddd441e667459d992e7d9d5ba8a2703ca34370a8f47&w=996',title: 'How to Ace a Job Interview', description: 'Get tips and tricks on how to prepare for and succeed in your next job interview.', date: 'August 10, 2024' },
    { img:'https://img.freepik.com/free-photo/hr-representatives-positively-greeting-female-job-candidate_1163-4702.jpg?t=st=1726455042~exp=1726458642~hmac=a61485c1874ecc4ec874cc1630f7f4a8deeb3cfad09aa171f0b0c3e68f0de047&w=996',title: 'Remote Work: The Future of Employment', description: 'Learn about the rise of remote work and what it means for the future of employment across various industries.', date: 'September 15, 2024' }
  ];

  const feedbacks =[
  { 
    img: arav, alt: 'Aarav',
    name: '', 
    comment: 'Great platform! The job search features are very helpful and user-friendly.', 
    rating: '⭐⭐⭐⭐⭐'
  },
  { 
    img: isha, alt: 'Isha',
    name: 'Isha Patel', 
    comment: 'I found my dream job through this site.Application process was smooth and efficient.', 
    rating: '⭐⭐⭐⭐' 
  },
  { 
    img: arjun,
    alt: 'Arjun',
    name: 'Arjun Gupta', 
    comment: 'The resources and articles provided are top-notch. I feel well-prepared for interviews.', 
    rating: '⭐⭐⭐⭐⭐'
  },
  { 
    img: sneha, alt: 'Sneha',
    name: 'Sneha Joshi', 
    comment: 'The site is easy to navigate, but I wish there were more job listings in my field.', 
    rating: '⭐⭐⭐' 
  }
]
  
  export {highDemandJobs,topCompanies,newsArticles,feedbacks}