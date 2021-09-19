
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import ReactDOM from "react-dom";



const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    
  );
};

export default App;