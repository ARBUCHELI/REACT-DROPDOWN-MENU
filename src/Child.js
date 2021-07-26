import React from 'react';

export class Child extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }

  render() {
    return (
      <div>
        <h1 style={{fontFamily: 'impact', color: '#3b7dd8', fontSize: '3em'}}>
          Hello my name is {this.props.name}!
        </h1>
        <select style={{fontSize: '1.5em', fontFamily: 'impact'}} id="great-names" onChange={this.handleChange}>
          <option value="Andres R. Bucheli">
            Andres R. Bucheli
          </option>

          <option value="Shraga Isaac Bucheli">
            Shraga Isaac Bucheli
          </option>

          <option value="E. Elias Bucheli">
            E. Elias Bucheli
          </option>
        </select>
      </div>
    );
  }
}