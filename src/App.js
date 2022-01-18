import { Route, Routes, Navigate } from "react-router-dom";

import RegistrationPage from "./Pages/PublicPages/RegistrationPage";
import LoginPage from "./Pages/PublicPages/LoginPage";

//autorisation
const auth = false

function App() {
  return (
    <>
      {auth 
        ? 
        (<Routes>
          <Route path='/home' element ={<></>}/>
          <Route path='/todo/:id' element ={<></>}/>
          <Route path='*' element ={<Navigate replace to='/home'/>}/>
        </Routes>)
        :
        (<Routes>
          <Route path='/registration' element ={<RegistrationPage/>}/>
          <Route path='/login' element ={<LoginPage/>}/>
          <Route path='*' element ={<Navigate replace to='/registration'/>}/>
        </Routes>)
      }
    </>
  );
}

export default App;
