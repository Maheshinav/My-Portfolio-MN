import React, { useState, useRef } from "react";
import Image from "next/image";
import galleryStyles from "./Gallery.module.css";
import projectCardStyles from "./ProjectCard.module.css";
import Modal from "./Modal";





interface ProjectCardProps {
	imageUrl: string;
	projectName: string;
	subtitle: string;
	description: string;
	technologies: string[];
	index: number;
	isActive: boolean;
	githubUrl:string;
	images:string[];
	onCardClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
githubUrl ="https://github.com/Maheshinav/band-site.git",
	imageUrl,
	projectName,
	subtitle,
	description,
	technologies,
	index,
	isActive,
    images,
	onCardClick,
}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const modalRef = useRef<HTMLDivElement>(null);

	const openModal = (event: React.MouseEvent) => {
		event.stopPropagation(); // Prevent triggering card's onClick
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const handleBackdropClick = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		if (!modalRef.current?.contains(event.target as Node)) {
			closeModal();
		}
	};

	return (
	
		<div className={`${galleryStyles.projectCard} ${projectCardStyles.cardContainer}`} onClick={onCardClick}>
		<div className={galleryStyles.technologies}></div>
			<div className={galleryStyles.aspectRatio}>
				<div className={galleryStyles.imageWrapper}>
					<Image
                    src={imageUrl}
                    alt={`Project ${index + 1}`}
                    className={galleryStyles.projectImage}
                    width={769} // Adjust as needed
                    height={433} // Adjust as needed
                    quality={90}
                />
				<div className={galleryStyles.overlay}>
                <div className={projectCardStyles.overlayContent}>
                    <p className={projectCardStyles.projectName}>{projectName}</p>
                    <p className={projectCardStyles.technologies}>
                        {technologies.join('/ ')}
                    </p>
                    <button
                        className={projectCardStyles.projectButton}
                        onClick={openModal}
                    >
                       LEARN MORE
                    </button>
                </div>
								</div>
				</div>
			</div>
			{isModalOpen && (
				<Modal
					isOpen={isModalOpen}
					onClose={closeModal}
					projectName={projectName}
					subtitle={subtitle}
					description={description}
					githubUrl={githubUrl}
					images={images}
				>
				</Modal>
			)}
		</div>
	);
};

export default ProjectCard;