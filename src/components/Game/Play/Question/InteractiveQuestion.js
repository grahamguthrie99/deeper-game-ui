import React, {useState, useContext, useEffect} from 'react'
import { FirebaseContext } from "../../../../firebase/FirebaseContext";
import { doc, onSnapshot} from "firebase/firestore"; 
import AnonQuestion from './AnonQuestion';
import SecretQuestion from './SecretQuestion';
import SkeletonPage from '../../../Loading/SkeletonPage';
import { AuthContext } from "../../../../session/AuthContext";


const InteractiveQuestion = ({game, currQuestion}) => {

    const firebase = useContext(FirebaseContext);
    const { authState } = useContext(AuthContext);
    const [loading, setLoading] = useState(true); 
    const [questionMetadata, setQuestionMetadata] = useState(null); 


    useEffect(  () => {
        if(firebase.db){
            function fetchAnswers(){
                onSnapshot(doc(firebase.db, "answers", game.id + currQuestion.id), (doc) => {
                    console.log("Current data: ", doc.data());
                    setQuestionMetadata({
                        ...doc.data(),
                        id: doc.id
                    })
                });
                
            }
            fetchAnswers()
            setLoading(false)

        }
    }, [game.id, currQuestion.id, firebase.db])

    if (questionMetadata == null) return <SkeletonPage />
    if (authState == null) return <SkeletonPage />
    
    return ( <>
         {loading ?  <SkeletonPage /> : currQuestion.type === 4 ?  <AnonQuestion currQuestion={currQuestion} questionMetadata={questionMetadata}/> : 
           <SecretQuestion currQuestion={currQuestion} questionMetadata={questionMetadata}/>}
    </>)
};

export default InteractiveQuestion;