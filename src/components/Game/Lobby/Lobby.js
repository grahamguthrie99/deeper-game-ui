import React, {useState, useEffect, useContext} from 'react'
import { FirebaseContext } from "../../../firebase/FirebaseContext";
import { collection, query, onSnapshot } from "firebase/firestore"; 
import AdminLobby from './AdminLobby';
import PlayerLobby from './PlayerLobby';

const Lobby = ({game, gameId, qMaster, setStart}) => {

  const firebase = useContext(FirebaseContext);
  const [questions, setQuestions] = useState([]); 

  //change to just retrieve once
  useEffect(  () => {
      if(firebase.db){
          function fetchQuestionList(){
              const q = query(collection(firebase.db, "questions"))
              onSnapshot( q , (querySnapshot) => {
                  setQuestions(querySnapshot.docs.map(doc => ({
                      ...doc.data(),
                      id: doc.id,
                      
                    })
                  ))
              });
          }
          fetchQuestionList()
      }
  }, [firebase.db])

  return ( qMaster ? <AdminLobby 
    game={game}
    gameId={gameId}
    setStart={setStart}
    questions={questions}
  /> : <PlayerLobby />
  );
}

export default Lobby; 

