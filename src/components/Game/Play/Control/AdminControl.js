import React from 'react'
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  });

const AdminControl = () => {
   
    return ( 
          <StyledFab color="secondary" aria-label="add">
            <AddIcon />
          </StyledFab>
    )
     
};

export default AdminControl;