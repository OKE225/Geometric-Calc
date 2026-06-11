interface Props {
  sideA: undefined | number;
  sideB: undefined | number;
  sideC: undefined | number;
  handleChangeValueA: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeValueB: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeValueC: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CuboidForm = ({
  sideA,
  handleChangeValueA,
  sideB,
  handleChangeValueB,
  sideC,
  handleChangeValueC,
}: Props) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="a">Enter a</label>
      <input
        type="number"
        className="border"
        id="a"
        min={0}
        value={sideA}
        onChange={handleChangeValueA}
      />
      <label htmlFor="b">Enter b</label>
      <input
        type="number"
        className="border"
        id="b"
        min={0}
        value={sideB}
        onChange={handleChangeValueB}
      />
      <label htmlFor="c">Enter c</label>
      <input
        type="number"
        className="border"
        id="c"
        min={0}
        value={sideC}
        onChange={handleChangeValueC}
      />
    </div>
  );
};

export default CuboidForm;
