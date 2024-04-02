import React from "react";

const Title = ({
  content,
  subtitle,
}: {
  content: string;
  subtitle?: string;
}) => {
  return (
    <div className="font-serif space-y-1">
      <div className="text-4xl font-black">{content}</div>
      {subtitle && <div className="text-sm">{subtitle.toUpperCase()}</div>}
    </div>
  );
};

export default Title;
