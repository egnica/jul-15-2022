import { useState } from "react"
const Form = (props) => {


const [buttonReveal, ChangeButtonReveal] = useState(false)    
const [userInput, ChangeUserInput] = useState('')

const ButtonRevealHandler = () =>{
    ChangeButtonReveal(buttonReveal => ! buttonReveal);
}

const InputHandler = (event) => {
    ChangeUserInput(event.target.value);
}

const UserSubmitHandler = (event) => {
    event.preventDefault();
    props.UserInputTransfer(userInput);
    ChangeUserInput('');
}

    return(

        <div>
        <p>{props.stringTransfer}</p>
        <button onClick = {ButtonRevealHandler}>Click to Enter Data</button>
<br/><br/>

{buttonReveal &&  
        <form onSubmit = {UserSubmitHandler}>
            <label>Enter Data: </label>
            <input onChange = {InputHandler} value = {userInput}/>
            <button>Submit</button>

        </form>
}
        </div>
    )
}
export default Form