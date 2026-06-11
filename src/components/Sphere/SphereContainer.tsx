import { useState } from "react";
import CalculateForm from "../CalculateForm";
import Geometry3D from "../Geometry3D";
import Sphere3D from "./Sphere3D";
import SphereForm from "./SphereForm";
import SphereResults from "./SphereResults";
import { handleChangeValue } from "../../lib/handleChangeValue";

const SphereContainer = () => {
  const [radius, setRadius] = useState<undefined | number>(undefined);

  return (
    <>
      <CalculateForm>
        <SphereForm
          radius={radius}
          handleChangeRadius={(e) => handleChangeValue(e, setRadius)}
        />
        {radius !== undefined && radius > 0 && <SphereResults r={radius} />}
      </CalculateForm>

      {radius !== undefined && radius > 0 && (
        <Geometry3D offSecondLight>
          <Sphere3D radius={radius} />
        </Geometry3D>
      )}
    </>
  );
};

export default SphereContainer;
