import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';

import NavigationApp from '../components/NavigationApp.jsx';
import EachFaculty from '../components/faculty/eachFaculty.jsx';
import Footer from '../components/Footer.jsx';

/*Analytics*/
import ReactGA from 'react-ga';

export const initGA = () => {
  console.log('GA init');
  ReactGA.initialize('UA-101967047-1');
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname});
  ReactGA.pageview(window.location.pathname);
}
/*Analytics*/

export default class AllStudents extends Component{
  constructor(props) {
    super(props);

    this.state = {
        infoSecurityPosters: ['./img/Project1.jpg', './img/Project1.jpg', './img/Project1.jpg'],
        infoSecurityNames: ['Info Security Underneath', 'Info Security Underneath', 'Info Security Underneath'],
        infoSecurityDesc: ['Info Security Description', 'Info Security Description', 'Info Security Description'],
        infoSecurity: "Information Security",
        animationArtPosters: ['./img/Project1.jpg', './img/Project1.jpg', './img/Project1.jpg'],
        animationArtNames: ['Animation Art Underneath', 'Animation Art Underneath', 'Animation Art Underneath'],
        animationArtDesc: ['Animation Art Description', 'Animation Art Description', 'Animation Art Description'],
        animationArt: "Animation Art",
        financialInfoPosters: ['./img/Project1.jpg', './img/Project1.jpg', './img/Project1.jpg'],
        financialInfoNames: ['Financial Information Underneath', 'Financial Information Underneath', 'Financial Information Underneath'],
        financialInfoDesc: ['Financial Information Description', 'Financial Information Description', 'Financial Information Description'],
        financialInfo: "Financial Informatics",
        infoTechPosters: ['./img/Project1.jpg', './img/Project1.jpg', './img/Project1.jpg'],
        infoTechNames: ['Info Tech Underneath', 'Info Tech Underneath', 'Info Tech Underneath'],
        infoTechDesc: ['Info Tech Description', 'Info Tech Description', 'Info Tech Description'],
        infoTech: "Information Technology",
        gameDesignPosters: ['./img/Project1.jpg', './img/Project1.jpg', './img/Project1.jpg'],
        gameDesignNames: ['Game Design Underneath', 'Game Design Underneath', 'Game Design Underneath'],
        gameDesignDesc: ['Game Design Description', 'Game Design Description', 'Game Design Description'],
        gameDesign: "Immersive Media & Game Design",
    };
  }

  componentDidMount(){
      initGA();
      logPageView();
  }

  render() {

    return (
      <div>
          <NavigationApp />
          <div className="container">
              <EachFaculty
                  projectPoster={this.state.infoSecurityPosters}
                  projectName={this.state.infoSecurityNames}
                  projectDesc={this.state.infoSecurityDesc}
                  projectTitle={this.state.infoSecurity}
              />
              <EachFaculty
                  projectPoster={this.state.animationArtPosters}
                  projectName={this.state.animationArtNames}
                  projectDesc={this.state.animationArtDesc}
                  projectTitle={this.state.animationArt}
              />
              <EachFaculty
                  projectPoster={this.state.financialInfoPosters}
                  projectName={this.state.financialInfoNames}
                  projectDesc={this.state.financialInfoDesc}
                  projectTitle={this.state.financialInfo}
              />
              <EachFaculty
                  projectPoster={this.state.infoTechPosters}
                  projectName={this.state.infoTechNames}
                  projectDesc={this.state.infoTechDesc}
                  projectTitle={this.state.infoTech}
              />
              <EachFaculty
                  projectPoster={this.state.gameDesignPosters}
                  projectName={this.state.gameDesignNames}
                  projectDesc={this.state.gameDesignDesc}
                  projectTitle={this.state.gameDesign}
              />
          </div>
          <Footer />
      </div>
    );
  }
}
