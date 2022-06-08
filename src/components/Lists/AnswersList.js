import React from 'react'
import Modal from '@mui/material/Modal';
import Button from "@mui/material/Button"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const style = {
    position: 'absolute',
    top: "0px", 
    height: "100%",
    width: "100%", 
    bgcolor: 'background.paper',
    backgroundImage: "url('https://media4.giphy.com/media/LjtUQubEKZ0D176hFB/giphy.gif?cid=ecf05e47ovddgo89ks0om7umay7wwwf6urojllxxr889amm2&rid=giphy.gif&ct=s')",
    backgroundSize: "fixed",
    backgroundRepeat: "repeat-x",
    backgroundPosition: "center bottom",
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
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    p: 4, 
                    mt: 2, 
                  }}
                >
                    <Box
                        sx={{ mb: 4 }}
                        justifyContent="center"
                    >
                        <Button onClick={() => handleClose()}  variant="outlined" color='error'>Close</Button>
                    </Box>
        
                    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                
                        {questionMetadata.answers.map(answer => (
                            
                            <ListItem alignItems="center"  key={answer.uid} color="text.primary" >
                                <ListItemText
                                    primary={<React.Fragment>
                                        <Typography
                                          sx={{ display: 'inline' }}
                                          variant="h6"
                                          color="text.primary"
                                        >
                                          {answer.text}
                                        </Typography>
                                      </React.Fragment>}
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

