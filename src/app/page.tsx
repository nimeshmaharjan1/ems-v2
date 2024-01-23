import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="container">
      <ModeToggle></ModeToggle>
      <h1 className="text-7xl font-bold">Hello World</h1>
      <Button>Hello World</Button>
    </div>
  );
};

export default Home;
