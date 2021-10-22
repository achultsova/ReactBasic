import React from 'react';
import './App.css';

// const InputDays = () => {
//   return (
//     <input type="text" name = 'days' placeholder="Введите количество дней" className ="days" onChange = {handleChange}/>
//   )
// }

// const InputCity = () => {
//   return (
//     <input type="text" name ='city' placeholder="Введите город" className ="city"  />
//   )
// }

// const InputBtn = () => {
//   return (
//     <input type="button" value ='run' className ='btn' />
//   )
// }

// const Inputted = () => {
//   return (
//     <div className = 'inputted'>
//             <form name = "inputs">
//             <InputDays/>
//             <InputCity/>
//             <InputBtn/>
//             </form>
//     </div>
//   )
// }

// const Outputted = () => {
//   <div class = 'outputted'> </div>
// }

const Outputted = () => {
  return ( <div class = 'outputted'> </div>)}

const App = () => {

  function handleChangeDays (event) {
    localStorage.setItem("inputDays", event.target.value)
  }

  function handleChangeCity (event) {
    localStorage.setItem("inputCity", event.target.value)
  }

  function clickRun () {
    const days = localStorage.getItem('inputDays');
    const city = localStorage.getItem('inputCity');


//здесь должно быть создание самого запроса

  }

  return (
    <div className = 'container'>
      <div className = 'inputted'>
            <form name = "inputs">
            <input type="text" name = 'days' placeholder="Введите количество дней" className ="days" onChange = {handleChangeDays}/>
      <input type="text" name ='city' placeholder="Введите город" className ="city" onChange = {handleChangeCity} />
      <input type="button" value ='run' className ='btn' onClick = {clickRun}/>
            </form>
    </div>
    <Outputted/>
</div>
  )
}

export default App;
