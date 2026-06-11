import type { ReactNode } from "react";

interface Props {
  bgColor: string;
  children: ReactNode;
}

const ResultText = ({ children, bgColor }: Props) => {
  return (
    <span
      className={`${bgColor} ml-1 text-white px-4 font-semibold rounded-full`}>
      {children}
    </span>
  );
};

export default ResultText;
