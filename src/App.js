import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Card from './components/Card';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      {/* <Switch> */}
      <div className="page">
        <div className="landingpage">
          <div className="landingpagenormal">
            <h1>Take A Chance</h1>
            <p>Kaufe ein Ticket und mache bei der Verlosung mit.</p><br></br>
            <p>Umsomehr Tickets man für eine Verlosung einsetzt umso höher ist die Gewinnchance.</p><br></br>
            <p>Realistische Gewinnchancen da es nur limitierte Tickets auf ein Product gibt.</p>
          </div>
        </div>
        <div className="productspage">
          <h1>Products</h1>
          <p>Some other fancy words.</p>
          <div className=" cards">
            <Card name="IPhone10" image="images/img-7.jpg" description="Handy" price="999,99€" available="10/1230" time="Verbleibende Zeit: 0 Tage 12:02:14" />
            <Card name="Urlaubsreise" image="images/img-2.jpg" description="Urlaub in der Caribik" price="450€" available="600/600" time="Verlosung findet statt" />
            <Card name="PS5" image="images/img-5.jpg" description="Spielekonsole" price="300€" available="0/499" time="Verbleibende Zeit: 4 Tage 23:12:55" />
          </div>
        </div>
        <div className="tickedspage">
          <h1>Tickets</h1>
          <p>Explain the principe or so. idk?</p>
          <div className="cards">
            <Card name="1er Pack" image="images/img-4.jpg" description="1 Ticket" price="1,00€" />
            <Card name="5er Pack" image="images/img-3.jpg" description="5 Tickets" price="4,75€" />
            <Card name="10er Pack" image="images/img-1.jpg" description="10 Tickets" price="9,50€" />
            <Card name="25er Pack" image="images/img-6.jpg" description="25 Ticket" price="23,75€" />
            <Card name="50er Pack" image="images/img-8.jpg" description="50 Tickets" price="47,00€" />
            <Card name="100er Pack" image="images/img-9.jpg" description="100 Tickets" price="94,00€" />
          </div>
        </div>
        <div className="aboutuspage">
          <div className="aboutuspagenormal">
            <h1>About us</h1>
            <p>Some short words About us.</p>
          </div>
        </div>
      </div>
      {/* </Switch> */}
      <Footer />
    </Router>
  );
}

export default App;
