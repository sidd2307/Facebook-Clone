import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import { useStateValue } from './StateProvider';
import Widgets from './Widgets';

function App() {
  const [{ user }, dispatch] = useStateValue()

  return (
    // Bem 
    <div className="app">
      {!user ? (
        <Login />
      ) : (
          <>
            <Header />

            <div className="app__body">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
          </>
        )}
    </div>
  );
}

export default App;

// import React from "react";
// import "./App.css"
// import Header from "./Header";
// import Sidebar from "./Sidebar";
// import Feed from "./Feed";
// import Widgets from "./Widgets";
// import Login from "./Login";
// import { useStateValue } from "./StateProvider";

// function App() {
//   const [{ user }, dispatch] = useStateValue();

//   return (
//     //BEM Naming Convention
//     <div className="app">
//       {!user ? (<Login />) : (
//         <>
//           <Header />

//           <div className="app__body">
//             <Sidebar />

//             <Feed />

//             <Widgets />
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default App;
