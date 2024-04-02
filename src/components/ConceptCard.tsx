import React from "react";
import Image from "next/image";

export type concept = { name: string; description: string };

const ConceptCard = ({ concept }: { concept: concept }) => {
  return (
    <div className="">
      <div className="relative h-48">
        <Image
          src="https://fakeimg.pl/300/"
          alt="Picture of the author"
          fill
          sizes="100vw, 100vh"
          priority
          style={{
            objectFit: "cover", // cover, contain, none
          }}
        />
      </div>
      <div className="py-4 w-full space-y-2 font-serif">
          <div className="text-xl font-bold">{concept.name}</div>
          <div className="text-base">{concept.description}</div>
        </div>
    </div>
  );
};

export default ConceptCard;
