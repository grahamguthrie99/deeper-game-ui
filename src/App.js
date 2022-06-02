import React  from "react";
import { Route, Switch } from "react-router-dom";
import AuthenticatedRoute from "./session/AuthenticatedRoute";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import { Header } from "./components/Header/Header";
import AddQuestionForm from "./components/Forms/AddQuestionForm";
import QuestionList from "./components/Lists/QuestionList";
import Game from "./pages/Game";
import Rules from "./pages/Rules";
import NotFound from "./pages/NotFound";

function App() {

  return (
    <div>
      <Header />
      <Switch>
          <Route exact path="/" component={Landing} />
          <AuthenticatedRoute exact path="/home" component={Dashboard} />
          <AuthenticatedRoute exact path="/question" component={AddQuestionForm} />
          <AuthenticatedRoute exact path="/questions" component={QuestionList} />
          <AuthenticatedRoute path="/game/:id" children={<Game />} />
          <AuthenticatedRoute exact path="/rules" component={Rules} />
          <Route path="*" component={NotFound} />
      </Switch>
    </div>
  )
  
}

export default App;
