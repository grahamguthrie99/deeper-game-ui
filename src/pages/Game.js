import React, {useState, useEffect, useContext} from 'react'
import { FirebaseContext } from "../firebase/FirebaseContext";
import { doc, onSnapshot } from "firebase/firestore"; 
import SkeletonPage from "../components/Loading/SkeletonPage";
import { useParams } from 'react-router-dom'
import { AuthContext } from "../session/AuthContext";
import GameBoard from '../components/Game/GameBoard';


const Game = () => {
    const { id } = useParams()
    const { authState } = useContext(AuthContext);
    const firebase = useContext(FirebaseContext);
    const [game, setGame] = useState(null); 
   
    const [qMaster, setQMaster] = useState(false)
    const [loading, setLoading] = useState(true); 
    
    

    useEffect(  () => {
        if(firebase.db){
            function fetchGame(){
                onSnapshot(doc(firebase.db, "games", id), (doc) => {
                    console.log("Current data: ", doc.data());
                    setGame({
                        ...doc.data(),
                        id: doc.id
                    })
                });
                
            }
            fetchGame()
            setLoading(false)

        }
    }, [id, firebase.db])

    useEffect(  () => {
        if(authState != null && game != null){
            setQMaster(game.c_uid === authState.user.uid)
        }
    }, [id, authState, game])

    

    return ( loading ?  
    
     <SkeletonPage /> : 
     <GameBoard  
        game={game}
        gameId={id}
        qMaster={qMaster}
        />
        
   
    )
      
      
};

export default Game;