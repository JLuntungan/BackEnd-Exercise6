// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// import Login from './component/pages/Login/Login.js';
// import Register from './component/pages/Register/Register.js';
// import Dashboard from './component/pages/Dashboard/Dashboard.js';
// import About from './component/pages/About/About.js';
// import NavBar from './molecules/navbar/NavBar.js';
// import InputData from './component/pages/inputData/inputData';
// import Registrasi from './component/pages/registrasi/index';

// function App() {
//   return (
//     <Router>
//         <NavBar/>
//         <div>
//           <Switch>
//             <Route exact path="/">
//               <Login />
//             </Route>
//             <Route exact path="/Register">
//               <Register />
//             </Route>
//             <Route exact path="/Dashboard">
//               <Dashboard />
//             </Route>
//             <Route exact path="/About">
//               <About />
//             </Route>
//             <Route exact path="/InputData">
//               <InputData />
//             </Route>
//             <Route exact path="/Registrasi">
//               <Registrasi />
//             </Route>
//           </Switch>
//         </div>
//       </Router>
//   );
// }

// export default App;

import Dashboard from "./component/pages/Dashboard/index";

const App =() => {
     return (
       <Dashboard></Dashboard>
     )

}

export default App;
