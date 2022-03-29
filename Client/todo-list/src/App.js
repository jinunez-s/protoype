// import logo from './logo.svg';
// import './App.css';
// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// function App() {

//   const [name, setName] = useState('');
//   const [home, setHome] = useState('');

//   useEffect(() => {
//     axios.get('http://localhost:3000/to-dos').then(function(response){
//           setHome(response.data)
//     })
//   }, [])

//   async function postName(e){
//     e.preventDefault();
    
//     try {
//       await axios.post("http://localhost:3000/to-dos", {
//         name
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
//     <div className="App">
//         <form onSubmit={postName}>
//           <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
//           <button type='sumbit'>Sumbit</button>
//         </form>
//         {home}



//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//     </div>
//   );
// }

// export default App;


import React from "react";
import './App.css';
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="todo-app">
      <TodoList />
    </div>
  )
}

export default App;