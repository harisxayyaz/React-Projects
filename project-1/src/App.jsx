import "./App.css";

function App() {
  return (
    <div className="parentDiv">
      <div className="content">
        <div className="textContent">
          <h1>
            YOUR FEET <br />
            DESERVE <br />
            THE BEST
          </h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="buttons">
            <button>Shop Now</button>
            <button className="secondaryBtn">Category</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="shoe_image.png" alt="shoe-image" />
        </div>
      </div>
    </div>
  );
}

export default App;
