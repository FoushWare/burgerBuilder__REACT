import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label:'Meat',type:'meat'},
    {label:'Bacon',type:'bacon'},
    {label:'Salad',type:'salad'},
    {label:'Cheese',type:'cheese'},
];
const buildControls = (props) => (
  <div className={classes.BuildControls}>
    {
      controls.map(ctrl => (
        <BuildControl
          label={ctrl.label}
          key={ctrl.label}
          added={()=>props.ingredientAdded(ctrl.type)}
          removed={()=>props.ingredientRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
          >
        
        </BuildControl>
      ))
    }
  
  </div>

);
export default buildControls;