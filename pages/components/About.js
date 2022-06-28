import Card from "./Card";
import Image from "next/image";
import React from "react";

function About(props) {
  const attitudes = [
    {
      id: 1,
      title: "Frontend developer",
      description:
        "As a frontend developer, I've focused on learn, use, and enjoy Reactjs, Nextjs, Vanilla JavaScript, CSS, SCSS, and Tailwindcss. I'm completily obsesed with these technologies",
      imageUrl: "/v1656451155/portfolio/aboutMe_x35gtb.png",
      alt: "Representative image for frontend developer.",
    },
    {
      id: 2,
      title: "Backend developer",
      description:
        "I've always been interested in the backend ecosystem. Since I worked with nodejs I knew that the backend was for me. Currently I'm working on Nodejs, but I've also worked with .Net framework and .Net Core.",
      imageUrl: "/v1656455452/portfolio/Completed_task__Outline_khmkce.png",
      alt: "Representative image for frontend developer",
    },
  ];

  return (
    <div
      id="AboutMe"
      className={`h-screen py-20 ${
        props.darkMode ? "bg-zinc-900" : "bg-white"
      }`}>
      <h2 className="text-center font-bold text-2xl">About me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
        {attitudes.map((data) => (
          <Card
            key={data.id}
            title={data.title}
            description={data.description}
            imageUrl={data.imageUrl}
            alt={data.alt}
          />
        ))}
      </div>
    </div>
  );
}

export default About;
