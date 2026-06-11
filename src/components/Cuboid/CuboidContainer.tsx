import { useState } from "react";
import CalculateForm from "../CalculateForm";
import Geometry3D from "../Geometry3D";
import Cuboid3D from "./Cuboid3D";
import CuboidForm from "./CuboidForm";
import CuboidResults from "./CuboidResults";
import { handleChangeValue } from "../../lib/handleChangeValue";

const CuboidContainer = () => {
  const [sideA, setSideA] = useState<undefined | number>(undefined);
  const [sideB, setSideB] = useState<undefined | number>(undefined);
  const [sideC, setSideC] = useState<undefined | number>(undefined);

  return (
    <>
      <CalculateForm>
        <CuboidForm
          sideA={sideA}
          sideB={sideB}
          sideC={sideC}
          handleChangeValueA={(e) => handleChangeValue(e, setSideA)}
          handleChangeValueB={(e) => handleChangeValue(e, setSideB)}
          handleChangeValueC={(e) => handleChangeValue(e, setSideC)}
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
