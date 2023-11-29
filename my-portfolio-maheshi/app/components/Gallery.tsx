'use client';
import React from "react";
import ProjectCard from "./ProjectCard"; // Import the ProjectCard component
import styles from "./Gallery.module.css"; // Adjust the path as necessary

const ProjectsGallery = () => {
  const imageUrls = [
    "https://res.cloudinary.com/maheshidevelopments/image/upload/v1701255787/shows-ps-1.jpg",
    "https://res.cloudinary.com/maheshidevelopments/image/upload/v1701255787/shows-ps-1.jpg",
    "https://res.cloudinary.com/maheshidevelopments/image/upload/v1701255787/shows-ps-1.jpg",
    "https://res.cloudinary.com/maheshidevelopments/image/upload/v1701255787/shows-ps-1.jpg",
    "https://res.cloudinary.com/maheshidevelopments/image/upload/v1701255787/shows-ps-1.jpg",
    "https://res.cloudinary.com/maheshidevelopments/image/upload/v1701255787/shows-ps-1.jpg",
    "https://res.cloudinary.com/maheshidevelopments/image/upload/v1701255787/shows-ps-1.jpg",
    "https://res.cloudinary.com/maheshidevelopments/image/upload/v1701255787/shows-ps-1.jpg",
    "https://res.cloudinary.com/maheshidevelopments/image/upload/v1701255787/shows-ps-1.jpg"
    
  ];

  return (
    <div className={styles.projectsGallery}>
      {imageUrls.map((imageUrl, index) => (
        <ProjectCard key={index} imageUrl={imageUrl} index={index} />
      ))}
    </div>
  );
};

export default ProjectsGallery;
