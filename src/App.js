import React, { useState } from "react";
import Chessboard from "chessboardjsx";
import StockFish from "./integrations/stockfish.js";
import "./App.css";

const App = () => {
    const [position, setPosition] = useState("start");
    const [isWhite, setIsWhite] = useState(true);
  
    return (
      <div className="boardsContainer">
        <div>
            <button onClick={() => setIsWhite(!isWhite)}>
                Flip
            </button>
        </div>
        


        <StockFish>
          {({ position: sfPosition, onDrop }) => {
            setPosition(sfPosition);
            return (
              <Chessboard
                id="stockfish"
                className="boardStyle"
                position={position}
                onDrop={onDrop}
                orientation={isWhite ? "white" : "black"}
              />
            );
          }}
        </StockFish>
      </div>
    );
  };

export default App;
