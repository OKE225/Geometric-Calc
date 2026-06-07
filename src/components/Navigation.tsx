import GeometryItem from "./GeometryItem";

const Navigation = () => {
  return (
    <nav className="bg-zinc-50 w-fit flex mx-auto gap-2 p-2 shadow-lg rounded-3xl">
      <GeometryItem icon="cube" />
      <GeometryItem icon="cuboid" />
      <GeometryItem icon="sphere" />
    </nav>
  );
};

export default Navigation;
