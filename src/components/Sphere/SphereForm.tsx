interface Props {
  radius: number;
  handleChangeRadius: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SphereForm = ({ radius, handleChangeRadius }: Props) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="a">Enter radius</label>
      <input
        type="number"
        className="border"
        id="a"
        min={0}
        value={radius}
        onChange={handleChangeRadius}
      />
    </div>
  );
};

export default SphereForm;
