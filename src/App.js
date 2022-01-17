import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [result, setResult] = useState("Hello Boss");
  return (
    <div className="container overflow-hidden vh-100 vw-100 d-flex justify-content-center align-items-center">
      <div className="bg-warning">
        <form className="text-right">
          <input
            type="text"
            value={result}
            className="w-100 text-right"
            disabled
            style={{textAlign:"right"}}
          />
        </form>
        <div className="container keypad" style={{background:"hsl(222, 26%, 31%)", padding:"10px"}}>
          <div className="row">
            <button type="button" className="col btn btn-sm">7</button>
            <button type="button" className="col btn btn-sm">8</button>
            <button type="button" className="col btn btn-sm">9</button>
            <button type="button" className="col btn btn-sm">DEL</button>
          </div>
          <div className="row">
            <button type="button" className="col btn btn-sm">4</button>
            <button type="button" className="col btn btn-sm">5</button>
            <button type="button" className="col btn btn-sm">6</button>
            <button type="button" className="col btn btn-sm">+</button>
          </div>
          <div className="row">
            <button type="button" className="col btn btn-sm">1</button>
            <button type="button" className="col btn btn-sm">2</button>
            <button type="button" className="col btn btn-sm">3</button>
            <button type="button" className="col btn btn-sm">-</button>
          </div>
          <div className="row">
            <button type="button" className="col btn btn-sm">0</button>
            <button type="button" className="col btn btn-sm">.</button>
            <button type="button" className="col btn btn-sm">/</button>
            <button type="button" className="col btn btn-sm">X</button>
          </div>
          <div className="row">
            <button type="button" className="col btn btn-sm">RESET</button>
            <button type="button" className="col btn btn-sm">=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
