import React from "react";
import "./App.css";

function App() {
  return (
    <main>
      <div className="card">
        {}
        <div className="image-container">
          <img
            src="/images/image-equilibrium.jpg"
            alt="Equilibrium"
            className="main-image"
          />
          <div className="overlay">
            <img src="/images/icon-view.svg" alt="view icon" />
          </div>
        </div>

        <div className="content">
          <h2>Equilibrium #3429</h2>
          <p className="description">
            Our Equilibrium collection promotes balance and calm.
          </p>

          <div className="stats">
            <div className="eth">
              <img src="/images/icon-ethereum.svg" alt="ethereum icon" />
              <span>0.041 ETH</span>
            </div>
            <div className="days">
              <img src="/images/icon-clock.svg" alt="clock icon" />
              <span>3 days left</span>
            </div>
          </div>
        </div>

        <hr />

        <div className="footer">
          <img
            src="/images/image-avatar.png"
            alt="Jules Wyvern"
            className="avatar"
          />
          <p>
            Creation of <span>Jules Wyvern</span>
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
