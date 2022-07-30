import React from 'react';
import './App.css';
import Fullpage from './Fullpage';
import Login from './Login';
import About from './About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import FullCanvas from './FullCanvas';
import CartPage from './CartPage';
import {useState} from 'react';

function App() {
  const [lamps, setLamps] = useState([
    { id: 1, title: "Bamboo & Straw", backimage: "lamp3.png", items: 0, prop1: true, prop2: "red, blue, green", type: 1 },
    { id: 2, title: "Elegance", backimage: "lamp4.png", items: 0, prop1: true, prop2: "red, green", type: 1 },
    { id: 3, title: "UFO", backimage: "lamp5.png", items: 0, prop1: true, prop2: "red, blue, green", type: 1 },
    { id: 4, title: "One-Legged Tuna", backimage: "lamp1.png", items: 0, prop1: false, prop2: "red, blue, orange", type: 1 },
    { id: 5, title: "Black Quartz", backimage: "lamp2.png", items: 0, prop1: false, prop2: "black, blue, orange", type: 2 },
    { id: 6, title: "Porcupine Class", backimage: "lamp6.png", items: 0, prop1: false, prop2: "black, blue, orange", type: 2 },
    { id: 7, title: "The Chaperone", backimage: "lamp7.png", items: 0, prop1: false, prop2: "black, red, green", type: 3 },
]);

  function floatingParticles(setChangedURL, canvasName, particleNr, ifColor, ifBig) {
    var canvas = document.getElementById(canvasName);
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.height = canvas.clientHeight;
    canvas.width = canvas.height * (canvas.clientWidth / canvas.clientHeight);
    var ctx = canvas.getContext("2d");
    let particleArray;

    function Particle(x, y, directionX, directionY, size, color, opacity) {
      this.x = x;
      this.y = y;
      this.directionX = directionX;
      this.directionY = directionY;
      this.size = size;
      this.color = color;
      if (opacity > 1) {
        this.opacity = 1;
      }
      else {
        this.opacity = opacity;
      }
    }

    Particle.prototype.draw = function () {
      try {
        ctx.width = canvas.width;
        ctx.height = canvas.height;
        let nuance;
        if (this.color === 1) {
          nuance = document.getElementById("whiteImage");
        }
        else if (this.color == 0) {
          nuance = document.getElementById("yellowImage");
        }
        ctx.globalAlpha = this.opacity;
        ctx.drawImage(nuance, this.x, this.y, this.size, this.size);
      } catch (error) {
        setChangedURL(1);
      }
    }

    Particle.prototype.update = function () {
      if (this.x > canvas.width || this.x - this.size < 0) {
        this.directionX = -this.directionX;
      }

      if (this.y > canvas.height || this.y - this.size < 0) {
        this.directionY = -this.directionY;
      }

      this.x += this.directionX;
      this.y += this.directionY;

      this.draw();
    }

    function init() {
      particleArray = [];
      for (let i = 0; i < particleNr; i++) {
        let directionX = (Math.random() * .6) - 0.3;
        let directionY = (Math.random() * .4) - 0.2;
        let size
        if (ifBig === 1) {
          size = (Math.random() + 0.5) * 100;
        }
        else {
          size = (Math.random() + 0.20) * 60;
        }
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let color;
        if (ifColor == 1) {
          color = Math.floor(Math.random() * 2);
        }
        else {
          color = 1;
        }
        let opacity = Math.random() + 0.2;

        particleArray.push(new Particle(x, y, directionX, directionY, size, color, opacity));
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update();
      }
    }

    init();
    animate();
    window.addEventListener('resize', function () {
      canvas.width = window.innerWidth;
      canvas.height = window.height;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].draw();
      }
    })
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/Portfolio" element={<Fullpage lamps={lamps} floatingParticles={floatingParticles} />} />
          <Route path="/login" element={<FullCanvas url={"/"} floatingParticles={floatingParticles}><Login /> </FullCanvas>} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<FullCanvas url={"/login"} floatingParticles={floatingParticles}><Signup /> </FullCanvas>} />
          <Route path="/cart" element={<CartPage lamps={lamps}/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
