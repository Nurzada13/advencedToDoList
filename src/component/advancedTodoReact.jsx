import React from "react";

class Advancedtodo extends React.Component {
  constructor() {
    super()
    this.state = {
      inputWords: { inputValue: "", isComplete: false },
      inputMassive: [],
    }
  }
  clickMethod = (event) => {
    console.log(event);
    if (event.key == "Enter") {
      this.setState({
        inputMassive: [this.state.inputWords, ...this.state.inputMassive],
      }) //search inside input
      this.setState({ inputWords: { inputValue: "", isComplete: false } })
    }
  }
  inputMethod = (event) => {
    this.setState({
      inputWords: { inputValue: event.target.value, isComplete: false },
    })
  }
  complateMethod = (index) => {
    let massiveinsidestate = [...this.state.inputMassive]
    massiveinsidestate[index].isComplete =
      !massiveinsidestate[index].isComplete;
    this.setState({ inputMassive: massiveinsidestate })
  }
  xMethod = (index) => {
    let data = [...this.state.inputMassive]
    data.splice(index, 1);

    this.setState({ inputMassive: data })
  }

  render() {
    
    let pending=this.state.inputMassive.filter((eachelementinsidemassive)=>eachelementinsidemassive.isComplete==false)
console.log(pending,"best")
    return (
      <>
        <h2>Pending Task({pending.length})</h2>
        <div>
          <ul>
            {this.state.inputMassive.map((eachelementinsidemassive, index) => (
              <li key={index}>
                <span
                  className={eachelementinsidemassive.isComplete && "complate"}
                >
                  {eachelementinsidemassive.inputValue}
                </span>

                <button onClick={() => this.complateMethod(index)}>
                  {eachelementinsidemassive.isComplete
                    ? "uncomplate"
                    : "complate"}
                </button>
                <button onClick={() => this.xMethod(index)}>x</button>
              </li>
            ))}
          </ul>
        </div>
        <input
          onChange={this.inputMethod}
          name="addTaskinput"
          onKeyDown={this.clickMethod}
          placeholder="add a new task"
          value={this.state.inputWords.inputValue}
        />
      </>
    )
  }
} 

export default Advancedtodo;
