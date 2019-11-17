This is a sample project created with best practice react implementations. 

This project includes some ot he following implementations

<h4>AUX (Auxiliary) Component</h4>
Auxiliary element is something that does not have semantic purpose but exist for the purpose of grouping elements, styling, etc. We make use of the AUX component to combine multiple components in one. 

<h2>Generic Reusable Components</h2>

<h4>Button</h4>
This project includes a generic reusable button component with different inputs to color change and more.

<h4>props.children</h4>
We use props.children on components that represent 'generic boxes' and that 'don't know their children ahead of time'. It is used to display whatever you include between the opening and closing tags when <b>invoking</b> a component. The power of props.children is that it can be anything! 


<h2>How to setup Styling</h2>

Syling can be setup in multiple ways.

1. Run the following command: "npm run eject" 
2. ...

<h2> React Logic </h2>

<h4>If statement to render content </h4>

<h5> Can be found here </h5>
src --> containers --> Employees --> Employees.js

To render content with if statement we do it like this in the DOM.
{ this.state.showContent === true ? 
  <div
    <p im visible </p
  div> : null
 } 
 
 Make the state handle the boolean for if we show content or not. 
 
 <h3> OR </h3>
 We can also create our own variable + if statement in the general render() {} method and then check the state with if statement and then use the variable to display our content. 
 
 <h4>Display iteration of array</h4>
 <h5>Can be found here </h5>
 src --> containers --> Employees --> Employees.js
