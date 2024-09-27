import React, { useState } from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Subscribed from './pages/Subscribed/Subscribed';

function App() {
  const [showSubscribed, setShowSubscribed] = useState(false); 
  const [email, setEmail] = useState('');
  const [resetEmail, setResetEmail] = useState(false); 


  const handleSubscribe = (enteredEmail) => {
    setEmail(enteredEmail);
    setShowSubscribed(true);
  };


  const handleCloseModal = () => {
    setShowSubscribed(false);
    setEmail(''); 
    setResetEmail(true); 
  };
  return (
    <>
    <Header/>
    <Home/>
    <Footer onSubscribe={handleSubscribe} resetEmail={resetEmail} setResetEmail={setResetEmail} />

     {showSubscribed && (
        <Subscribed email={email} onClose={handleCloseModal} />
      )}
    </>
  );
}

export default App;
