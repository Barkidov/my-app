import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";

function sum(a: number, b: number) {
  alert(a + b);
}

// sum(21, 12);
// sum(34, 5);

function App() {
  return (
    <div className="general">
      <AppTitle />
      <Rating />
      <Accordion />
      <Rating />
    </div>
  );
}

const AppTitle = () => {
  console.log("AppTitle render");
  return <>This is APP component</>;
};

export default App;
