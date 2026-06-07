import { useState } from "react";
import CalculateForm from "../CalculateForm";
import Geometry3D from "../Geometry3D";
import Cuboid3D from "./Cuboid3D";
import CuboidForm from "./CuboidForm";
import CuboidResults from "./CuboidResults";

const CuboidContainer = () => {
  const [sideA, setSideA] = useState(0);
  const [sideB, setSideB] = useState(0);
  const [sideC, setSideC] = useState(0);

  const handleChangeValueA = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setSideA(value);
    }
  };
  const handleChangeValueB = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setSideB(value);
    }
  };
  const handleChangeValueC = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        {sideA > 0 && sideB > 0 && sideC > 0 && (
          <CuboidResults a={sideA} b={sideB} c={sideC} />
        )}
      </CalculateForm>

      {sideA > 0 && sideB > 0 && sideC > 0 && (
        <Geometry3D>
          <Cuboid3D sideA={sideA} sideB={sideB} sideC={sideC} />
        </Geometry3D>
      )}
    </>
  );
};

export default CuboidContainer;
