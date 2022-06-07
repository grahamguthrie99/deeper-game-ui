import React, {useContext} from 'react'
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { AuthContext } from "../../../../session/AuthContext";


const SecretQuestion = ({currQuestion, questionMetadata}) => {

    const { authState } = useContext(AuthContext);
   
    return ( 
        <Box
                sx={{
                marginTop: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              
                }}
            >
           {authState.user.uid !== questionMetadata.chameleon.uid ? 
                <CardContent sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}>
                    <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                        You have the secret word: 
                    </Typography>
                    <Typography variant="h4" component="div" sx={{mb:2}}>
                        {currQuestion.text}
                    </Typography>
                </CardContent> : 
                <CardContent sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}>
                    <Typography variant="h4" component="div" sx={{mb:2}}>
                        You are the chameleon!
                    </Typography>
                </CardContent>   }
      </Box>

    )
     
};

export default SecretQuestion;
