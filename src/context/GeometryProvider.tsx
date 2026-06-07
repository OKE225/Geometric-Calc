import { useState, type ReactNode } from "react";
import { GeometryContext, type GeometryType } from "./geometryContext";

export function GeometryProvider({ children }: { children: ReactNode }) {
  const [currentGeometry, setCurrentGeometry] = useState<GeometryType>("cube");

  return (
    <GeometryContext.Provider value={{ currentGeometry, setCurrentGeometry }}>
      {children}
    </GeometryContext.Provider>
  );
}
