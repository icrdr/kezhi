import React from "react";
import Image from "next/image";
import CONCEPTS from "@/data.json";

const Hint = ({ text }: { text: string }) => {
  return (
    <span className="relative group ">
      <span className="font-bold">{text}</span>
      <div className="w-auto h-auto z-50 invisible group-hover:visible absolute top-full left-0 bg-slate-50 rounded-lg overflow-hidden shadow-2xl">
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
        <div className="p-4 w-64 space-y-2 text-center">
          <div className="text-lg font-bold">{text}</div>
          <div className="text-xs">{CONCEPTS[text]?.description}</div>
        </div>
      </div>
    </span>
  );
};

export default Hint;
