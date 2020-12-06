import React from "react";
import ReactDOM from "react-dom";
import "../css/App.css";

function App() {
  return (
    <div>
      <h1>Hello World From React</h1>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

export default App;
