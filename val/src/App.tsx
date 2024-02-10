import { useState } from "react";
import "./App.css";

const phases = [
  "Nie",
  "Jesteś pewna???",
  "Nie chcesz chwili żeby to sobie przemyśleć?",
  "Proszę nie rób mi tego!",
  "Szanuję, twoją decyzje i tak dalej ale błagam cię...",
  "Łamiesz mi serce :(",
  "Chyba się rozpłacze...",
];
function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;
  function handleNoClick() {
    setNoCount(noCount + 1);
  }
  function getNoButtonText() {
    return phases[Math.min(noCount, phases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="bears kissing"
            src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
          />
          <div className="text">Juppppiiii!!!</div>
        </>
      ) : (
        <>
          <img
            alt="bear with hearts"
            src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
          />
          <div>Będziesz moją walentynką?</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              TAK
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
