
import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import Authentication from './pages/authentication';
import LandingPage from './pages/landing';
import {Route ,BrowserRouter as Router , Routes} from 'react-router-dom';
import VedioMeetComponent from './pages/VedioMeet';
import HomeComponent from './pages/home';
import History from './pages/history';

   function App() {
   return(

    <>
    <Router>
      <AuthProvider>
    <Routes>
      <Route path= '/' element ={<LandingPage/>}/>
      <Route path= '/auth' element ={<Authentication/>}/>
      <Route path ='/home' element={<HomeComponent/>}/>
       <Route path='/history' element={<History />} />
      <Route path= '/:url' element={<VedioMeetComponent/>}/>
    </Routes>
    </AuthProvider>
    
    </Router>
    </>
   )
}
   


export default App;
