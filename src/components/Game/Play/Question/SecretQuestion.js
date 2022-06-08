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
                flexGrow:1, 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: "100%"
              
                }}
            >
           {authState.user.uid !== questionMetadata.chameleon.uid ? 
                <CardContent sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1, 
                    alignItems: 'center',
                    }}>
                    <Typography variant="h4" color="text.secondary" component="div"  sx={{mb:2, textAlign: "center"}} >
                        You have the secret word: 
                    </Typography>
                    <Typography variant="h2" component="div" sx={{mb:2}}  color="text.primary">
                        {currQuestion.text}
                    </Typography>
                    <Box
                        sx={{
                        height: "100%", 
                        width: "100%", 
                        backgroundImage: "url('https://i.giphy.com/media/JRD9kU93V4nZlNCL1g/giphy.webp')",
                        backgroundSize: "fixed",
                        backgroundRepeat: "repeat-x",
                        backgroundPosition: "center",
                    
                        }}
                    ></Box>
                </CardContent> : 
                <CardContent sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    alignItems: 'center',
                    }}>
                    <Typography variant="h3" component="div" sx={{mb:2, textAlign: "center"}} color="text.primary">
                        You are the Chameleon!
                    </Typography>
                    <Box
                        sx={{
                        marginTop: 1,
              
                        height: "100%", 
                        width: "100%", 
                        backgroundImage: "url('https://media2.giphy.com/media/6OuJvUtas5qlPFC1lm/giphy.gif?cid=ecf05e47b8xxd0oupipyzrye45mjd8dfq8b3hea2nlxjct8d&rid=giphy.gif&ct=s')",
                        backgroundSize: "fixed",
                        backgroundRepeat: "repeat-x",
                        backgroundPosition: "center",
                    
                        }}
                    ></Box>

                </CardContent>   }
      </Box>

    )
     
};

export default SecretQuestion;
