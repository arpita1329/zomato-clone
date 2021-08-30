import {Route, Redirect} from "react-router-dom";

// HOC
import HomeLayoutHOC from "./HOC/Home.HOC";

// Components
import Temp from "./Components/temp";

// Page
import Home from "./Page/Home";

function App() {
  return (
    <>
      <Route path="/" exact>
        <Redirect to="/delivery" />
      </Route>
      <HomeLayoutHOC path ="/" exact component={Temp} />
      <HomeLayoutHOC path ="/:type" exact component={Home} />
    </>
  );
}

export default App;
