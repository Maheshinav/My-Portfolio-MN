'use client;'
import styles from'./MyProjects.module.css';
import Gallery from './Gallery';

const MyProjects = () => {
	return (
		<div id="my-projects">
    <div className={styles.myProjectsHeadings}>
    <h2>Projects</h2>
    </div>
			
<div role="tablist" className={`tabs tabs-boxed ${styles.myProjectsTabs}`}>
  <a role="tab" className="tab tab-active">ALL</a>
  <a role="tab" className="tab ">MINI WORKS</a>

</div>

<Gallery />
			
		</div>
	);
};

export default MyProjects;
