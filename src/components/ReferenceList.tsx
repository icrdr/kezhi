import React from "react";
import ReferenceCard, { reference } from "@/components/ReferenceCard";

const ReferenceList = ({ references }: { references: reference[] }) => {
  return (
    <div className="space-y-4">
      <div className="font-serif text-3xl font-black">参考资料</div>
      <div className="overflow-x-auto">
        <div className="flex gap-4">
          {references.map((reference, index) => {
            return (
              <div className={""} key={index}>
                <ReferenceCard reference={reference} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReferenceList;
