import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Header from "./Header";
const Home = (props) => {
    let navigate = useNavigate();
    console.log(props.email)
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')
        if (authToken) {
            navigate('/home')
        }

        if (!authToken) {
            navigate('/login')
        }
    }, [])
    return (
        <>
     <Header/>
        </>
    );
};

export default Home;