import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="data:image/png;base64,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"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Margaret Mwangi</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p> Currently am a student at Moringa School .I have passion for coding willing to learn more in the programming world and ready for collaborations</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>1594 -2 0100 </p>
            <h5>Phone</h5>
            <p>(254) 713352806</p>
            <h5>Email</h5>
            <p>margaret13mwangi@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2020} 
              endYear={ 2020}
              schoolName="Moringa School"
              schoolDescription="A worldclass technical school"
               />


              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="Django"
                    progress={60}
                    />
                    <Skills
                    skill="Flask"
                    progress={50}

                    />
                    <Skills
                    skill="Angular"
                    progress={50}

                    />

                    <Skills
                      skill="React"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;