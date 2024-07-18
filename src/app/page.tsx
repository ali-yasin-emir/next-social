import Center from "./components/Center";
import Left from "./components/Left";
import Right from "./components/Right";

const Homepage = () => {
  return (
    <div className="flex w-full pt-12">
      <Left />
      <Center />
      <Right />
    </div>
  );
};

export default Homepage;
