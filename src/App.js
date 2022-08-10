import React from 'react';
import './App.css';
import Fullpage from './Fullpage';
import Login from './Login';
import About from './About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import FullCanvas from './FullCanvas';
import CartPage from './CartPage';
import { useState } from 'react';
import Payment from './Payment';
import { useEffect } from 'react';
import { isVisible } from '@testing-library/user-event/dist/utils';

function App() {
  const [lamps, setLamps] = useState([
    { id: 1, title: "Bamboo & Straw", backimage: "lamp3.png", items: 0, prop1: true, prop2: "red, blue, green", type: 1, price: 59.99 },
    { id: 2, title: "Elegance", backimage: "lamp4.png", items: 0, prop1: true, prop2: "red, green", type: 1, price: 89.69 },
    { id: 3, title: "UFO", backimage: "lamp5.png", items: 0, prop1: true, prop2: "red, blue, green", type: 1, price: 27.45 },
    { id: 4, title: "One-Legged Tuna", backimage: "lamp1.png", items: 0, prop1: false, prop2: "red, blue, orange", type: 1, price: 34.56 },
    { id: 5, title: "Black Quartz", backimage: "lamp2.png", items: 0, prop1: false, prop2: "black, blue, orange", type: 2, price: 24.34 },
    { id: 6, title: "Porcupine Class", backimage: "lamp6.png", items: 0, prop1: false, prop2: "black, blue, orange", type: 2, price: 67.30 },
    { id: 7, title: "The Chaperone", backimage: "lamp7.png", items: 0, prop1: false, prop2: "black, red, green", type: 3, price: 78.21 },
  ]);
  const [totalItems, setTotalItems] = useState(0);


  function floatingParticles(setChangedURL, canvasName, particleNr, ifColor, ifBig) {
    var canvas = document.getElementById(canvasName);
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    correctSize(canvas);
    var ctx = canvas.getContext("2d");
    let particleArray;

    function correctSize(canvas){
      let parent = canvas.parentElement;
      canvas.height = parent.clientHeight;
      if (!canvasName.includes("myCanvas")) {
        canvas.width = parent.clientWidth / 8;
      }
      else {
        canvas.width = parent.clientWidth;
      }
    }

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
      correctSize(canvas);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].draw();
      }
    })
  }
  useEffect(() => {
    var intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          console.log(entry.target);
        }
      })
    }, { threshold: 0 });
    var toObserve = [];
    var element = document.querySelector("#firstH1");
    var element2 = document.getElementsByClassName("mainContent")[0];
    var formElements = document.querySelectorAll(".formBlock");
    if (element !== null && typeof (element) !== 'undefined') {
      toObserve.push(element);
    }
    if (element2 !== null && typeof (element2) !== 'undefined') {
      toObserve.push(element2);
    }
    if (toObserve.length !== 0) {
      [].map.call(toObserve, el => intersectionObserver.observe(el));
    }
    [].map.call(formElements, el => intersectionObserver.observe(el));
  }, [])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/Portfolio/" element={<Fullpage setTotalItems={setTotalItems} totalItems={totalItems} lamps={lamps} floatingParticles={floatingParticles} />} />
          <Route path="/Portfolio/login" element={<FullCanvas url={"/Portfolio/"} floatingParticles={floatingParticles}><Login /> </FullCanvas>} />
          <Route path="/Portfolio/about" element={<About />} />
          <Route path="/Portfolio/signup" element={<FullCanvas url={"/Portfolio/login"} floatingParticles={floatingParticles}><Signup /> </FullCanvas>} />
          <Route path="/Portfolio/cart" element={<FullCanvas url={"/Portfolio/"} floatingParticles={floatingParticles}><CartPage lamps={lamps} /></FullCanvas>}></Route>
          <Route path="/Portfolio/payment" element={<FullCanvas url={"/Portfolio/cart"} floatingParticles={floatingParticles}><Payment /></FullCanvas>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
