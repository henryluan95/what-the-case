import { useState } from "react";
import "./App.scss";
import bg1 from "./assets/Group1.svg";
import bg2 from "./assets/Group2.svg";
import {
  camelCase,
  pascalCase,
  trainCase,
  kebabCase,
  snakeCase,
  screamingSnakeCase,
  countWord,
  countLineBreak,
} from "./utilities/utilities";

function App() {
  const [text, setText] = useState("");

  //Create a function to track user's input
  const handleTextInput = (e) => {
    setText(e.target.value);
  };

  //Create a function to clear input field
  const clearInput = (e) => {
    setText("");
  };

  //Create a function to add Lorem
  const addLorem = () => {
    setText(
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio repellendus incidunt dicta."
    );
  };

  //Create a function to add Pangrams
  const addPangrams = () => {
    setText(
      "Quick fox jumps nightly above wizard.\nTwo driven jocks help fax my big quiz.\nPack my box with five dozen liquor jugs."
    );
  };

  return (
    <div className="App">
      <img
        className="background__object1"
        src={bg1}
        alt="background decoration"
      ></img>
      <img
        className="background__object2"
        src={bg2}
        alt="background decoration"
      ></img>
      <div className="card">
        <h1 className="card__title">What The Case</h1>
        <div className="card__input-helpers input">
          <div className="input__counters">
            <span className="input__counter">
              {text.length} {text.length <= 1 ? "Char" : "Chars"}
            </span>
            <span className="input__counter">
              {countWord(text)} {countWord(text) <= 1 ? "Word" : "Words"}
            </span>
            <span className="input__counter">
              {countLineBreak(text)}{" "}
              {countLineBreak(text) <= 1 ? "Line-breaker" : "Line-breakers"}
            </span>
          </div>
          <div className="input__options">
            <button className="input__option" onClick={clearInput}>
              Clear
            </button>
            <button className="input__option" onClick={addLorem}>
              Paste Lorem Ipsum
            </button>
            <button className="input__option" onClick={addPangrams}>
              Paste Pangrams
            </button>
          </div>
        </div>
        <textarea
          className="card__input"
          name="user-input"
          id="user-input"
          placeholder="Type your text here"
          value={text}
          onChange={handleTextInput}
        ></textarea>
        <div className="card__cases">
          <div className="card__case">
            <div className="card__case-desc">
              <p className="card__case-title">camelCase</p>
              <span className="card__case-info">For variables and methods</span>
            </div>
            <p className="card__case-text">{camelCase(text)}</p>
          </div>
          <div className="card__case">
            <div className="card__case-desc">
              <p className="card__case-title">snake_case</p>
              <span className="card__case-info">
                Similar to camelCase. PICK ONE!
              </span>
            </div>
            <p className="card__case-text">{snakeCase(text)}</p>
          </div>
          <div className="card__case">
            <div className="card__case-desc">
              <p className="card__case-title">kebab-case</p>
              <span className="card__case-info">
                For css properties, html classes
              </span>
            </div>
            <p className="card__case-text">{kebabCase(text)}</p>
          </div>
          <div className="card__case">
            <div className="card__case-desc">
              <p className="card__case-title">PascalCase</p>
              <span className="card__case-info">
                For classes and components
              </span>
            </div>
            <p className="card__case-text">{pascalCase(text)}</p>
          </div>
          <div className="card__case">
            <div className="card__case-desc">
              <p className="card__case-title">SCREAMING_SNAKE_CASE</p>
              <span className="card__case-info">For constants</span>
            </div>
            <p className="card__case-text">{screamingSnakeCase(text)}</p>
          </div>
          <div className="card__case">
            <p className="card__case-title">Train-Case</p>
            <p className="card__case-text">{trainCase(text)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
