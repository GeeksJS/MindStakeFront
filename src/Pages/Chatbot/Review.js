import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import { Link } from 'react-router-dom';
import { ThemeProvider } from "styled-components";

const theme = {
  background: "#f5f8fb",
  fontFamily: "Helvetica",
  headerBgColor: "#00796B",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#e1ffc7",
  botFontColor: "#000",
  userBubbleColor: "#fff",
  userFontColor: "#000"
};
class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      gender: '',
      age: '',
    };
  }



  componentWillMount() {
    const { steps } = this.props;
    const { name, gender, age } = steps;

    this.setState({ name, gender, age });
  }

  render() {
    const { name, gender, age } = this.state;
    return (

      <div style={{ width: '100%' }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{gender.value}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{age.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

//const color='#6E48AA';

class SimpleForm extends Component {
  render() {
    return (
      <div >
        <Link to="/" class="rsc-header-close-button sc-jTzLTM kMqZix"><svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg></Link>
        <ThemeProvider theme={theme}>
          <ChatBot
            
            steps={[
              {
                id: '1',
                message: 'What is your name?',
                trigger: 'name',
              },
              {
                id: 'name',
                user: true,
                trigger: '3',
              },
              {
                id: '3',
                message: 'Hi {previousValue}! What is your gender?',
                trigger: 'gender',
              },
              {
                id: 'gender',
                options: [
                  { value: 'male', label: 'Male', trigger: '5' },
                  { value: 'female', label: 'Female', trigger: '5' },
                ],
              },
              {
                id: '5',
                message: 'How old are you?',
                trigger: 'age',
              },
              {
                id: 'age',
                user: true,
                trigger: '7',
                validator: (value) => {
                  if (isNaN(value)) {
                    return 'value must be a number';
                  } else if (value < 0) {
                    return 'value must be positive';
                  } else if (value > 120) {
                    return `${value}? Come on!`;
                  }

                  return true;
                },
              },
              {
                id: '7',
                message: 'Great! Check out your summary',
                trigger: 'review',
              },
              {
                id: 'review',
                component: <Review />,
                asMessage: true,
                trigger: 'update',
              },
              {
                id: 'update',
                message: 'Would you like to update some field?',
                trigger: 'update-question',
              },
              {
                id: 'update-question',
                options: [
                  { value: 'yes', label: 'Yes', trigger: 'update-yes' },
                  { value: 'no', label: 'No', trigger: 'end-message' },
                ],
              },
              {
                id: 'update-yes',
                message: 'What field would you like to update?',
                trigger: 'update-fields',
              },
              {
                id: 'update-fields',
                options: [
                  { value: 'name', label: 'Name', trigger: 'update-name' },
                  { value: 'gender', label: 'Gender', trigger: 'update-gender' },
                  { value: 'age', label: 'Age', trigger: 'update-age' },
                ],
              },
              {
                id: 'update-name',
                update: 'name',
                trigger: '7',
              },
              {
                id: 'update-gender',
                update: 'gender',
                trigger: '7',
              },
              {
                id: 'update-age',
                update: 'age',
                trigger: '7',
              },
              {
                id: 'end-message',
                message: 'Thanks! Your data was submitted successfully!',
                end: true,
              },
            ]}
          />
        </ThemeProvider>
      </div>
    );
  }
}

export default SimpleForm;