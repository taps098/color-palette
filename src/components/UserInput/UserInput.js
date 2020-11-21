import React from 'react';
import './UserInput.css';
import { Input, Button} from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

class UserInput extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
      // loader: false,
    }
  }

  render() {
    return(
      <div className='formContainer'>
        <Input size='large' className='inputField' type="text"
               onChange = {(e) =>this.props.changedInput(e)}
               placeholder = 'Nature'
               value = {this.props.inputValue}/>
        <button
          // ghost = {true}
          className='buttons'
          style={{marginRight: '10px'}}
          onClick = {this.props.GetClick}
          disabled={this.props.loader}
        >
          {this.props.loader ? 'Loading': 'Get'}
        </button>
        <button
          className='buttons'
          style={{background:'#bdc3c7',borderColor: '#7f8c8d'}}
          onClick = {this.props.clear}
        >
          Clear
        </button>

      </div>
    );
  }
}
export default UserInput;