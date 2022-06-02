import React, {useState, useEffect, useContext} from 'react'
import { FirebaseContext } from "../firebase/FirebaseContext";
import { doc, onSnapshot } from "firebase/firestore"; 
import SkeletonPage from "../components/Loading/SkeletonPage";
import { useParams } from 'react-router-dom'
import Join from '../components/Game/Join';


const Game = () => {
    const firebase = useContext(FirebaseContext);
    const [game, setGame] = useState(null); 

    const [loading, setLoading] = useState(true); 
    const { id } = useParams()

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
    

    return ( loading ?  

        <SkeletonPage /> : 
         <Join
            game={game}
            id={id}
         />)
      
      
};

export default Game;