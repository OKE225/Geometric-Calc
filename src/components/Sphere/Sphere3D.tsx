interface Props {
  radius: number;
}

const Sphere3D = ({ radius }: Props) => {
  return (
    <>
      <sphereGeometry args={[radius]} />
      <meshStandardMaterial color={0xca8a04} />
    </>
  );
};

export default Sphere3D;
