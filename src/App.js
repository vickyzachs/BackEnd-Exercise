import { Component } from 'react';
import './App.css';
import Dashboard from './Pages/Dashboard';
import Welcome from "./Components/Welcome";

// function App() {
//   const student1="John";
//   // const student2="Jane";
//   // const student3="Bob";

//   return (
//     // <>
//     // <Dashboard />
//     // </>
//     <>
//       <h1>Hello World</h1>
//       <h3>Welcome {student1}</h3>
//       {/* <h3>Welcome {student2}</h3>
//       <h3>Welcome {student3}</h3> */}
//     </>
    
//   );
// }


class App extends Component {
  render(){
    const FullName ="John Doe";
    return(
    <>
       <h1>Hello World</h1>
       <Welcome />
       <Welcome />
       <Welcome />
   </>
    );
  };
};

export default App;
