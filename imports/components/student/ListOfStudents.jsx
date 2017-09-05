import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Request from 'react-http-request';
import LinesEllipsis from 'react-lines-ellipsis';

function searchingFor(term){
    return function(x){
        return x.course_name.includes(term) || !term;
    }
}

export default class ListOfStudents extends Component{
    constructor(props) {
      super(props);

      this.state = {
          allStudents: [],
          student_id: '',
          term: '',
      };

      this.searchHandler = this.searchHandler.bind(this);

    }

    searchHandler(event){
        this.setState({ term: event.target.value })
    }

    async componentDidMount(){
        proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        /*apiURL = 'http://54.191.109.239/FYPXpal/GetStudentInfo';*/
        apiURL = 'http://54.191.109.239/xPalBackend_FYPXpal/GetStudentDisplay';
        options = {
            method: 'GET',
        };

      try{
          /*var response = await fetch(proxyUrl + apiURL, options);*/
          var response = await fetch(proxyUrl + apiURL, options);

          // response message
          var data = await response.json();

          var status = response.status;

          if (status == 200){
          // response code
          var allStudents = data.student_display_info;
          console.log(allStudents);

          this.setState({
            allStudents: allStudents,
          });
          }else{
              //Handle other than success
          }
      }catch(error){
          alert(error);
      }
    }

  render(){
      const {term, allStudents} = this.state;

      var filter = {
          textAlign: 'center',
      }

      var eachButton = {
          borderTop: 'solid 1px #000',
          borderBottom: 'solid 1px #000',
          borderRight: 'none',
          borderLeft: 'none',
          textColor: '#000',
          backgroundColor: '#fff',
          padding: '5px 13px',
      }

      var paddingButton = {
          padding: '1%',
          display: 'inline',
      }

    return(
      <div>
          <div style={filter}>
              <form>
                  <div style={paddingButton}>
                      <button type="button" onClick={this.searchHandler} class="focus" value="" style={eachButton}>All</button>
                  </div>
                  <div style={paddingButton}>
                      <button type="button" onClick={this.searchHandler} class="focus" value="Diploma in Animation & 3D Arts" style={eachButton}>Diploma in Animation & 3D Arts</button>
                  </div>
                  <div style={paddingButton}>
                      <button type="button" onClick={this.searchHandler} class="focus" value="Diploma in Financial Informatics" style={eachButton}>Diploma in Financial Informatics</button>
                  </div>
                  <div style={paddingButton}>
                      <button type="button" onClick={this.searchHandler} class="focus" value="Diploma in Game Design" style={eachButton}>Diploma in Game Design</button>
                  </div>
                  <div style={paddingButton}>
                      <button type="button" onClick={this.searchHandler} class="focus" value="Diploma in Inforamtion Technology" style={eachButton}>Diploma in Inforamtion Technology</button>
                  </div>
                  <div style={paddingButton}>
                      <button type="button" onClick={this.searchHandler} class="focus" value="Arts Business Management" style={eachButton}>Arts Business Management</button>
                  </div>
              </form>
          </div>

          <div className="w3-cell-content">
              <div className="w3-row w3-border">
                  {allStudents.filter(searchingFor(term)).map((displayAllStudents, index) => {
                      var studentID = displayAllStudents.student_id;

                      return(
                          <div className="w3-quarter w3-container" key={index}>

                              <Link to ={{
                                  //pathname: '/ViewStudent',
                                  pathname: '/ViewStudent/' + displayAllStudents.student_id,
                                  //state: { StudentID: displayAllStudents.student_id }
                              }}>
                                  <div className="backgroundImage">
                                      <div className="centerImage">
                                          {displayAllStudents.student_photo == "" || displayAllStudents.student_photo == "null" || displayAllStudents.student_photo == null ?
                                              <img src="../img/user.png" alt={displayAllStudents.student_name} className="imageStyle" />
                                          :
                                          <img src={displayAllStudents.student_photo} alt={displayAllStudents.student_name} className="imageStyle" />
                                          }
                                      </div>
                                  </div>
                                  <p className="projHead" id="change">{ displayAllStudents.student_name }</p>

                                  <p>{displayAllStudents.course_id} - {displayAllStudents.course_name}</p>

                                  <LinesEllipsis
                                      text={ displayAllStudents.student_desc }
                                      maxLine='3'
                                      ellipsis='...'
                                      trimRight
                                      basedOn='letters'
                                  />
                              </Link>
                          </div>
                      )
                  })

                  }
              </div>
          </div>

          <div className="clearfix"></div>
      </div>
    );
  }
}

ListOfStudents.propTypes = {
    name: PropTypes.string.isRequired,
    studentDesc: PropTypes.string,
    courseName: PropTypes.string,
    email: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
    personalProfile: PropTypes.string.isRequired,
    twitter: PropTypes.string.isRequired,
    git: PropTypes.string.isRequired,
    projects: PropTypes.array.isRequired,
    studentSkills: PropTypes.array.isRequired,
    hobbies: PropTypes.string.isRequired,
    eduLvl: PropTypes.array.isRequired,
    workExp: PropTypes.array.isRequired,
    cert: PropTypes.array.isRequired,
    cca: PropTypes.array.isRequired,
    achievements: PropTypes.array.isRequired,
};
