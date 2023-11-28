"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import styles from "./HeroSection.module.css";
gsap.registerPlugin(TextPlugin);
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const Hero = () => {
	const h1Ref = useRef<HTMLHeadingElement>(null);
	const pRef = useRef(null);
	const handleSeeMoreClick = () => {
		gsap.to(window, { duration: 1, scrollTo: "#about-me" });
	};

	useEffect(() => {
		const tl = gsap.timeline();

		if (h1Ref.current) {
			tl.fromTo(
				h1Ref.current.children,
				{ opacity: 0, y: -20 },
				{ opacity: 1, y: 0, stagger: 0.05, duration: 0.8 }
			);
		}

		if (pRef.current) {
			tl.to(
				pRef.current,
				{
					delay: 1,
					duration: 2,
					text: "The awesome Programmer you have never met before..",
					ease: "none",
					autoAlpha: 1,
				},
				">"
			);
		}
	}, []);

	const backgroundImageStyle = {
		backgroundImage:
			"url(https://res.cloudinary.com/sudeshmaldivesbook/image/upload/v1701123159/UIPS.jpg)",
		backgroundSize: "cover",
		backgroundPosition: "center center",
		backgroundRepeat: "no-repeat",
	};

	return (
		<div
			className={`${styles.heroAnimatedBackground} min-h-screen`}
			style={{
				backgroundImage:
					"url(https://res.cloudinary.com/sudeshmaldivesbook/image/upload/v1701123159/UIPS.jpg)",
				backgroundSize: "cover",
				backgroundPosition: "center center",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div
				className="hero-content text-center"
				style={{
					position: "absolute",
					top: "50%",
					left: "52%",
					transform: "translate(-50%, -50%)",
				}}
			>
				<div className="max-w-md">
					<h1 ref={h1Ref} style={{ whiteSpace: "nowrap" }}>
						{`I'm Maheshi.`.split("").map((char, index) => {
							const isSpace = char === " ";
							return (
								<span
									key={index}
									style={{
										display: isSpace ? "inline" : "inline-block",
										opacity: 0,
										marginRight: isSpace ? "0.25em" : 0,
									}}
								>
									{char}
								</span>
							);
						})}
					</h1>
					<div
						style={{
							maxWidth: "300px",
							margin: "0 auto",
							textAlign: "center",
							opacity: 0,
						}}
						ref={pRef}
					>
						<p ref={pRef} style={{ opacity: 0 }} className="hero-paragraph">
							The awesome Programmer you have never met before..
						</p>
					</div>
				</div>
			</div>
			<button
				onClick={handleSeeMoreClick}
				className={`${styles.circleGapButton} btn btn-xs sm:btn-sm md:btn-md lg:btn-lg absolute z-10`}
				style={{
					bottom: "10%",
					left: "50%",
					transform: "translateX(-50%)",
				}}
			>
				See more
			</button>
		</div>
	);
};

export default Hero;
