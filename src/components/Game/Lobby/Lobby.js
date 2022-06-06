import React, {useState, useEffect, useContext} from 'react'
import { FirebaseContext } from "../../../firebase/FirebaseContext";
import { collection, getDocs, } from "firebase/firestore"; 
import AdminLobby from './AdminLobby';
import PlayerLobby from './PlayerLobby';

const Lobby = ({game, gameId, qMaster, setStart}) => {

  const firebase = useContext(FirebaseContext);
  const [questions, setQuestions] = useState([]); 

  useEffect(  () => {
      if(firebase.db){
          const fetchQuestionList = async () => {
              const data = await getDocs( collection(firebase.db, "questions") )
              setQuestions(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
              }
         fetchQuestionList()
      }
  }, [firebase.db,game.punishments, game.restricted ])

  return ( qMaster ? <AdminLobby 
    game={game}
    gameId={gameId}
    setStart={setStart}
    questions={questions}
  /> : <PlayerLobby />
  );
}

export default Lobby; 

