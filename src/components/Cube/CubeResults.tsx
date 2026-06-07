interface Props {
  a: number;
}

const CubeResults = ({ a }: Props) => {
  const V = Math.pow(a, 3);
  const Pc = 6 * Math.pow(a, 2);
  const Pp = Math.pow(a, 2);
  const Pb = 4 * Math.pow(a, 2);
  const L = 12 * a;

  return (
    <div>
      <p>Volume = {V}</p>
      <p>Total surface area = {Pc}</p>
      <p>Base area = {Pp}</p>
      <p>Lateral surface area = {Pb}</p>
      <p>Sum of edge lengths = {L}</p>
    </div>
  );
};

export default CubeResults;
