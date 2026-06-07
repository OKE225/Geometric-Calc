interface Props {
  sideLength?: number;
}

const Cube3D = ({ sideLength = 1 }: Props) => {
  return (
    <>
      <boxGeometry args={[sideLength, sideLength, sideLength]} />
      <meshStandardMaterial color={0xf43f5e} />
    </>
  );
};

export default Cube3D;
