import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    const { score, name, doScore, description } = this.props;
    const disabled = score != undefined;
    
    return (

      //"RuleRow RuleRow-active"
      <tr className={!disabled ? "RuleRow RuleRow-active" : "RuleRow-disabled"}
        onClick={this.props.doScore} >
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{!disabled ? description : score}</td>
      </tr>
    )
  }
}

export default RuleRow;