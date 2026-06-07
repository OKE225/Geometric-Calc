interface Props {
  sideA: number;
  sideB: number;
  sideC: number;
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
        placeholder="np. 1"
        min={0}
        value={sideA}
        onChange={handleChangeValueA}
      />
      <label htmlFor="b">Enter b</label>
      <input
        type="number"
        className="border"
        id="b"
        placeholder="np. 2"
        min={0}
        value={sideB}
        onChange={handleChangeValueB}
      />
      <label htmlFor="c">Enter c</label>
      <input
        type="number"
        className="border"
        id="c"
        placeholder="np. 3"
        min={0}
        value={sideC}
        onChange={handleChangeValueC}
      />
    </div>
  );
};

export default CuboidForm;
