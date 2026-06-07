import { useGeometry, type GeometryType } from "../context/geometryContext";

interface Props {
  icon: GeometryType;
}

const GeometryItem = ({ icon }: Props) => {
  const { setCurrentGeometry } = useGeometry();

  let colorClasses = "bg-zinc-200 text-zinc-500";
  if (icon === "cube") colorClasses = "bg-rose-200 text-rose-500";
  else if (icon === "cuboid") colorClasses = "bg-orange-200 text-orange-500";
  else if (icon === "sphere") colorClasses = "bg-yellow-200 text-yellow-500";

  return (
    <div
      className={`${colorClasses} p-4 rounded-3xl cursor-pointer`}
      onClick={() => setCurrentGeometry(icon)}>
      <svg className="w-12 h-12" viewBox="0 0 256 256">
        <use href={`./${icon}.svg`} />
      </svg>
    </div>
  );
};

export default GeometryItem;
