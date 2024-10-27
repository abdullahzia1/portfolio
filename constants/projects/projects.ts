import DROPBOX_CONTENT from "@/constants/dropboxcontent";
import { Project } from "@/types";

import {
  RAWG_DESCRIPTION,
  ECOMMERCE_DESCRIPTION,
  BOOKREVIEWAPI_DESCRIPTION,
  SAAS_CHATBOT,
  ChatterTask,
} from "./descriptions";

const PROJECTS: Project[] = [
  {
    media: DROPBOX_CONTENT.media_todo,
    mediaDescription: "The correct video has not yet been added.",
    title: "CheezBaich",
    date: "03/2024",
    thumbnail: DROPBOX_CONTENT.thumbnail_ECOMMERCEAPI,
    id: "https://cheezbaich-com.onrender.com/",

    about:
      "Completed fullstack project built in MERN. Implemented PayPal using it's API & Redux for state management.",
    description: ECOMMERCE_DESCRIPTION(),
    skills: [
      {
        name: "MongoDB",
        icon: "https://img.shields.io/badge/-MongoDB-informational?style=for-the-badge&color=black&logo=mongoDB",
      },
      {
        name: "Bootstrap",
        icon: "https://img.shields.io/badge/Bootstrap%20UI-informational?style=for-the-badge&color=black&logo=Bootstrap&logoColor=red",
      },
      {
        name: "Node.js",
        icon: "https://img.shields.io/badge/-Node.js-informational?style=for-the-badge&color=black&logo=node.js",
      },
      {
        name: "React",
        icon: "https://img.shields.io/badge/-React-informational?style=for-the-badge&color=black&logo=react",
      },
      {
        name: "Express.js",
        icon: "https://img.shields.io/badge/Express.js-informational?style=for-the-badge&color=black&logo=express.js&logoColor=white",
      },
      {
        name: "Render",
        icon: "https://img.shields.io/badge/Render-%23000000.svg?style=for-the-badge&color=black&logo=render&logoColor=white",
      },
      {
        name: "Postgres",
        icon: "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&color=black&logo=postgresql&logoColor=white",
      },
      {
        name: "ChatGPT",
        icon: "https://img.shields.io/badge/ChatGPT-informational?style=for-the-badge&color=black&logo=openai&logoColor=green",
      },
    ],
  },
  {
    media: DROPBOX_CONTENT.media_todo,
    mediaDescription:
      "More analyzing tools are coming in the future, but already the user is provided with a lot of information. What comes to exporting, both a more simpler and concise version, as well as a highly detailed one, can be downloaded.",
    href: "https://github.com/abdullahzia1/Book-Review-API/",
    thumbnail: DROPBOX_CONTENT.thumbnail_BOOKREVIEWAPI,
    deployedOn: "API, not Deployed",
    date: "04/2024",
    title: "BookReviewAPI",
    id: "https://github.com/abdullahzia1/Book-Review-API",
    about:
      "Service to add and remove or rate books, Implemented user authentification, CRUD ops and Tested on Postman.",
    description: BOOKREVIEWAPI_DESCRIPTION(),
    skills: [
      {
        name: "Node.js",
        icon: "https://img.shields.io/badge/-Node.js-informational?style=for-the-badge&color=black&logo=node.js",
      },
      {
        name: "Express.js",
        icon: "https://img.shields.io/badge/Express.js-informational?style=for-the-badge&color=black&logo=express.js&logoColor=white",
      },
    ],
  },
  {
    media: DROPBOX_CONTENT.media_todo,
    mediaDescription: "The correct video has not yet been added.",
    href: "https://github.com/abdullahzia1",
    thumbnail: DROPBOX_CONTENT.thumbnail_RAWG,
    deployedOn: "Netlify",
    date: "06/2024",
    id: "https://gamediscovery-three.vercel.app/",
    title: "Games Discovery",
    about:
      "RAWG website clone built on ChakraUI. Implemented unlimited Scroll with responsive UI.",
    description: RAWG_DESCRIPTION(),
    skills: [
      {
        name: "GitHub Actions",
        icon: "https://img.shields.io/badge/GitHub%20Actions-%232671E5.svg?style=for-the-badge&color=black&logo=githubactions",
      },
      {
        name: "TypeScript",
        icon: "https://img.shields.io/badge/-TypeScript-informational?style=for-the-badge&color=black&logo=typescript",
      },
      {
        name: "Chakra UI",
        icon: "https://img.shields.io/badge/-ChakraUI-informational?style=for-the-badge&color=black&logo=chakraui",
      },
      {
        name: "React",
        icon: "https://img.shields.io/badge/-React-informational?style=for-the-badge&color=black&logo=react",
      },
      {
        name: "Netlify",
        icon: "https://img.shields.io/badge/Netlify-%23000000.svg?style=for-the-badge&color=black&logo=netlify&logoColor=white",
      },
      {
        name: "ChatGPT",
        icon: "https://img.shields.io/badge/ChatGPT-informational?style=for-the-badge&color=black&logo=openai&logoColor=green",
      },
    ],
  },
  {
    media: DROPBOX_CONTENT.media_todo,
    mediaDescription: "The correct video has not yet been added.",
    href: "https://github.com/abdullahzia1/SaaS-ChatApp",
    thumbnail: DROPBOX_CONTENT.thumbnail_RAWG,
    deployedOn: "Amazon EC2",
    date: "Under Development",
    id: "https://github.com/abdullahzia1/SaaS-ChatApp",
    title: "SaaS Chatbot",
    about:
      "Developed a conversational chatbot powered by the OpenAI API and MERN Stack.",
    description: SAAS_CHATBOT(),
    skills: [
      {
        name: "TypeScript",
        icon: "https://img.shields.io/badge/-TypeScript-informational?style=for-the-badge&color=black&logo=typescript",
      },
      {
        name: "Chakra UI",
        icon: "https://img.shields.io/badge/-ChakraUI-informational?style=for-the-badge&color=black&logo=chakraui",
      },
      {
        name: "React",
        icon: "https://img.shields.io/badge/-React-informational?style=for-the-badge&color=black&logo=react",
      },
      {
        name: "Vercel",
        icon: "https://img.shields.io/badge/vercel-%23316192.svg?style=for-the-badge&color=black&logo=vercel&logoColor=white",
      },
      {
        name: "OpenAI API",
        icon: "https://img.shields.io/badge/OpenAI_API-informational?style=for-the-badge&color=black&logo=openai&logoColor=green",
      },
      {
        name: "Context API",
        icon: "https://img.shields.io/badge/-ContextAPI-informational?style=for-the-badge&color=black&logo=react",
      },
      {
        name: "Node.js",
        icon: "https://img.shields.io/badge/Node.js-informational?style=for-the-badge&color=black&logo=node.js",
      },
      {
        name: "Express.js",
        icon: "https://img.shields.io/badge/Express.js-informational?style=for-the-badge&color=black&logo=express",
      },
      {
        name: "MongoDB",
        icon: "https://img.shields.io/badge/MongoDB-informational?style=for-the-badge&color=black&logo=mongodb",
      },
    ],
  },
  {
    media: DROPBOX_CONTENT.media_todo,
    mediaDescription: "A demo video for ChatterTask is coming soon.",
    href: "https://github.com/abdullahzia1/ChatterTask",
    thumbnail: DROPBOX_CONTENT.thumbnail_RAWG,
    deployedOn: "Amazon EC2",
    date: "Under Development",
    id: "https://github.com/abdullahzia1/ChatterTask",
    title: "ChatterTask",
    about:
      "ChatterTask is a real-time WebSocket-based chat application with integrated todo management for user task tracking. Built with the PERN stack and TypeScript, it uses Context API for state management and Tailwind CSS for responsive design. Features include OAuth for login, custom signup and login options, and secure data handling. The app is hosted on Amazon EC2 for robust scalability and performance.",
    description: ChatterTask(),
    skills: [
      {
        name: "TypeScript",
        icon: "https://img.shields.io/badge/-TypeScript-informational?style=for-the-badge&color=black&logo=typescript",
      },
      {
        name: "PostgreSQL",
        icon: "https://img.shields.io/badge/PostgreSQL-informational?style=for-the-badge&color=black&logo=postgresql",
      },
      {
        name: "Express.js",
        icon: "https://img.shields.io/badge/Express.js-informational?style=for-the-badge&color=black&logo=express",
      },
      {
        name: "React",
        icon: "https://img.shields.io/badge/-React-informational?style=for-the-badge&color=black&logo=react",
      },
      {
        name: "Node.js",
        icon: "https://img.shields.io/badge/Node.js-informational?style=for-the-badge&color=black&logo=node.js",
      },
      {
        name: "Tailwind CSS",
        icon: "https://img.shields.io/badge/-TailwindCSS-informational?style=for-the-badge&color=black&logo=tailwindcss",
      },
      {
        name: "OAuth",
        icon: "https://img.shields.io/badge/OAuth-informational?style=for-the-badge&color=black&logo=oauth",
      },
      {
        name: "WebSockets",
        icon: "https://img.shields.io/badge/WebSockets-informational?style=for-the-badge&color=black&logo=websocket",
      },
      {
        name: "Context API",
        icon: "https://img.shields.io/badge/-ContextAPI-informational?style=for-the-badge&color=black&logo=react",
      },
      {
        name: "Amazon EC2",
        icon: "https://img.shields.io/badge/AmazonEC2-informational?style=for-the-badge&color=black&logo=amazonaws",
      },
    ],
  },

  {
    media: DROPBOX_CONTENT.media_todo,
    mediaDescription: "The correct video has not yet been added.",
    href: "https://github.com/abdullahzia1",
    thumbnail: DROPBOX_CONTENT.thumbnail_RAWG,
    deployedOn: "Netlify",
    date: "Developed",
    id: "https://github.com/abdullahzia1/password-gen-app",
    title: "Pass Generator",
    about:
      "Designed and implemented a simple password generator and a very simple user interface using tkinter.",
    description: RAWG_DESCRIPTION(),
    skills: [
      {
        name: "GitHub Actions",
        icon: "https://img.shields.io/badge/GitHub%20Actions-%232671E5.svg?style=for-the-badge&color=black&logo=githubactions",
      },
      {
        name: "TypeScript",
        icon: "https://img.shields.io/badge/-TypeScript-informational?style=for-the-badge&color=black&logo=typescript",
      },
      {
        name: "Chakra UI",
        icon: "https://img.shields.io/badge/-ChakraUI-informational?style=for-the-badge&color=black&logo=chakraui",
      },
      {
        name: "React",
        icon: "https://img.shields.io/badge/-React-informational?style=for-the-badge&color=black&logo=react",
      },
      {
        name: "Netlify",
        icon: "https://img.shields.io/badge/Netlify-%23000000.svg?style=for-the-badge&color=black&logo=netlify&logoColor=white",
      },
      {
        name: "ChatGPT",
        icon: "https://img.shields.io/badge/ChatGPT-informational?style=for-the-badge&color=black&logo=openai&logoColor=green",
      },
    ],
  },
];

export default PROJECTS;
