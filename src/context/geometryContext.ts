import { createContext, useContext } from "react";

export type GeometryType = "cube" | "cuboid" | "sphere";

export interface GeometryContextType {
  currentGeometry: GeometryType;
  setCurrentGeometry: (geometry: GeometryType) => void;
}

export const GeometryContext = createContext<GeometryContextType | undefined>(
  undefined,
);

export function useGeometry(): GeometryContextType {
  const context = useContext(GeometryContext);
  if (!context) {
    throw new Error("useGeometry must be used within a GeometryProvider");
  }
  return context;
}
