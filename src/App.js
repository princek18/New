import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { WrapperComponent} from './Components/WrapperComponent'
import MainComponent from './Components/MainComponent';
import './App.css';
import { DisplayComponentB } from './Components/DisplayComponentB';

function App() {
  return (
    <div className="App">
      <Header/>
      <WrapperComponent>
      <MainComponent/>
      <DisplayComponentB/>
      </WrapperComponent>
      <Footer/>
    </div>
  );
}

export default App;
