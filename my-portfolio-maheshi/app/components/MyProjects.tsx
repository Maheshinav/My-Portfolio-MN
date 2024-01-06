'use client';
// MyProjects.tsx

import React, { useState } from "react";
import ProjectsGallery from "./Gallery";
import styles from "./MyProjects.module.css";

interface MyProjectsProps {
    id: string;
}

const MyProjects: React.FC<MyProjectsProps> = ({ id }) => {
  const [activeTab, setActiveTab] = useState("ALL"); 

  return (
    <div id="my-projects">
      <div className={styles.myProjectsHeadings}>
        <h2>Projects</h2>
      </div>

      <div role="tablist" className={`tabs ${styles.myProjectsTabs}`}>
        <a role="tab" 
           className={`tab ${activeTab === 'ALL' ? styles.activeTab : ''}`} 
           onClick={() => setActiveTab('ALL')}>
          ALL
        </a>
        <a role="tab" 
           className={`tab ${activeTab === 'MINI_WORKS' ? styles.activeTab : ''}`} 
           onClick={() => setActiveTab('MINI_WORKS')}>
          MINI WORKS
        </a>
      </div>

      <ProjectsGallery activeTab={activeTab} />
    </div>
  );
};

export default MyProjects;
