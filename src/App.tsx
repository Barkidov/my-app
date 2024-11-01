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
      <img
        src={
          "https://sankt-peterburg.vse-footbolki.ru/image/cache/catalog/vsm/0/2/2467/2467911/previews/people_1_album_front_white_700-280x280.jpg"
        }
      />
      <PageTitle title={"This is APP component"} />
      <PageTitle title={"My friends"} />
      Article 1
      <Rating value={1} />
      <Accordion title={props.title}/>
      Article 2
      <Rating value={2} />
      Article 3
      <Rating value={3} />
      Article 4
      <Rating value={4} />
      Article 5
      <Rating value={5} />
    </div>
  );
}

const PageTitle = (props: any) => {
  console.log("PageTitle render");
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};

export default App;
