interface Props {
  sideLength: undefined | number;
  handleChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CubeForm = ({ sideLength, handleChangeValue }: Props) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="a">Enter a</label>
      <input
        type="number"
        className="border"
        id="a"
        min={0}
        value={sideLength}
        onChange={handleChangeValue}
      />
    </div>
  );
};

export default CubeForm;
