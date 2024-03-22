import './App.css';
import { Caution } from './view/Caution';
import { Communication } from './view/Communication';
import { FirstSection } from './view/FirstSection';
import { Footer } from './view/Footer';
import { Logo } from './view/Logo';
import { Planning } from './view/Planning';
import { Studies } from './view/Studies';

function App() {
  return (
    <div className="App">
      <Logo/>
      <FirstSection/>
      <Caution/>
      <Communication/>
      <Planning/>
      <Studies/>
      <Footer/>
    </div>
  );
}

export default App;
