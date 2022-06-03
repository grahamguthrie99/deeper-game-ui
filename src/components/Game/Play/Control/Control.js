import React, {useState, useContext, useEffect} from 'react'
import { AuthContext } from "../../../../session/AuthContext";
import { FirebaseContext } from "../../../../firebase/FirebaseContext";
import { updateDoc, doc } from "firebase/firestore"; 
import OffControl from './OffControl';
import TurnControl from './TurnControl';



const Control = ({game, currPlayer}) => {
    const firebase = useContext(FirebaseContext);
    const { authState } = useContext(AuthContext);
    var {questionIndex, questions, turnIndex, players} = game; 

    const [qMaster, setQMaster] = useState(false)
    const [gameEnded, setGameEnded] = useState(false)

    useEffect(  () => {
      if(authState != null && game != null)
          setQMaster(game.c_uid === authState.user.uid)
    }, [ authState, game])

    const handlePass = async (e) => {
      e.preventDefault()
      if(questionIndex < questions.length-1){
         var nextQuestionIndex = questionIndex + 1
         var nextTurn = turnIndex < players.length-1 ? turnIndex+1 : 0

          try {
            await updateDoc(doc(firebase.db, "games", game.id), {
                currQuestion: questions[nextQuestionIndex], 
                questionIndex: nextQuestionIndex,
                turnIndex: nextTurn, 
                currPlayer: players[nextTurn],
                gameEnded : gameEnded
              });
          } catch (e) {
              console.error("Error adding document: ", e);
          //   setErrors(e)
          }
      }
      else{
        setGameEnded(true)
      }
    }

    const handleSkip = async (e) => {
      e.preventDefault()
      if(questionIndex < questions.length-1){
         var nextQuestionIndex = questionIndex + 1
          try {
            await updateDoc(doc(firebase.db, "games", game.id), {
                currQuestion: questions[nextQuestionIndex], 
                questionIndex: nextQuestionIndex,
                gameEnded : gameEnded
              });
          } catch (e) {
              console.error("Error adding document: ", e);
          //   setErrors(e)
          }
      }
      else{
        setGameEnded(true)
      }
      
    };
   
    return ( currPlayer.uid === authState.user.uid ? 
      <TurnControl 
        qMaster={qMaster} 
        game={game}
        handleSkip={handleSkip}
        handlePass={handlePass}
        gameEnded={gameEnded}
        /> : 
      <OffControl 
        qMaster={qMaster}
        />
    )
     
};

export default Control;