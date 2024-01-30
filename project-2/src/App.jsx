import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Content from "./components/Content/Content";
import Form from "./components/Form/Form";

function App() {
  return (
    <div>
      <Navigation />
      <div className="hero">
        <Content />
        <Form />
      </div>
    </div>
  );
}

export default App;
