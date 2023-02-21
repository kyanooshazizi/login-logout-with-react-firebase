import React from 'react';
import Form from "./component/Form";
import  './App.css';
import {
  Routes,
  Route, useNavigate 
} from "react-router-dom";
import { useState,useEffect} from 'react';
import Home from "./component/HomeComponent/Home";
// firebase
import { app } from './firebase/firebase-config';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
// toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = (props) => {

  const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const navigate = useNavigate();
const handleAction = (id) => {
  console.log(id)
  console.log(email,password)
  const authentication = getAuth();
  // start tostify
 const notify=(note,x)=> toast[x](note, {
    position: "top-right",
    autoClose: 3000,
    theme: "colored",
    });
    notify("  دقت کنید که فیلترشکن شما متصل باشد🙂","warning");
  // end tostify
  // id=2 for register
  if (id === 2) {
    createUserWithEmailAndPassword(authentication, email, password)
      .then((response) => {
        navigate('/home')
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        console.log(response)
    }).catch((error) => {
      if (error.code === 'auth/email-already-in-use'){
        notify("این کاربر قبلا وجود دارد","warning")
      }
      if (error.code !== 'auth/email-already-in-use'){
        notify("ایمیل یا پسورد شما معتبر نیست!😬","warning")
      }
      console.log(error)
})
 }
 // id=1 for login
 if (id === 1) {
  signInWithEmailAndPassword(authentication, email, password)
    .then((response) => {
      navigate('/home')
      sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
    }).catch((error) => {
      if(error.code!=="auth/wrong-password"){
        notify('کاربری با این ایمیل وجود ندارد',"error")
        console.log(error.code)
      }
      if(error.code==="auth/wrong-password"){
        notify("پسورد شما نادرست است","warning")
        console.log(error.code)
      }
})
}
}
// اگر کاربر قبلا وارد شده است با back زدن دوباره به صفحه login برنگردیم
useEffect(() => {
  let authToken = sessionStorage.getItem('Auth Token')

  if (authToken) {
    navigate('/home')
  }
}, [])
  return (
 <>
 
 <Routes>
   
   <Route path='/login' element={<Form title="Login" nottitle="Register" setEmail={setEmail}
         setPassword={setPassword} handleAction={() => {handleAction(1)}} nothandleAction={() => {navigate('/register')}}/>} />
   <Route path='/register' element={<Form title="Register" nottitle="Login" setEmail={setEmail}
         setPassword={setPassword} handleAction={() => handleAction(2)} nothandleAction={() => {navigate('/login')}} />} />
   <Route path='/home' element={<Home />}/>
   <Route path='/' element={<Home/>}/>
 </Routes>
 <ToastContainer />
 </>
  );
};

export default App;