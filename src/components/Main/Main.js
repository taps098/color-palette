import React from 'react';
import UserInput from "../UserInput/UserInput";
import HeaderLayout from "../HeaderLayout/HeaderLayout";
import ColorPalette from "../ColorPalette/ColorPalette";
import './Main.css';
import {connect} from 'react-redux';
import {show_color, clear_color} from "../../ActionCreator/ActionCreator";
import { createClient } from 'pexels';
// import { Popover, Button } from 'antd';

const client = createClient('563492ad6f917000010000011d709952003c4cd891a74e239dcdf07d');

// const text = <span>Please enter a valid word, example :-</span>;
// const content = (
//   <div>
//     <p>Dog</p>
//     <p>Cat</p>
//   </div>
// );

class Main extends React.Component{
  constructor(props){
    super(props);
      this.state={
        inputWord: '',
        imgUrl : '',
        loader:false,
        paletteLoading: true,
      }
  }

  changeHandler=(e)=>{
    // console.log('input Text is :', e.target.value)
      this.setState({
        inputWord: e.target.value,
      })
  }
  getClickHandler=(e)=>{
    e.preventDefault();
    this.setState({loader:true},()=>{
      const query = this.state.inputWord;
      if(query !== ''){
        // console.log('get button is clicked');
        client.photos.search({ query, per_page: 1 }).then(photos => {
          let new_state;
          let imgUrl = photos.photos[0].src.original;
          if(imgUrl == this.state.imgUrl){
            new_state = {loader: false};
          } else {
            new_state = {imgUrl: imgUrl}
          }
          this.setState(new_state);
        });
      }
    })
  }
  setLoaderFalse=()=>{
    this.setState({
      loader: false,
    })
  }

  clearHandler=()=>{
    console.log('clear handler clicked!!')
    this.setState({
      inputWord: '',
      paletteLoading : false,
    });
  }


  render(){
    // debugger;
    return(
      <div>
        <div classNmae='headerInput'>
          <HeaderLayout/>
        </div>

        <div className='userInput'>
          <UserInput
            changedInput={this.changeHandler}
            inputValue={this.state.inputWord}
            GetClick = {this.getClickHandler}
            loader={this.state.loader}
            clear = {this.clearHandler}
          />
        </div>
        {this.state.paletteLoading ?
        <div className='colorPalette'>
            <ColorPalette
              imgUrl = {this.state.imgUrl}
              setLoaderFalse={this.setLoaderFalse}
              paletteLoading = {this.state.paletteLoading}
            />
        </div> : null}

      </div>
    );
  }
}

const mapStateToProps=(state)=>({
  colorsPalette : state.Palette.paletteArray,
});

const mapDispatchToProps=(dispatch)=>({
  getColors : () => dispatch(show_color()),
})

export default connect(mapStateToProps, null)(Main);
