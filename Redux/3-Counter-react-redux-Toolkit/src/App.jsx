import { StrictMode, useState } from 'react';
import Header from './components/Header';
import Container from './components/Container';
import Controls from './components/Controls';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import DisplayCounter from './components/DisplayCounter';
import { useSelector } from 'react-redux';
import PrivacyMsg from './components/PrivacyMsg';

function App()
{
  
  const privacy = useSelector((store) => store.privacy);
  return (
      
      <center className="px-4 py-5 my-5 text-center">
        <Container>
          <Header/>
          <div className="col-lg-6 mx-auto">
           {!privacy ? <DisplayCounter/> : <PrivacyMsg/>} 
            <Controls />
          </div>
        </Container>
     </center>
     
      
  );
}

export default App
