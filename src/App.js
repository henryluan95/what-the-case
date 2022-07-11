import { useState } from "react";
import "./App.scss";
import bg1 from "./assets/Group1.svg";
import bg2 from "./assets/Group2.svg";

function App() {
  const [text, setText] = useState("");

  //Create a function to track user's input
  const handleTextInput = (e) => {
    setText(e.target.value);
  };

  //Create a function to track number of word
  const countWord = () => {
    if (text.length === 0) {
      return 0;
    } else {
      const textArray = text.match(/(\w+)/g);
      if (textArray === null) {
        return 0;
      }
      return textArray.length;
    }
  };

  //Create a function to track line break
  const countLineBreak = () => {
    return (text.match(/\n/g) || []).length;
  };

  return (
    <div className="App">
      <img className="background__object1" src={bg1}></img>
      <img className="background__object2" src={bg2}></img>
      <div className="card">
        <h1 className="card__title">What The Case</h1>
        <div className="card__input-helpers input">
          <div className="input__counters">
            <span className="input__counter">{text.length} Chars</span>
            <span className="input__counter">{countWord()} Word</span>
            <span className="input__counter">
              {countLineBreak()} Line-breakers
            </span>
          </div>
          <div className="input__options">
            <button className="input__option">Clear</button>
            <button className="input__option">Paste Lorem Ipsum</button>
            <button className="input__option">Paste Pangrams</button>
          </div>
        </div>
        <textarea
          className="card__input"
          name="user-input"
          id="user-input"
          placeholder="Type your text here"
          onChange={handleTextInput}
        ></textarea>
        <div className="card__cases">
          <p className="card__case">camelCase:</p>
          <p className="card__case">snake_case:</p>
          <p className="card__case">kebab-case:</p>
          <p className="card__case">PascalCase:</p>
          <p className="card__case">SCREAMING_SNAKE_CASE:</p>
          <p className="card__case">Train-Case:</p>
        </div>
      </div>
    </div>
  );
}

export default App;
