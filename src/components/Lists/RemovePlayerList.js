import React, {useContext} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { AuthContext } from "../../session/AuthContext";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


const RemovePlayerList = ({game, handleRemovePlayer}) => {

    const { authState } = useContext(AuthContext);

  
  return ( 
    <List >
        {game.players.map((player, i) => (

            <ListItem
            key={player.uid}
            secondaryAction={
                <IconButton edge="end" aria-label="delete" disabled={player.uid === authState.user.uid} onClick={() => handleRemovePlayer(i)}>
                    <DeleteIcon />
                </IconButton>
            }
            >
            <ListItemText
                primary={player.displayName}
            />
            </ListItem>
        ))}
    </List>
  );
}

export default RemovePlayerList; 