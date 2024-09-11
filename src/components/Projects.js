// src/components/Projects.js
import React from 'react';
import Slider from 'react-slick';
import { ProjectOutlined, GithubOutlined } from '@ant-design/icons';

// Sample project data
const projects = [
  {
    title: "Bookshelf Exchange",
    description: "A platform for students to buy, sell, and exchange textbooks.",
    githubLink: "https://github.com/snehsaurav248/Bookshelf-Exchange-App",
    color: "text-blue-500"
  },
  {
    title: "Fit Fuel",
    description: "A calorie tracking app with visual data representation.",
    githubLink: "https://github.com/snehsaurav248/Fit-Fuel-App",
    color: "text-green-500"
  },
  {
    title: "Pharmaceutical Sciences",
    description: "Web interfaces for pharmaceutical research tools and data management.",
    githubLink: "https://github.com/snehsaurav248/Pharmaceutical-Sciences.git",
    color: "text-red-500"
  },
  {
    title: "Kanban Board",
    description: "A dynamic Kanban board with drag-and-drop functionality for task management.",
    githubLink: "https://github.com/snehsaurav248/Kanban-Board",
    color: "text-purple-500"
  }
];

const Projects = () => {
  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section 
      id="projects" 
      className="relative min-h-screen py-16 px-4"
      style={{ 
        backgroundImage: 'url(/assets/projects-bg.jpg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed' 
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better text visibility */}
      <div className="relative container mx-auto text-center z-10">
        <h2 className="text-5xl font-bold mb-8 text-white">Projects</h2>
        <p className="text-lg mb-12 text-gray-300">
          Dive into some of the projects I've worked on:
        </p>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div 
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center"
            >
              <ProjectOutlined className={`text-4xl ${project.color} mb-4`} />
              <h3 className="text-xl font-semibold mb-2 text-gray-700">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`text-${project.color} hover:underline`}
              >
                <GithubOutlined className="mr-2" /> View on GitHub
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
