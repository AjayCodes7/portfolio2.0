import memegen from './images/memegen.jpg'
import microfin from './images/microfin.png'
import quizzes from './images/quizzes.png'
import signlang from './images/signlang.png'
import codpodium from './images/codpodium.png'
export const projects = [
    {
        image: codpodium,
        title: 'CodPodium | Online HTML, CSS & JavaScript Playground',
        slug: 'codpodium',
        tagline:
            'A lightweight, browser-based coding Playground for quickly testing and previewing HTML, CSS, and JavaScript.',
        overview:
            'CodPodium is an online Playground designed for developers who need a fast and efficient way to test front-end code. It provides instant output rendering, supports local storage for persistent sessions, and allows users to download their projects as a zip file. Built with React, it’s an ideal tool for experimenting with components, debugging ideas, and creating quick prototypes.',
        features: [
            'Instant output preview as you type.',
            'Great for testing temporary components or ideas.',
            'Code is saved in local storage to prevent loss on refresh.',
            'Download your code as a zip file for portability.',
            'Minimalistic and distraction-free interface.',
        ],
        techStack: ['React', 'HTML', 'CSS', 'JavaScript'],
        challenges: [
            'Implementing seamless real-time preview without performance lag.',
            'Managing local storage efficiently for persistent sessions.',
            'Packaging and exporting projects as zip files directly in the browser.',
            'Designing an intuitive and lightweight interface for a smooth user experience.',
        ],
        learnings: [
            'Improved knowledge of React state management for real-time updates.',
            'Enhanced skills in browser storage APIs for persistent data handling.',
            'Gained experience in client-side file packaging and downloads.',
            'Learned to optimize rendering for a live coding environment.',
        ],
        feedback: false,
        links: {
            live: 'https://ajaycodes7.github.io/codpodium/',
            github: 'https://github.com/AjayCodes7/codpodium',
        },
    },
    {
        image: signlang,
        title: 'Real-Time Sign Language Detection and Captioning for Video Chatting',
        slug: 'Sign-Language-Captioning',
        tagline:
            'An AI-powered system enabling real-time sign language recognition and captioning for accessible video communication.',
        overview:
            'This project introduces a real-time sign language detection and captioning system designed for video conferencing applications. By integrating AI-driven gesture recognition with WebRTC-based video calls, it enhances communication between sign language users and non-signers. The system leverages MediaPipe for hand landmark detection and a Random Forest Classifier for gesture classification, ensuring accurate and low-latency caption generation.',
        features: [
            'Real-time sign language recognition using MediaPipe',
            'Caption generation integrated directly into video calls',
            'Low-latency WebRTC-based video and audio communication',
            'Custom dataset for improved model accuracy and robustness',
            'Scalable architecture supporting dynamic gesture recognition',
        ],
        techStack: [
            'Python',
            'Flask',
            'OpenCV',
            'MediaPipe',
            'Random Forest Classifier',
            'Node.js',
            'Express.js',
            'WebRTC',
            'Socket.IO',
        ],
        challenges: [
            'Maintaining real-time performance without introducing video delays',
            'Handling variations in gestures due to lighting, angles, and regional differences',
            'Building a balanced and diverse dataset for robust classification',
            'Seamless integration of gesture recognition with ideo conferencing interfaces',
        ],
        learnings: [
            'Developed custom datasets with preprocessing and augmentation techniques',
            'Enhanced understanding of computer vision pipelines for gesture recognition',
            'Gained experience in integrating AI models into real-time applications',
            'Learned to optimize WebRTC for low-latency ideo streaming',
        ],
        feedback: false,
        links: {
            live: '',
            github: 'https://github.com/AjayCodes7/Real-time-sign-language-detection-api',
        },
    },
    {
        image: microfin,
        title: 'MicroFin | Digital Loan Management Platform',
        slug: 'MicroFin',
        tagline:
            'A mobile application transforming traditional financial lending into a secure, efficient, and fully digital experience.',
        overview:
            'MicroFin modernizes local financial lending by digitizing loan processes for lenders and borrowers. It enables seamless loan applications, approvals, disbursements, and repayments while providing real-time tracking and secure documentation. Designed for communities transitioning from paper-based systems, it ensures speed, transparency, and convenience for all stakeholders.',
        features: [
            'Digital loan request, approval, and disbursement workflows.',
            'Role-based access for Admins, Supervisors, Agents, and Customers.',
            'QR-based customer search and loan applications.',
            'Auto-generated repayment schedules with integrated reminders.',
            'Secure document uploads with once-only documentation policy.',
            'Visual dashboards for collection tracking and customer insights.',
            'Integrated notification system for approvals and repayments.',
        ],
        techStack: ['Flutter', 'PHP', 'Swagger', 'Bitbucket', 'Jira'],
        challenges: [
            'Transitioning traditional users to a fully digital platform.',
            'Ensuring secure storage and retrieval of sensitive documents.',
            'Building an intuitive UI for users with varying levels of digital literacy.',
            'Maintaining app performance and reliability under network limitations.',
        ],
        learnings: [
            'Gained expertise in building role-based access systems.',
            'Improved understanding of integrating QR-based search and tracking.',
            'Learned effective collaboration and version control using Jira and Bitbucket.',
            'Enhanced skills in designing mobile-first financial applications.',
        ],
        feedback: false,
        links: {
            live: '',
            github: '',
        },
    },
    {
        image: memegen,
        title: 'AI Meme Generator | Automated Humor Creation',
        slug: 'AI-Meme-Generator',
        tagline:
            'An AI-powered platform that automatically generates memes by combining witty captions with AI-synthesized images.',
        overview:
            'The AI Meme Generator leverages cutting-edge Natural Language Processing and Deep Learning-based image synthesis to automate meme creation. Using GPT-based language models for humorous captions and Stable Diffusion for high-quality images, the system produces relatable, visually appealing memes with minimal user input. Designed for social media creators, marketers, and enthusiasts, it provides a fast and creative way to generate engaging content.',
        features: [
            'Automatic generation of meme captions and images from user input.',
            'Supports multiple meme genres including sarcasm, irony, and educational humor.',
            'Simple and intuitive web interface for effortless meme creation.',
            'Automatic caption placement for visually balanced memes.',
            'Server-side processing to ensure privacy and security of user inputs.',
        ],
        techStack: [
            'Python 3',
            'Flask',
            'Pillow',
            'OpenAI API',
            'Stable Diffusion',
            'Requests',
            'Hugging Face',
        ],
        challenges: [
            'Ensuring humor relevance across different cultural contexts.',
            'Managing GPU and cloud resources for high-resolution image generation.',
            'Maintaining caption and image consistency for diverse topics.',
            'Optimizing latency for faster meme generation in real-time.',
        ],
        learnings: [
            'Enhanced understanding of combining NLP and image synthesis models.',
            'Improved skills in text-to-image workflows using Stable Diffusion.',
            'Learned efficient image manipulation techniques using Pillow.',
            'Gained experience in building AI-driven web applications with Flask.',
        ],
        feedback: true,
        links: {
            live: '',
            github: 'https://github.com/AjayCodes7/ai-meme-generator',
        },
    },
    {
        image: quizzes,
        title: 'Quiz Competition Web App | Interactive Learning Platform',
        slug: 'Quizzes',
        tagline:
            'A dynamic web application for creating, participating in, and managing quizzes with real-time scoring and feedback.',
        overview:
            'This project is a quiz competition platform designed to simplify quiz creation and participation. Users can generate quizzes with unique IDs, attempt them in real time, and receive instant feedback. The platform leverages database management, JavaScript interactivity, and JSON data handling to deliver a seamless experience for educators and learners, making it ideal for remote assessments and interactive learning.',
        features: [
            'Unique Quiz ID generation for secure and easy access.',
            'Customizable quiz creation with dynamic question input.',
            'Real-time scoring and instant result feedback.',
            'Responsive design for smooth performance across devices.',
            'Secure storage of quiz data and participant responses.',
        ],
        techStack: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'JSON'],
        challenges: [
            'Designing a scalable system for dynamic quiz creation and participation.',
            'Ensuring real-time scoring and feedback without performance delays.',
            'Building a responsive interface for multiple devices.',
            'Managing quiz data and participant responses securely.',
        ],
        learnings: [
            'Strengthened skills in database design and management for web applications.',
            'Improved understanding of JSON handling for dynamic data operations.',
            'Gained experience in building interactive UI with JavaScript.',
            'Enhanced ability to create responsive, user-friendly designs.',
        ],
        feedback: true,
        links: {
            live: '',
            github: 'https://github.com/AjayCodes7/quiz-application',
        },
    },
]
