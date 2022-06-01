import React from 'react'
import Button from '@mui/material/Button';


const AuthButton = ({onClick =null, children = null}) => (
    <Button variant="contained" onClick={onClick}>{children}</Button>
);

export default AuthButton; 