import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./component/Header";
import DayList from "./component/DayList";
import Day from "./component/Day";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EmptyPage from "./component/EmptyPage";
import CreateWord from "./component/CreateWord";
import CreateDay from "./component/CreateDay";
import {Container} from "react-bootstrap";

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path='/' component={DayList}/>
            <Route path='/day/:day' component={Day}/>
            <Route path='/create_word' component={CreateWord}/>
            <Route path='/create_day' component={CreateDay}/>
            <Route path='*' component={EmptyPage}/>
          </Switch>
        </div>
      </Container>
    </BrowserRouter>
  );
}

export default App;
