import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createHashHistory } from 'history';
import Login from './Login'
import Full from './Full'
import Restricted from './Restricted'
const history = createHashHistory()

function App() {

  console.log('zzz')
  return (

    <Router history={history}>
      <Switch>
        <Route path="/login" render={() => <Login history={history} />} />
        <Route path="/Full" render={
          () => {
            if (!sessionStorage.getItem("key")) {
              return <Restricted history={history}></Restricted>
            }
            else {
              return <Full>

              </Full>
            }

          }} />
        <Route path="/">
          <Redirect to="login" ></Redirect>
        </Route>






      </Switch>

    </Router>


  );
}

export default App;
