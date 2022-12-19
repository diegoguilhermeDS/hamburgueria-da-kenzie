import React from "react";

interface iBaseTextProps {
  children: React.ReactNode;
  tag: "h1" | "h2" | "h3" | "span" | "small";
  className?: string;
}

const BaseText = ({ children, tag, className }: iBaseTextProps) => {
  return (
    <>
      {tag === "h1" && <h1 className={className}>{children}</h1>}
      {tag === "h2" && <h2 className={className}>{children}</h2>}
      {tag === "h3" && <h3 className={className}>{children}</h3>}
      {tag === "span" && <span className={className}>{children}</span>}
      {tag === "small" && <small className={className}>{children}</small>}
    </>
  );
};

export default BaseText;
