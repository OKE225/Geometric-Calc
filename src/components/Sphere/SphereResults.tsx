interface Props {
  r: number;
}

const SphereResults = ({ r }: Props) => {
  const d = Math.round(r * 2);
  const V = Math.round((4 / 3) * Math.pow(r, 3)) + "π";
  const Pc = Math.round(4 * Math.pow(r, 2)) + "π";
  const C = Math.round(2 * r) + "π";

  return (
    <div>
      <p>Diameter, d = {d}</p>
      <p>Volume = {V}</p>
      <p>Surface area = {Pc}</p>
      <p>Circumference (of the great circle) = {C}</p>
    </div>
  );
};

export default SphereResults;
