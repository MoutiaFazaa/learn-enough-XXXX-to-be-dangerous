import React from 'react';

//function Greet (){
  //  return <h1>Hello Vishwas</h1>
//}
const Greet = props => {
  console.log(props)
return <h1>Hello {props.name} A.K.A {props.heroName} </h1>
}
export default Greet