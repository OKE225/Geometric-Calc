interface Props {
  radius: undefined | number;
  handleChangeRadius: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SphereForm = ({ radius, handleChangeRadius }: Props) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="r">Enter r</label>
      <input
        type="number"
        className="border"
        id="r"
        min={0}
        value={radius}
        onChange={handleChangeRadius}
      />
    </div>
  );
};

export default SphereForm;
