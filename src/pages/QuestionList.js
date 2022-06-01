import React, {useState, useEffect, useContext} from 'react'
import { FirebaseContext } from "../firebase/FirebaseContext";
import { collection, getDocs } from "firebase/firestore"; 


const QuestionList = ({user = null}) => {
    const firebase = useContext(FirebaseContext);
    const [questions, setQuestions] = useState([]); 

    useEffect(  () => {
        if(firebase.db){
            async function fetchQuestionList(){
                const querySnapshot = await getDocs(collection(firebase.db, "questions"));
                querySnapshot.forEach((doc) => {
                    console.log(`${doc.id} => ${doc.data()}`);
                });

            }
            fetchQuestionList()
            
        }
    }, [firebase.db])


    return (
        <div>Questions</div>
    )

}

export default QuestionList; 