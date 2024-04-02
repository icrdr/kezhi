import React from "react";
import ConceptCard, { concept } from "@/components/ConceptCard";

const ConceptList = ({ concepts }: { concepts: concept[] }) => {
  return (
      <div className="space-y-4">
        <div className="font-serif text-3xl font-black">子结构</div>
        <div className="grid gap-4 lg:grid-cols-2 grid-cols-1">
          {concepts.map((concept, index) => {
            return (
              <div className={""} key={index}>
                <ConceptCard concept={concept} />
              </div>
            );
          })}
        </div>
      </div>
  );
};

export default ConceptList;
