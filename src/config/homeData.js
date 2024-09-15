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
import isha from "./Images/isha.jpg";
import sneha from "./Images/sneha.jpg";

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
    { title: 'New Job Trends for 2024', description: 'Explore the latest job market trends for 2024 and how they might affect your career planning.', date: 'September 1, 2024' },
    { title: 'Top Skills in Demand', description: 'Find out which skills are most sought after by employers in today’s job market.', date: 'August 25, 2024' },
    { title: 'How to Ace a Job Interview', description: 'Get tips and tricks on how to prepare for and succeed in your next job interview.', date: 'August 10, 2024' },
    { title: 'Remote Work: The Future of Employment', description: 'Learn about the rise of remote work and what it means for the future of employment across various industries.', date: 'September 15, 2024' }
  ];

  const feedbacks =[
  { 
    img: arav, alt: 'Aarav',
    name: 'Aarav Sharma', 
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