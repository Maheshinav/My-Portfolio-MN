import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Maheshi - Portfolio",
	description: "Welcome to my portfolio website!",
};

import Hero from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import MyProjects from "./components/MyProjects";
import Footer from "./components/Footer"

export default function Home() {
	return (
		<main>
			<Hero />
			<AboutMe />
			<MyProjects />
      <Footer/>
		</main>
	);
}
