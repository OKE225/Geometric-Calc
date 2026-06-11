import ResultText from "../ResultText";

interface Props {
  r: number;
}

const SphereResults = ({ r }: Props) => {
  const d = Math.round(r * 2);
  const V = Math.round((4 / 3) * Math.pow(r, 3)) + "π";
  const Pc = Math.round(4 * Math.pow(r, 2)) + "π";
  const C = Math.round(2 * r) + "π";

  return (
    <div className="mt-5">
      <p>
        Diameter, d <ResultText bgColor="bg-yellow-500">{d}</ResultText>
      </p>
      <p>
        Volume <ResultText bgColor="bg-yellow-500">{V}</ResultText>
      </p>
      <p>
        Surface area <ResultText bgColor="bg-yellow-500">{Pc}</ResultText>
      </p>
      <p>
        Circumference <ResultText bgColor="bg-yellow-500">{C}</ResultText>
      </p>
    </div>
  );
};

export default SphereResults;
