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
To render content with if statement we do it like this in the DOM with out the ' sign 
{ this.state.showContent === true ? 
  <div'>
    <p'> im visible </p'>
  </div'> : null
 } 
