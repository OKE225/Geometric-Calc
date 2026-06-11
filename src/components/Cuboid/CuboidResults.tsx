import ResultText from "../ResultText";

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
    <div className="mt-5">
      <p>
        Volume <ResultText bgColor="bg-orange-500">{V}</ResultText>
      </p>
      <p>
        Total surface area <ResultText bgColor="bg-orange-500">{Pc}</ResultText>
      </p>
      <p>
        Base area <ResultText bgColor="bg-orange-500">{Pp}</ResultText>
      </p>
      <p>
        Lateral surface area{" "}
        <ResultText bgColor="bg-orange-500">{Pb}</ResultText>
      </p>
      <p>
        Sum of edge lengths <ResultText bgColor="bg-orange-500">{L}</ResultText>
      </p>
    </div>
  );
};

export default CuboidResults;
