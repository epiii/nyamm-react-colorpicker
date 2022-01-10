import React, { Component } from "react";
import "./index.css";
const classNames = require('classnames');

export default class ColorPicker extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: ''
    }
  }

  onSelectColor = (clr) => {
    this.setState({
      color: clr
    })
  }

  render() {
    let selectedColor;

    console.log(this.props.colorPickerOptions);
    console.log(this.props.initialSelectedColor);
    console.log(selectedColor);
    console.log(this.state.color)

    return (
      <div>
        <div className="layout-row justify-content-center">
          <div className="card mt-75">
            <div className="canvas" style={{ backgroundColor: this.state.color }} data-testid="selectedColor">
              <p className="text-center mx-auto px-5">{this.state.color}</p>
              {/* <p className="text-center mx-auto px-5">{selectedColor}</p> */}
            </div>
            <div className="card-actions">
              <div className="layout-row justify-content-center align-items-center" data-testid="colorPickerOptions">
                {this.props.colorPickerOptions.map((color, index) => {
                  return (
                    <div
                      style={{
                        fontSize: 10,
                        color: 'white',
                        backgroundColor: color
                      }}
                      className={
                        classNames({
                          'color-box': true,
                          'mx-8': true,
                          'my-15': true,
                          'selected': selectedColor === color,
                          'background-color': color
                        })
                      }
                      key={color}
                      onClick={() => this.onSelectColor(color)}
                    >
                      {color}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
