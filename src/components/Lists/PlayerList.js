import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const PlayerList = ({players, setPlayers}) => {

    const handlePlayerOrder = (i) => {
        console.log(i)
        var playerCopy = [...players]
        var newPlayers =  i === 0 ? arraymove(playerCopy, i, 1) : arraymove(playerCopy, i, i-1)

        setPlayers( newPlayers)


    };

    function arraymove(arr, old_index, new_index) {
        if (new_index >= arr.length) {
            var k = new_index - arr.length + 1;
            while (k--) {
                arr.push(undefined);
            }
        }
        arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
        return arr; // for testing
    };
  
  return ( 
    <List >
        {players.map((player, i) => ((
        <ListItem
            key={player.uid}
            secondaryAction={
            i === 0 ? 
            <IconButton edge="end" aria-label="order" onClick={()=>handlePlayerOrder(i)}>
                <KeyboardArrowDownIcon />
            </IconButton> : 
            <IconButton edge="end" aria-label="order" onClick={()=>handlePlayerOrder(i)}>
                <KeyboardArrowUpIcon />
            </IconButton>
            }
        >
            <ListItemAvatar>
            <Avatar>
                <PersonIcon />
            </Avatar>
            </ListItemAvatar>
            <ListItemText
            primary={player.displayName}
            />
        </ListItem>
        )))}
    </List>
  );
}

export default PlayerList; 