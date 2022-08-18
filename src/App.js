import './App.css';
import CrudApp from "./components/crud/CrudApp";
import CrudEdit from "./components/crud/CrudEdit";
import {BrowserRouter, Routes, Route} from "react-router-dom";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Context
import { GlobalState } from "../src/context/GlobalState";

function App() {
  return (
    <div className="App">
      <GlobalState>
        
        <BrowserRouter>

          <GlobalStyle />
          <h2>World Cup European National Football Teams</h2>
          <Routes>

            <Route path="/edit/:id" element={<CrudEdit/>} />
            <Route path="/"  element={<CrudApp/>} />

          </Routes>     

        </BrowserRouter>

      </GlobalState>


    </div>
  );
}

export default App;
