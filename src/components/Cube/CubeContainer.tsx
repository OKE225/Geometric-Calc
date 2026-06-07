import { useState } from "react";
import CalculateForm from "../CalculateForm";
import Geometry3D from "../Geometry3D";
import Cube3D from "./Cube3D";
import CubeForm from "./CubeForm";
import CubeResults from "./CubeResults";

const CubeContainer = () => {
  const [sideLength, setSideLength] = useState(0);

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setSideLength(value);
    }
  };

  return (
    <>
      <CalculateForm>
        <CubeForm
          sideLength={sideLength}
          handleChangeValue={handleChangeValue}
        />
        {sideLength > 0 && <CubeResults a={sideLength} />}
      </CalculateForm>

      {sideLength > 0 && (
        <Geometry3D>
          <Cube3D />
        </Geometry3D>
      )}
    </>
  );
};

export default CubeContainer;
