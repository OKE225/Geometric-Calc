import ResultText from "../ResultText";

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
    <div className="mt-5">
      <p>
        Volume <ResultText bgColor="bg-rose-500">{V}</ResultText>
      </p>
      <p>
        Total surface area <ResultText bgColor="bg-rose-500">{Pc}</ResultText>
      </p>
      <p>
        Base area <ResultText bgColor="bg-rose-500">{Pp}</ResultText>
      </p>
      <p>
        Lateral surface area <ResultText bgColor="bg-rose-500">{Pb}</ResultText>
      </p>
      <p>
        Sum of edge lengths <ResultText bgColor="bg-rose-500">{L}</ResultText>
      </p>
    </div>
  );
};

export default CubeResults;
