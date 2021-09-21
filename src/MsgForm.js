import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MsgForm extends Component {
  state = {
    message: { username: this.props.username, text: '' }
  };
  
  handleChange = event => {
    const { value } = event.target;
    this.setState(prevState => ({
      message: { username: this.props.username, text: value }
    }));
  };
  
  handleSubmit = event => {
    event.preventDefault();

    this.props.sendHandler(this.state.message);
    
    this.setState(prevState => ({
      message: { username: this.props.username, text: '' }
    }));
  }
  
  isDisabled = () => {
    const {text} = this.state.message;
    return text === '';
  };
  
  render() {
    return (
      <div>
        <form className="input-group" onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            name="text" 
            className="form-control" 
            placeholder="Enter your message..." 
            value={this.state.message.text}
            onChange={this.handleChange}
          />
          <div className="input-group-append">
            <button className="btn submit-button" disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
        </form>
      </div>
	);
  }
}

MsgForm.propTypes = {
  username: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired,
  sendHandler: PropTypes.func.isRequired,
};

export default MsgForm;