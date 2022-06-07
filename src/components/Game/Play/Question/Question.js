import React, {useState, useContext, useEffect} from 'react'
import { AuthContext } from "../../../../session/AuthContext";
import { FirebaseContext } from "../../../../firebase/FirebaseContext";
import { setDoc, doc } from "firebase/firestore"; 
import { InteractiveQuestions } from "../../../../utils/QuestionTypes"
import QuestionCard from './QuestionCard';
import SkeletonPage from '../../../Loading/SkeletonPage';
import InteractiveQuestion from './InteractiveQuestion';


const Question = ({game, currQuestion}) => {

    const firebase = useContext(FirebaseContext);
    const { authState } = useContext(AuthContext);
    const [loading, setLoading] = useState(true); 

    useEffect(  () => {
        if(firebase.db && InteractiveQuestions[currQuestion.type] && game.c_uid === authState.user.uid ){
            const createAnswerRecord = async () => {
                await setDoc(doc(firebase.db, "answers", game.id + currQuestion.id), {
                    type: currQuestion.type,
                    q_id: currQuestion.id, 
                    g_id: game.id,
                    answers : [], 
                    chameleon: game.players[Math.floor(Math.random()*game.players.length)], 
                    started: true, 
                  });
                
            }
            createAnswerRecord()   
            console.log("Here") 
        } 
        setLoading(false)
    }, [game.id, currQuestion.id, firebase.db, authState.user.uid, game.c_uid, currQuestion.type, game.players])
    

    return ( <>
         {loading ?  <SkeletonPage /> : InteractiveQuestions[currQuestion.type] ? 
            <InteractiveQuestion game={game} currQuestion={currQuestion}  />  :  <QuestionCard currQuestion={currQuestion} /> }
    </>)
};

export default Question;