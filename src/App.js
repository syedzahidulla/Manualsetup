import React from 'react';
import FirstComponent from './firstcomponent'
import styless from './Apps.module.css';
class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name:''
        }
    }
    handleButtonClickEvent=(event)=>{
        this.setState( { name:'SyedZahidulla' } )
    }
 render() {
  return(
   <div>
    <h1 className={styless.bigblue}>My App Component</h1>
    <ul>
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
    </ul>
    <button onClick={this.handleButtonClickEvent}>Click Me</button>
  { this.state.name && <p>{this.state.name}</p>}
  <FirstComponent displaytext="First Component Data"/>
   </div>
  );
 }
 
}
export default App