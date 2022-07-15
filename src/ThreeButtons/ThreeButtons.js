import { useState } from "react"

const buttonArray = ['You Selected Button One', 'You Selected Button Two', 'You Selected Button Three']

const ThreeButtons = (props) => {
const [buttonData, ChangeButtonData] = useState('Please Select a Button')

props.ThreeButtonTransfer(buttonData);
    return(
        <div>
            <button onClick={() => ChangeButtonData(buttonArray[0]) }>Button 1</button>
            <button onClick={() => ChangeButtonData(buttonArray[1])}>Button 2</button>
            <button onClick={() => ChangeButtonData(buttonArray[2])} >Button 3</button>
        </div>
    )
}
export default ThreeButtons