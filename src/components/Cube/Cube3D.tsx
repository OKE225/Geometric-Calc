interface Props {
  sideLength?: number;
}

const Cube3D = ({ sideLength = 1 }: Props) => {
  return (
    <>
      <boxGeometry args={[sideLength, sideLength, sideLength]} />
      <meshStandardMaterial color={0xe11d48} />
    </>
  );
};

export default Cube3D;
