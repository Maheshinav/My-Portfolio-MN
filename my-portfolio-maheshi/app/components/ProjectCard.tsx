/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import styles from "./Gallery.module.css";
import projectCardStyles from "./ProjectCard.module.css";
interface ProjectCardProps {
	imageUrl: string;
	index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, index }) => {
	const [showOverlay, setShowOverlay] = useState(false);
	const [showModal, setShowModal] = useState(false);

	const toggleOverlay = () => setShowOverlay(!showOverlay);

	const toggleModal = () => {
		setShowModal(!showModal);
		setShowOverlay(false); // Optionally close the overlay when opening the modal
	};

	return (
		<div className={styles.projectCard} onClick={toggleOverlay}>
			<div className={styles.aspectRatio}>
				<div className={styles.imageWrapper}>
					<img
						src={imageUrl}
						alt={`Project ${index + 1}`}
						className={styles.projectImage}
					/>
					{showOverlay && (
						<div
							className={styles.overlay}
							style={{ backgroundColor: "#ffe4e6" }}
						>
							{" "}
							<div>
								<div className={projectCardStyles.overlayText}>PBANDSITE</div>{" "}
								<button className={projectCardStyles.overlayButton}>
									Learn More
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
			{showModal && (
				<div className="mockup-window border border-base-300">
					<div className="flex justify-center px-4 py-16 border-t border-base-300">
						{/* Content of the modal */}
						Hello!
					</div>
				</div>
			)}
		</div>
	);
};

export default ProjectCard;
