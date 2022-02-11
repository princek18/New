import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import './App.css';
import { FirstPage } from './Components/Pages/FirstPage';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { SecondPage } from './Components/Pages/SecondPage';
import { ThirdPage } from './Components/Pages/ThirdPage';
import { HomePage } from './Components/HomePage';
import { FourthPage } from './Components/Pages/FourthPage';
import { FifthPage } from './Components/Pages/FifthPage';
import { SixthPage } from './Components/Pages/SixthPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/first' element={<FirstPage />} />
          <Route path='/second' element={<SecondPage />} />
          <Route path='/third' element={<ThirdPage/>} />
          <Route path='/fourth' element={<FourthPage/>} />
          <Route path='/fifth' element={<FifthPage/>} />
          <Route path='/sixth' element={<SixthPage/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
