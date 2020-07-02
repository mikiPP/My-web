import React from 'react';
import './App.css';
import smoke from './assets/smoke.mp4';
import me from './assets/me.png';
import octopus from './assets/octopus.png';
import starWars from './assets/starWars.png';
import sprintOrganizer from './assets/sprintOrganizer.svg';
import { Row, Col } from 'react-bootstrap';
import cv from './assets/cv.pdf';
import 'swiper/css/swiper.css';

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
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); //this redirect to the top of the page
    }
  };


  return (
    <div className="App">
      {/*  First Section  */}
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

      {/* Broken Section */}

      <section className="broken display-none" id="broken">
        <div className="side" id="side1"></div>
        <div className="side" id="side2"></div>
        <div id="message">
          <h2>Scroll down to see the page!</h2>
        </div>
      </section>

      {/* Header Section */}

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

        {/* Porfolio Section */}

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

        {/* Skills Section */}

        <div id="skillsContainer">
          <div id="skills">
            <div className="textCenterContainer">
              <h1>Skills: </h1>
            </div>

            <div id="languagesContainer">
              <div id="languagesLearned">
                <h3>Skills that i learned</h3>
                <div className="languagesImgContainer">
                  <div className="tooltip">
                    <img
                      alt="python"
                      src="https://img.icons8.com/color/480/000000/python.png"
                    />
                    <span className="tooltipText"> Python </span>
                  </div>

                  <div className="tooltip">
                    <img
                      alt="react"
                      src="https://img.icons8.com/color/480/000000/react-native.png"
                    />
                    <span className="tooltipText"> React </span>
                  </div>

                  <div className="tooltip">
                    <img
                      alt="node"
                      src="https://img.icons8.com/color/480/000000/nodejs.png"
                    />
                    <span className="tooltipText"> Node </span>
                  </div>
                  <div className="tooltip">
                    <img
                      alt="mongoDB"
                      src="https://img.icons8.com/color/480/000000/mongodb.png"
                    />
                    <span className="tooltipText"> Mongo </span>
                  </div>
                </div>
              </div>
              <div id="languagesWorked">
                <h3>Skills that i used in work</h3>
                <div className="languagesImgContainer" style={{marginTop: '3%'}}>
                  <div className="tooltip">
                    <img
                      alt="angular"
                      src="https://img.icons8.com/color/480/000000/angularjs.png"
                    />
                    <span className="tooltipText"> Angular </span>
                  </div>

                  <div className="tooltip">
                    <img
                      alt="vue"
                      src="https://img.icons8.com/color/480/000000/vue-js.png"
                    />
                    <span className="tooltipText"> Vue </span>
                  </div>

                  <div className="tooltip">
                    <img
                      alt="jquery"
                      src="https://img.icons8.com/ios-filled/500/000000/jquery.png"
                    />
                    <span className="tooltipText"> Jquery </span>
                  </div>

                  <div className="tooltip">
                    <img
                      alt="springBoot"
                      src="https://img.icons8.com/color/480/000000/spring-logo.png"
                    />
                    <span className="tooltipText"> Spring </span>
                  </div>

                  <div className="tooltip">
                    <img
                      alt="mySQL"
                      src="https://img.icons8.com/ios-filled/500/000000/mysql-logo.png"
                    />
                    <span className="tooltipText"> MySql</span>
                  </div>

                  <div className="tooltip">
                    <img
                      alt="java"
                      src="https://img.icons8.com/color/480/000000/java-coffee-cup-logo.png"
                    />
                    <span className="tooltipText"> Java </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recomendations Container */}

        <div id="recomendationContainer">
            <div id="recomendation">
                <div className="textCenterContainer" style={{background: '#dbe9ee', color:'#4f6d7a'}}>
                    <h1>Recomendations : </h1>
                </div>
                <div id="boxContainer">
                    <div className="box">
                        <p> I can assure that he is a person of integrity, serious, responsible, committed and suitable for any activity entrusted to him. In addition, he always showed a willingness to carry out both her tasks and help her colleagues.
                            For the above, I have no problem recommending his services to anyone who may be interested in his application.</p>
                
                    <h4> Pablo Sutter <br/> <span> Manager </span></h4>
                    </div>
                    <div className="box">
                        
                    <p> It has been a pleasure to be able to share this time with you, not only because you are a great partner but because you have a very high learning capacity, paying attention to everything you did and exceeding expectations. I hope we will work together again soon! </p>
                    <h4> Miriam Jové <br/> <span> Corporate culture </span></h4>
                    </div>
                    <div className="box">
                        
                        <p>Miguel Ángel is a person who is 100% dedicated to the work entrusted to him. He is very respectful, knows how to work in a team and has the necessary knowledge to grow even more as a programmer. If, for whatever reason, he does not know the reason for something, he does his best to investigate it and get the job done. I would definitely have him on my team.</p>
                    <h4> Eduardo Orihuela <br/> <span> Full stack developer </span></h4>
                    </div>
                </div>
             </div>
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

        <div id="cv" >
          <a href={cv}>
            CV <i className="fas fa-file-download"></i>{' '}
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
