interface Props {
  sideA: number;
  sideB: number;
  sideC: number;
}

const Cuboid3D = ({ sideA, sideB, sideC }: Props) => {
  return (
    <>
      <boxGeometry args={[sideA, sideC, sideB]} />
      <meshStandardMaterial color={0xea580c} />
    </>
  );
};

export default Cuboid3D;
