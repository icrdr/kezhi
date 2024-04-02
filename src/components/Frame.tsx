import React from "react";
import Image from "next/image";

const Frame = ({ height, source }: { height?: number; source: string }) => {
  return (
    <div className="h-full">
      <img className="object-cover h-full" src={source} alt="Frame" />
    </div>
  );
};

export default Frame;
