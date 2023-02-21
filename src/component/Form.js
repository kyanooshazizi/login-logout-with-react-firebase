import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import BasicButtons from "./Butten";
import styles from "../styles/form.module.scss"
export default function Form({ title, setPassword, setEmail, handleAction ,nottitle,nothandleAction }) {
    return (
        <div>
        <div  className={styles.pagetotal}>
       <div className={styles.heading_container}>
        <span className={styles.tooltip}>لطفا وارد حساب کاربری خود شوید</span>
                <h3>
                   Form {title} with Google
                </h3>
          

            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 2, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="email" label="Enter the Email" variant="outlined" style={{width:"90%"}} onChange={(e) => setEmail(e.target.value)}/>
                <TextField id="password" label="Enter the Password" variant="outlined" style={{width:"90%"}} onChange={(e) => setPassword(e.target.value)}/>
            </Box>
                <div className={styles.butten}>
                <BasicButtons title={title}  handleAction={handleAction}/>
                <BasicButtons title={nottitle} handleAction={nothandleAction}/>
                </div>
                </div>
        </div>

        </div>
       
    );
}