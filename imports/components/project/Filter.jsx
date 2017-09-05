import React, { Component } from 'react';

export default class Filter extends Component{

  render(){
    return(
      <div className="w3.container w3-cell-filter">
          <h2 className="header2">Filter Projects</h2>
          <div className="eachFilter">
              <form action="#" method="POST">
                  <h3>Academy Year</h3><hr />
                  <input type="checkbox" name="academicYear" value="Year 1" />Year 1<br/>
                  <input type="checkbox" name="academicYear" value="Year 2" />Year 2<br/>
                  <input type="checkbox" name="academicYear" value="Year 3" />Year 3<br/>
                  <input type="checkbox" name="academicYear" value="Year 4" />Year 4<br/>
              </form>
          </div>
          <div className="eachFilter">
              <form action="#" method="POST">
                  <h3>Faculty</h3><hr />
                  <input type="checkbox" name="faculty" value="AminationsArt" />Aminations Art<br/>
                  <input type="checkbox" name="faculty" value="FinancialInformatics" />Financial Informatics<br/>
                  <input type="checkbox" name="faculty" value="GameDesign" />Game Design<br/>
                  <input type="checkbox" name="faculty" value="InformationTechnology" />Information Technology<br/>
              </form>
          </div>
      </div>
    );
  }
}
