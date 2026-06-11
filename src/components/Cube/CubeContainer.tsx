import { useState } from "react";
import CalculateForm from "../CalculateForm";
import Geometry3D from "../Geometry3D";
import Cube3D from "./Cube3D";
import CubeForm from "./CubeForm";
import CubeResults from "./CubeResults";

const CubeContainer = () => {
  const [sideLength, setSideLength] = useState<undefined | number>(undefined);

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setSideLength(undefined);
    }

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
        {sideLength !== undefined && sideLength > 0 && (
          <CubeResults a={sideLength} />
        )}
      </CalculateForm>

      {sideLength !== undefined && sideLength > 0 && (
        <Geometry3D>
          <Cube3D sideLength={sideLength} />
        </Geometry3D>
      )}
    </>
  );
};

export default CubeContainer;
