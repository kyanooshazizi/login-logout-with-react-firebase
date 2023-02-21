import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "../../styles/header.module.scss";
import {  signOut } from "firebase/auth";
import { auth } from '../../firebase/firebase-config';
const Header = (props) => {
    const navigate=useNavigate();
    // نمایش دادن نام کاربر
    const [picture,setPicture]=useState(null);
    auth.onAuthStateChanged(function(user) {
        if (user) {
          setPicture(user.email.split("@")[0])
        //   console.log(user)
        }else{
            navigate("/login")
        }
      });
   // نمایش دادن نام کاربر  
   

    const logoutHandler=()=>{
         signOut(auth).then(() => {
        // Sign-out successful.
        sessionStorage.setItem('Auth Token',0)
            navigate("/login");
            // console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }
    return (
        <div>
            <ul className={styles.wrapper_header}>
                <li className={styles.logout}>
                    <button onClick={logoutHandler}>Logout</button>
                    <li>{picture}</li>
                </li>
                <li className={styles.search_input}>
                    <input type="text" placeholder='search...' />
                    <button>search</button>
                </li>
                <li className={styles.home_icon}>
                    Home
                    <span className="material-symbols-outlined">
home
</span>
                </li>
            </ul>
        </div>
    );
};

export default Header;