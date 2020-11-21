import React from 'react';
import ColorThief from 'colorthief';
import './ColorPalette.css';
import {rgbToHex,invertColor} from "../Helpers/Helpers";

class ColorPalette extends React.Component{
  constructor(props) {
    super(props);
    this.imgRef=React.createRef();
    this.state = {
      palettes : [],
      colorClicked : false,
    }
  }

  getPallet=(e)=>{
    //debugger;
    // console.log("Onload image")

      const colorThief = new ColorThief();
      const pallets = colorThief.getPalette(this.imgRef.current, 20);
      // console.log("Pallets : ", pallets);
      this.setState({
        palettes: pallets,
      },()=>{
        this.props.setLoaderFalse()
      })
  }
  showColors = ()=>{
    console.log('show color clicked');
    this.setState({
      colorClicked : true,
    })
  }
  render() {
    const image = this.props.imgUrl;
    console.log("Image is loading");
    return(
      <div>
        <div>
          <img
            onLoad={this.getPallet}
            style={{height: '200px', width: '200px', display: 'none'}}
            crossOrigin="anonymous"
            src={image} alt="Image"
            ref = {this.imgRef}
          />
        </div>
        <div className="pallets">
          {this.state.palettes.map((item) => {
            // console.log('item---: ',item);
            const color = rgbToHex(...item);
            return (
              <div
                // className="pallet" style={{ background: color , color: invertColor(color , color)}}
                className={'pallet ' + (this.state.colorClicked ? 'animation': '' )} style={{ background: color , color: invertColor(color , color)}}
                onClick = {this.showColors}
              >
                {color}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPalette;