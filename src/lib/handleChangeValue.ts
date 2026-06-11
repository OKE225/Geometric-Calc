export const handleChangeValue = (
  e: React.ChangeEvent<HTMLInputElement>,
  setValue: (value: number | undefined) => void,
) => {
  if (e.target.value === "") {
    setValue(undefined);
  }

  const value = parseFloat(e.target.value);
  if (!isNaN(value)) {
    setValue(value);
  }
};
