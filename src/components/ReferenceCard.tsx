import React from "react";
import Image from "next/image";

export type reference = { name: string; source: string };

const ReferenceCard = ({ reference }: { reference: reference }) => {
  return (
    <div className="w-40 h-auto bg-slate-50 overflow-hidden rounded-lg">
      <div className="relative h-64">
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
      <div className="font-serif p-4 text-sm">{reference.name}</div>
    </div>
  );
};

export default ReferenceCard;
