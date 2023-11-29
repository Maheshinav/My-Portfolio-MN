/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import styles from "./AboutMe.module.css";

import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);




const AboutMeSection = () => {
	const sectionRef = useRef(null);
	const handleSeeMyWorksClick = () => {
		gsap.to(window, { duration: 1, scrollTo: "#my-projects" });
	};

	useEffect(() => {
		gsap.to(sectionRef.current, {
			backgroundPosition: "200% 50%",
			duration: 10,
			repeat: -1,
			ease: "linear",
			yoyo: true,
		});
	}, []);

	return (
		<section id="about-me" ref={sectionRef} className={styles.aboutMeSection}>
			<div className={styles.aboutMeContent}>
				<div className={styles.aboutMeContext}>
					<p>Maheshi Nawarathna</p>
					<h2>About</h2>
				</div>
				<div className={styles.aboutMeImage}>
					<img
						src="https://res.cloudinary.com/maheshidevelopments/image/upload/v1701216344/disruptivo-Xaen-acsLLo-unsplash.jpg"
						alt="About Me Image"
						style={{ maxWidth: "100%", height: "auto" }}
					/>
					
				</div>
        <p className={styles.aboutMeImage}>
						I am a Programmer who loves to make beautiful and useful websites.
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut quidem
						doloremque voluptates rerum, necessitatibus ullam ab dolor velit,
						consequuntur vel non illo placeat deleniti perferendis quaerat.
						Veniam minima totam atque. Lorem ipsum dolor sit, amet consectetur
						adipisicing elit. Nam accusamus atque in, qui officiis ut
						exercitationem unde aspernatur nemo saepe delectus architecto
						eveniet tenetur nobis sit consequuntur voluptatem quos quasi Lorem,
						ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
						deserunt sequi est omnis blanditiis adipisci dolorum eveniet vel
						quibusdam, iure excepturi natus corrupti sunt nesciunt molestiae
						quisquam iste alias pariatur!Lorem Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Maiores possimus reprehenderit atque,
						soluta molestias porro dolore ab necessitatibus corrupti! Sunt
						distinctio ad, nihil repellendus laudantium assumenda blanditiis
						fugiat iusto vitae!

            
          
					</p>
          

				<div className={styles.aboutMeButtonContainer}>
					<button
						onClick={handleSeeMyWorksClick}
						className={`${styles.aboutMeButton} btn btn-xs sm:btn-sm md:btn-md lg:btn-lg`}
					>
						See my works
					</button>
				</div>
			</div>
		</section>
	);
};

export default AboutMeSection;
