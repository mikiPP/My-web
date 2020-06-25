import React from 'react';
import './App.css';
import smoke from './assets/smoke.mp4'
import me from './assets/me.png'

function App() {

    const breakScroll = (event) =>  {
       
        const side1 = document.getElementById('side1');
        side1.style.left= - +window.pageYOffset +'px'
 
        
        const side2 = document.getElementById('side2');
        side2.style.left = +window.pageYOffset + 'px'

        const content = document.getElementById('content');
        const relation = 1.28; // this is the relation between the left property and the heigth of the screen
        
        const leftPx = side2.style.left.split('px')[0];
        content.style.opacity = ((leftPx  / +window.outerWidth ) * relation);

        if ( window.outerWidth / leftPx <= relation ){
            window.removeEventListener("scroll", breakScroll);
            document.getElementById("message").classList.add('display-none')
            window.scrollTo(0,0); //this redirect to the top of the page
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
                <div id="message">
                    <h2>Scroll down to see the page!</h2>
                </div>
        </section>

        <section id="content">
            <div className="me">
                <img src={me} alt="me" />
            </div>
        </section>
    </div>
  );
}

export default App;
