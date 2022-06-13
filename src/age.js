import React, { useState } from "react";
import './age.css'



const Age = () => {

const [counter, setCounter] = useState(18)


const handleClick1 = () => {
	
	setCounter(counter + 1)
}


const handleClick2 = () => {
	
	setCounter(counter - 1)
}

return (
<div>
	<div id="c">
	 Age :	{counter}
	</div>
	<div className="buttons">
		<button 
		onClick={handleClick1}>Increment</button>
		<button
		onClick={handleClick2}>Decrement</button>
	</div>
	</div>
)
}

export default Age