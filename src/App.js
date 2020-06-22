import React from 'react';
import './App.css';
import smoke from './assets/smoke.mp4'

function App() {

    const breakScroll = (event) =>  {
       
        const side1 = document.getElementById('side1');
        side1.style.left= - + window.pageYOffset +'px'
 
        
        const side2 = document.getElementById('side2');
        side2.style.left = + window.pageYOffset + 'px'

        const leftPx = side2.style.left.split('px')[0];

        if(window.outerWidth / leftPx <= 1.28){
            window.removeEventListener("scroll", breakScroll);
        }
    }


  return (
    <div className="App">
        <section className="first" onAnimationEnd={(event) =>  {
            const target = event.target;
            window.addEventListener('scroll',breakScroll)
            setTimeout(() => {
                document.getElementById("broken").classList.remove('display-none')
                target.closest('section').classList.add('display-none');


                },2000)}}>
        <video className="video" src={smoke} autoPlay muted={true}></video>
        <h2> Welcome to my web page</h2>
        </section>

        <section className="broken display-none" id="broken">
                <div className="side" id="side1"></div>
                <div className="side" id="side2"></div>
        </section>
    </div>
  );
}

export default App;
