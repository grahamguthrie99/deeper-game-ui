import React, {useState} from 'react'
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import AdminModal from '../../../Forms/AdminModal';

const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  });

const AdminControl = ({game}) => {

    const [open, setOpen] = useState(false);
   
    return ( 
        <>
          <StyledFab color="secondary" aria-label="add" onClick={() => setOpen(true)}>
            <AddIcon />
          </StyledFab>
          <AdminModal 
            open={open}
            setOpen={setOpen}
            game={game}
          />

        </>
    )
     
};

export default AdminControl;