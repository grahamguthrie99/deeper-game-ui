import React from 'react'
import Modal from '@mui/material/Modal';
import Button from "@mui/material/Button"
import Box from '@mui/material/Box';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const style = {
    position: 'absolute',
    top: "0px", 
    height: "100%",
    width: "100%", 
    bgcolor: 'background.paper',
  
  };

const AnswersList = ({open, setOpen, questionMetadata}) => {
   
   
    const handleClose = () => {
        setOpen(false)
    };

    return (
        <div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                >
                    <Box
                        sx={{ mb: 4 }}
                        justifyContent="center"
                    >
                        <Button onClick={() => handleClose()}  variant="contained" color='secondary'>Close</Button>
                    </Box>
        
                    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                
                        {questionMetadata.answers.map(answer => (
                            
                            <ListItem alignItems="center"  key={answer.uid} >
                                <ListItemText
                                    primary={answer.text}
                                />
                            </ListItem>

                        ))}

                    </List>
                </Box>
            </Box>
      </Modal>
    </div>
         
       
    )

}

export default AnswersList; 

