import { useState } from "react";
import CalculateForm from "../CalculateForm";
import Geometry3D from "../Geometry3D";
import Sphere3D from "./Sphere3D";
import SphereForm from "./SphereForm";
import SphereResults from "./SphereResults";

const SphereContainer = () => {
  const [radius, setRadius] = useState(0);

  const handleChangeRadius = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setRadius(value);
    }
  };

  return (
    <>
      <CalculateForm>
        <SphereForm radius={radius} handleChangeRadius={handleChangeRadius} />
        {radius > 0 && <SphereResults r={radius} />}
      </CalculateForm>

      {radius > 0 && (
        <Geometry3D offSecondLight>
          <Sphere3D radius={radius} />
        </Geometry3D>
      )}
    </>
  );
};

export default SphereContainer;
