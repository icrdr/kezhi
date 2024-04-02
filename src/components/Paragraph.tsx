import React from "react";
import Hint from "@/components/Hint";

function segmentString(inputString: string) {
  const regex = /{([^}]+)}/g;
  const matches = [...inputString.matchAll(regex)];
  const result = [];
  let iteraString = inputString;
  for (const match of matches) {
    const matchedString = match[1];
    const startIndex =
      (match.index as number) + iteraString.length - inputString.length;
    const endIndex = startIndex + match[0].length;
    const BeforeMatchString = iteraString.slice(0, startIndex);

    if (BeforeMatchString) {
      result.push({ text: BeforeMatchString, type: "text" });
    }
    result.push({ text: matchedString, type: "link" });

    iteraString = iteraString.slice(endIndex);
  }

  if (iteraString) {
    result.push({ text: iteraString, type: "text" });
  }

  return result;
}

const Paragraph = ({ content }: { content: string }) => {
  const segments = segmentString(content);
  return (
    <div className="font-serif text-base">
      {segments.map((segment, index) => {
        return segment.type === "link" ? (
          <Hint key={index} text={segment.text} />
        ) : (
          <span key={index}>{segment.text}</span>
        );
      })}
    </div>
  );
};

export default Paragraph;
