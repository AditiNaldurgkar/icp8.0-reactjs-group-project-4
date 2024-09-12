import computer from "./Images/computer.png";
import dataScience from "./Images/data-science .png";
import features from "./Images/features.png";
import product from "./Images/product.png";
const highDemandJobs = [
    { imgSrc: computer, alt: 'Software Engineer', title: 'Software Engineer', description: 'Software Engineers design, develop, and maintain software applications and systems. They work on coding, testing, and debugging to ensure software is functional, reliable, and user-friendly.' },
    { imgSrc: dataScience, alt: 'Data Scientist', title: 'Data Scientist', description: 'Data Scientists analyze complex data sets to help organizations make data-driven decisions. They use statistical methods, machine learning, and data visualization to uncover insights and trends from data.' },
    { imgSrc: features, alt: 'Product Manager', title: 'Product Manager', description: 'Product Managers oversee the development and lifecycle of products. They work cross-functionally with engineering, marketing, and sales teams to define product features, develop roadmaps, and ensure successful product launches.' },
    { imgSrc: product, alt: 'UX Designer', title: 'UX Designer', description: 'UX Designers focus on creating intuitive and engaging user experiences for digital products. They conduct user research, create wireframes and prototypes, and collaborate with developers to ensure the product meets user needs and expectations.' },
    { imgSrc: dataScience, alt: 'Digital Marketer', title: 'Digital Marketer', description: 'Digital Marketers develop and implement online marketing strategies to drive traffic and sales. They use various digital channels, including social media, email, and search engine marketing, to reach and engage target audiences.' },
  ];
  
  const newsArticles = [
    { title: 'New Job Trends for 2024', description: 'Explore the latest job market trends for 2024 and how they might affect your career planning.', date: 'September 1, 2024' },
    { title: 'Top Skills in Demand', description: 'Find out which skills are most sought after by employers in today’s job market.', date: 'August 25, 2024' },
    { title: 'How to Ace a Job Interview', description: 'Get tips and tricks on how to prepare for and succeed in your next job interview.', date: 'August 10, 2024' },
    { title: 'Remote Work: The Future of Employment', description: 'Learn about the rise of remote work and what it means for the future of employment across various industries.', date: 'September 15, 2024' }
  ];
  
  const FAQ = [
    { head: 'How do I create an account?', description: 'To create an account, click the "Sign Up" button on the top right of the homepage. Enter your email, create a password, and complete your profile with relevant information.' },
    { head: 'How do I search for jobs?', description: 'Use the search bar on the homepage to enter keywords and select your desired location. You can filter results by job type, salary, and more.' },
    { head: 'How do I apply for a job?', description: 'Once you find a job you’re interested in, click the "Apply" button on the job listing. You will need to upload your resume and cover letter if required.' },
    { head: 'How can employers post a job?', description: 'Employers can post jobs by clicking on the "Post a Job" button. Fill out the job details, requirements, and company information, and then publish the listing.' },
    { head: 'What should I do if I forget my password?', description: 'Click the "Forgot Password" link on the login page. Follow the instructions to reset your password via email.' },
    { head: 'How can I contact support?', description: 'For any issues or inquiries, you can contact our support team by emailing support@example.com or using the "Contact Us" form on our website.' }
  ];

  export {highDemandJobs,newsArticles,FAQ}