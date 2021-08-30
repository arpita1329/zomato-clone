import {Route, Redirect} from "react-router-dom";

// HOC
import HomeLayoutHOC from "./HOC/Home.HOC";
import RestaurantLayoutHOC from "./HOC/Restaurant.HOC";

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
      <HomeLayoutHOC path ="/:type" exact component={Home} />
      <RestaurantLayoutHOC path ="/restaurant/:id" exact component={Temp} />
    </>
  );
}

export default App;
