import './App.css';

import { test } from "./old";
import {useEffect} from "react";



function App() {

  useEffect(() => {
    test();
  }, [])
  return (
    <div className="App">
    </div>
  );
}

export default App;
