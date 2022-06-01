import React  from "react";
import { Route, Switch } from "react-router-dom";
import AuthenticatedRoute from "./session/AuthenticatedRoute";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import { Header } from "./components/Header/Header";
import AddQuestionForm from "./components/Forms/AddQuestionForm";
import QuestionList from "./pages/QuestionList";

function App() {

  return (
    <div>
      <Header />
      <Switch>
          <Route exact path="/" component={Landing} />
          <AuthenticatedRoute exact path="/dashboard" component={Dashboard} />
          <AuthenticatedRoute exact path="/addQuestion" component={AddQuestionForm} />
          <AuthenticatedRoute exact path="/question" component={QuestionList} />
      </Switch>
    </div>
  )
  
}

export default App;
