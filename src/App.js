import { Route, Routes, Navigate } from "react-router-dom";

//autorisation
const auth = false

function App() {
  return (
    <>
      {auth 
        ? 
        (<Routes>
          <Route path='/registration' element ={<></>}/>
          <Route path='/login' element ={<></>}/>
          <Route path='*' element ={<Navigate replace to='/registration'/>}/>
        </Routes>)
        :
        (<Routes>
          <Route path='/home' element ={<></>}/>
          <Route path='/todo/:id' element ={<></>}/>
          <Route path='*' element ={<Navigate replace to='/home'/>}/>
        </Routes>)
      }
    </>
  );
}

export default App;
