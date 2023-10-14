import "./App.css";
import Board from "./components/Board/Board";
import Footer from "./components/Footer/Footer";
import { useSelector } from "react-redux";
import { reducerType } from "./redux/types";
import MusicBox from "./components/MusicBox/MusicBox";
import ParticleBg from "./components/ParticleBg/ParticleBg";
import { particleBg } from "./config/particle-config";

function App() {
  const data = useSelector<reducerType>((state) => state.reducer.data) as any;

  return (
    <div className="App">
      <ParticleBg particleOptions={particleBg} />
      <MusicBox />
      <Board data={data} />
      <Footer />
    </div>
  );
}

export default App;
