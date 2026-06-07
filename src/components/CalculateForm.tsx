import type { ReactNode } from "react";
import { useGeometry } from "../context/geometryContext";
import GeometryItem from "./GeometryItem";

interface Props {
  children: ReactNode;
}

const CalculateForm = ({ children }: Props) => {
  const { currentGeometry } = useGeometry();

  return (
    <form className="bg-zinc-50 min-w-100 p-2 shadow-lg rounded-3xl h-fit">
      <div className="w-fit">
        <GeometryItem icon={currentGeometry} />
      </div>

      {children}
    </form>
  );
};

export default CalculateForm;
