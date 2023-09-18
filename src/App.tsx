import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Board from "./components/Board/Board";
import Footer from "./components/Footer/Footer";
import { useSelector } from "react-redux";
import { reducerType } from "./redux/types";

function App() {
  const [isStart, setIsStart] = useState<boolean>(false);
  const data = useSelector<reducerType>((state) => state.reducer.data) as any;

  return (
    <div className="App">
      <Header isStart={isStart} setIsStart={setIsStart} />
      {isStart && <Board data={data} />}
      <Footer />
    </div>
  );
}

export default App;
