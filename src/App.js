import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import './App.css';
import { FirstPage } from './Components/FirstPage';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { SecondPage } from './Components/SecondPage';
import { HomePage } from './Components/HomePage';
import { ThirdPage } from './Components/ThirdPage';

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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
