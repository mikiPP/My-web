import React from 'react';
import './App.css';
import smoke from './assets/smoke.mp4';
import me from './assets/me.png';
import octopus from './assets/octopus.png';
import starWars from './assets/starWars.png';
import sprintOrganizer from './assets/sprintOrganizer.svg';
import { Row, Col } from 'react-bootstrap';
import cv from './assets/cv.pdf';

function App() {
  const breakScroll = (event) => {
    const side1 = document.getElementById('side1');
    side1.style.left = -+window.pageYOffset + 'px';

    const side2 = document.getElementById('side2');
    side2.style.left = +window.pageYOffset + 'px';

    const content = document.getElementById('content');
    const relation = 1.28; // this is the relation between the left property and the heigth of the screen

    const leftPx = side2.style.left.split('px')[0];
    content.style.opacity = (leftPx / +window.outerWidth) * relation;

    if (window.outerWidth / leftPx <= relation) {
      window.removeEventListener('scroll', breakScroll);
      document.getElementById('message').classList.add('display-none');
      document.getElementById('broken').classList.add('display-none');
      window.scrollTo(0, 0); //this redirect to the top of the page
    }
  };

  return (
    <div className="App">
      <section
        className="first"
        onAnimationEnd={(event) => {
          const target = event.target;
          window.addEventListener('scroll', breakScroll);
          setTimeout(() => {
            document.getElementById('broken').classList.remove('display-none');
            document.getElementById('content').classList.remove('display-none');

            target.closest('section').classList.add('display-none');
          }, 2000);
        }}
      >
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

      <section id="content" className="display-none">
        <div className="headerContainer">
          <div className="header">
            <div className="imgContainer">
              <img src={me} alt="me"></img>
            </div>

            <div className="textContainer">
              <h1>Hi, I am Miki !</h1>
              <p>
                Web junior full stack developer from Palma de Mallorca, Spain.{' '}
              </p>
            </div>
          </div>
          <span id="keepScrolling">Keep scrolling to know more about me !</span>
        </div>
        <div id="portfolioContainer">
          <div id="portfolio">
            <h1> My projects or projects where i have collaborated: </h1>

            <div className="cardContainer">
              <div className="card">
                <div className="face face1">
                  <div className="content">
                    <img alt="octopus" src={octopus}></img>
                    <h3>Pop</h3>
                  </div>
                </div>
                <div className="face face2">
                  <div className="content">
                    <p>
                      A project to discover why Mariano is converted to an
                      octopus, for that project all was made just with css / js
                      / html without libraries. Made with @OriOrihuela
                    </p>
                    <a href="https://pop-project.herokuapp.com/">
                      Check this project <i className="fas fa-rocket"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="face face1">
                  <div className="content">
                    <img alt="starWars intro" src={starWars}></img>
                    <h3>Star Wars intro</h3>
                  </div>
                </div>
                <div className="face face2">
                  <div className="content">
                    <p>
                      This project was made as a gift to congratulate young girl
                      star wars fan. This project is made only with css, js and
                      html without any external library.
                    </p>
                    <a href="https://mikipp.github.io/intro-star-wars/">
                      Check this project <i className="fas fa-rocket"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="face face1">
                  <div className="content">
                    <img alt="sprintOrganizer" src={sprintOrganizer}></img>
                    <h3>Sprint organizer</h3>
                  </div>
                </div>
                <div className="face face2">
                  <div className="content">
                    <p>
                      This is a web application like jira or redmine but
                      focusing Scrum environment. This is a MERN stack app.
                    </p>
                    <a href="https://github.com/mikiPP/PFC-Sprint-Organizer-App">
                      Check this project <i className="fas fa-rocket"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="skillsContainer">
          <div id="skills"></div>
        </div>

        <div className="footer">
          <Row className="footerRow">
            <Col>
              <ul>
                <li>
                  <a href="https://twitter.com/_miki_13">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/mikiPP">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/miguel-%C3%A1ngel-palao-palmer-a61486177/">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/palao_palmer/">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="mailto:miki.palao.palmer@gmail.com">
                    <i className="fas fa-envelope"></i>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="footerRow">
            <Col>Miki Palao Palmer 2020 ©</Col>
          </Row>
        </div>

        <div id="cv">
          <a href={cv}>
            CV <i className="fas fa-file-download"></i>{' '}
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
