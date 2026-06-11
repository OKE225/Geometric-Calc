import CubeContainer from "./components/Cube/CubeContainer";
import CuboidContainer from "./components/Cuboid/CuboidContainer";
import Navigation from "./components/Navigation";
import SphereContainer from "./components/Sphere/SphereContainer";
import { useGeometry } from "./context/geometryContext";
import { GeometryProvider } from "./context/GeometryProvider";

function AppContent() {
  const { currentGeometry } = useGeometry();

  return (
    <div className="pt-2 h-full overflow-hidden w-[98%] mx-auto">
      <Navigation />

      <main className="flex flex-row max-md:flex-col gap-2 mt-20 h-[80%] overflow-hidden">
        {currentGeometry === "cube" && <CubeContainer />}
        {currentGeometry === "cuboid" && <CuboidContainer />}
        {currentGeometry === "sphere" && <SphereContainer />}
      </main>
    </div>
  );
}

function App() {
  return (
    <GeometryProvider>
      <AppContent />
    </GeometryProvider>
  );
}

export default App;

// https://www.perplexity.ai/search/0715cf3f-efb6-4de9-a7c4-4f272b103406
