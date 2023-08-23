import { useState } from "react";


function App() {
	const[calc,setCalc]=useState("");
	const[result,setResult]=useState("");

	const ops = ['+','-','*','/','.'];

	const updateCalc = value =>{

		if (
			ops.includes(value) && calc == '' ||
			ops.includes(value) && ops.includes(calc.slice(-1))
		){
			return;
		}
		// If the value is an operator and the last value was nothing OR an operator then no value is returned(displayed)

		setCalc(calc + value);

		if(!ops.includes(value)){
			setResult(eval(calc + value).toString())
		}//if value entered is not an operator it calculates the value of the operation so far and returns as a string

	}

	const handle_reload = () =>{
		window.location.reload();
	}

	const Solution = () => {
		setCalc(eval(calc).toString());
	}

	const deleteLast = () => {
		if (calc == '')
		{return;}

		const value = calc.slice(0,-1);

		setCalc(value);
	}

	return (
		<div className="App">
			<div className="calculator">
				<div className="display">
					<div className="Input"></div>
					{result ? <span>({result})</span> : ''}
					{calc || "0"}
				</div>
				<div className="Operators">
					<button onClick={() => updateCalc('+')}>+</button>
					<button onClick={() => updateCalc('-')}>-</button>
					<button onClick={() => updateCalc('*')}>x</button>
					<button onClick={() => updateCalc('/')}>÷</button>
					<button onClick={deleteLast}>DEL</button>
				</div>
				<div className="Numbers">
					<button className="a" onClick={() => updateCalc('1')}>1</button>
					<button className="a" onClick={() => updateCalc('2')}>2</button>
					<button className="a" onClick={() => updateCalc('3')}>3</button>
					<button className="a" onClick={() => updateCalc('4')}>4</button>
					<button className="a" onClick={() => updateCalc('5')}>5</button>
					<button className="a" onClick={() => updateCalc('6')}>6</button>
					<button className="a" onClick={() => updateCalc('7')}>7</button>
					<button className="a" onClick={() => updateCalc('8')}>8</button>
					<button className="a" onClick={() => updateCalc('9')}>9</button>
					<button className="a" onClick={() => updateCalc('00')}>00</button>
					<button className="a" onClick={() => updateCalc('0')}>0</button>
					<button className="a" onClick={() => updateCalc('.')}>.</button>
				</div>
				<div className="Others">
					<button className="ac" onClick={handle_reload}>AC</button>
					<button className="showAns" onClick={Solution}>=</button>
				</div>
			</div>
		</div>
	);
}

export default App;
