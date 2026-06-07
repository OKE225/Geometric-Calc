interface Props {
  a: number;
  b: number;
  c: number;
}

const CuboidResults = ({ a, b, c }: Props) => {
  const V = a * b * c;
  const Pc = 2 * (a * b + b * c + a * c);
  const Pp = a * b;
  const Pb = 2 * (a * c + b * c);
  const L = 4 * (a + b + c);

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

export default CuboidResults;
