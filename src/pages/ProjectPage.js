import React, { Component } from 'react';
import '../App.css';
import MenuBar from '../components/MenuBar';
import PhaseProgress from '../components/PhaseProgress';
import ActionButton from '../components/ActionButton';
import { Input } from '@material-ui/core';
import ActionForm from '../components/ActionForm';


const actionsPerPhase = [
  ['Get support', 'Distribute flyers', 'Involve playground Mgt', 'Decision = smoke-free'],
  ['Set a date', 'Share decision', 'Make itr visible', 'Party !'],
  ['Check'],
]


class ProjectPage extends Component {
  state = {
    activePhase: 0,
    activeAction: 0,
    actions: actionsPerPhase[0],
    actionDialogOpen: false,
  };

  onPhaseSelect = newPhaseIdx => {
     this.setState({activePhase: newPhaseIdx, actions: actionsPerPhase[newPhaseIdx]});
  }

  onActionClick = (number) => {
    this.setState({activeAction: number-1, actionDialogOpen: true});
  }

  onActionClose = () => {
    this.setState({actionDialogOpen: false});
  }
  
  getActionTitle = () => actionsPerPhase[this.state.activePhase][this.state.activeAction];

  render() {
    return (
      <div className="App">
        <MenuBar/>
        <PhaseProgress onPhaseSelect={this.onPhaseSelect}/>
        <table>
          <tr><td align='left'>
            {
              this.state.actions.map((label, idx) => (<div><ActionButton number={idx+1} text={label} onClick={this.onActionClick}/><br/></div>))
            }
          </td>
          <td>
            <textarea rows="10" cols="50">
              Welcome all. Let's get this playground smoke-free!
            </textarea>
            <br/>
          <Input
            placeholder="Say something"
            // className={classes.input}
            inputProps={{
              'aria-label': 'Description',
            }}
          />


          </td></tr>
        </table>
      <ActionForm open={this.state.actionDialogOpen} onClose={this.onActionClose} title={this.getActionTitle()}/>

      </div>
    );
  }
} 

export default ProjectPage;
