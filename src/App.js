import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Navbar />
      </div>
      <div className="App-body">
        <h1>Welcome to Take a Chance</h1>
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
