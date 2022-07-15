import Form from './Form/Form';
import ThreeButtons from './ThreeButtons/ThreeButtons';
import './App.css';
import { useState } from 'react';
const stringData = 'Here is data from a parent element rendered to a child element'
const listArray = [];

function App() {

  const [userInput, ChangeUserInput] = useState('')
  const [threeButton, ChangeThreeButton] = useState('Choose A Button')

  const UserInputHandler = (value) => {
    ChangeUserInput(value);
    listArray.push(value);
  }
  const ThreeButtonHandler = (value) => {
    ChangeThreeButton(value);
  }

  return (
    <div className="App">

    <Form stringTransfer = {stringData} UserInputTransfer = {UserInputHandler}/>
    <p>{userInput}</p>

    {listArray.map((item, index) => <p key = {index}>{(index + 1) +': ' + item}</p>)}
<br/>

    <p>{threeButton}</p>
    <ThreeButtons ThreeButtonTransfer = {ThreeButtonHandler}/>
    </div>
  );
}

export default App;
