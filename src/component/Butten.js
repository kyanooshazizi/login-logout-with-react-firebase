import * as React from 'react';
import Button from '@mui/material/Button';

export default function BasicButtons({title, handleAction}) {
    return (
        <Button variant="contained" style={{margin:"10px 20px"}} onClick={handleAction}>{title}</Button>
    );
}
