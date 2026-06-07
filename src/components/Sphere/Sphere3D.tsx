interface Props {
  radius: number;
}

const Sphere3D = ({ radius }: Props) => {
  return (
    <>
      <sphereGeometry args={[radius]} />
      <meshStandardMaterial color={0xeab308} />
    </>
  );
};

export default Sphere3D;
