import React, { useState } from 'react' 

const App = () =>{
  const [counter, setCounter] = React.useState(0);
  const [number, setNumber] = React.useState(0);
  const Factorial = React.useMemo(()=>fact(number), [number]);

  return(
    
   <center>
    Factorial : {Factorial} <br/>
    <button onClick={ () => setCounter(counter + 1)}>Counter Increment</button> <br/>
    <button onClick={ () => setNumber(number + 1)}>Factorial Increment</button> <br/>
    counter : {counter}
   </center>
  )
}

const fact = (n) => {
  let answer = 1;
  for(var i=n; i>=1; i--){
    answer = answer * i;
  }
  console.log('Factorial function calling');
  return answer
}
export default App