import Card from "./Card";
import Image from "next/image";
import React from "react";

function About(props) {
  return (
    <div
      id="AboutMe"
      className={`h-screen py-20 ${
        props.darkMode ? "bg-zinc-900" : "bg-white"
      }`}>
      <h2 className="text-center font-bold text-2xl">About me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
        {props.data.map((dat) => (
          <Card
            key={dat.id}
            title={dat.title}
            description={dat.description}
            imageUrl={dat.imageUrl}
            alt={props.alt}
          />
        ))}
      </div>
    </div>
  );
}

export default About;
