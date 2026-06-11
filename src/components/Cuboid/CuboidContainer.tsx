import { useState } from "react";
import CalculateForm from "../CalculateForm";
import Geometry3D from "../Geometry3D";
import Cuboid3D from "./Cuboid3D";
import CuboidForm from "./CuboidForm";
import CuboidResults from "./CuboidResults";

const CuboidContainer = () => {
  const [sideA, setSideA] = useState<undefined | number>(undefined);
  const [sideB, setSideB] = useState<undefined | number>(undefined);
  const [sideC, setSideC] = useState<undefined | number>(undefined);

  const handleChangeValueA = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setSideA(undefined);
    }

    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setSideA(value);
    }
  };

  const handleChangeValueB = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setSideB(undefined);
    }

    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setSideB(value);
    }
  };

  const handleChangeValueC = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setSideC(undefined);
    }

    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setSideC(value);
    }
  };

  return (
    <>
      <CalculateForm>
        <CuboidForm
          sideA={sideA}
          sideB={sideB}
          sideC={sideC}
          handleChangeValueA={handleChangeValueA}
          handleChangeValueB={handleChangeValueB}
          handleChangeValueC={handleChangeValueC}
        />
        {sideA !== undefined &&
          sideB !== undefined &&
          sideC !== undefined &&
          sideA > 0 &&
          sideB > 0 &&
          sideC > 0 && <CuboidResults a={sideA} b={sideB} c={sideC} />}
      </CalculateForm>

      {sideA !== undefined &&
        sideB !== undefined &&
        sideC !== undefined &&
        sideA > 0 &&
        sideB > 0 &&
        sideC > 0 && (
          <Geometry3D>
            <Cuboid3D sideA={sideA} sideB={sideB} sideC={sideC} />
          </Geometry3D>
        )}
    </>
  );
};

export default CuboidContainer;
