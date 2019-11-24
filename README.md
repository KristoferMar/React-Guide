This is a sample project created with best practice react implementations. 

This project includes some ot he following implementations

<h4>AUX (Auxiliary) Component</h4>
Auxiliary element is something that does not have semantic purpose but exist for the purpose of grouping elements, styling, etc. We make use of the AUX component to combine multiple components in one. 

<h2>Generic Reusable Components / Inspiration</h2>

<h4>Button</h4>
This project includes a generic reusable button component with different inputs to color change and more.

<h4>REST API - GET, POST, DELETE requests using axios</h4>
React-Guide --> src --> containers --> BurgerBuilder

<h4>Creation of Forms with validation and more </h4>
React-Guide --> src --> containers --> Checkout

<h4>Errorhandler modal</h4>
React-Guide --> Src --> hoc --> withErrorHandler

<h4>props.children</h4>
We use props.children on components that represent 'generic boxes' and that 'don't know their children ahead of time'. It is used to display whatever you include between the opening and closing tags when <b>invoking</b> a component. The power of props.children is that it can be anything! 

<h4>React routing</h4>
Install: 
"npm install --save react-router-dom"

React-Guide --> src -> index.js   : This is the BrowserRouter which controls the everything that includes routing.
React-Guide --> src -> app.js     : This is the Switch that controles the different routes
React-Guide --> src --> components --> Navigation --> NaviationItems --> NavigationItem -> NavigationItem.js    : Example where we make use of NavLink for routing.



<h2> React Logic </h2>

<h4>If statement to render content </h4>

<h4> Can be found here </h4>
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
 
 <h4>Display iteration of array (foreach loop in JSX)</h4>
 <h5>Can be found here </h5>
 src --> containers --> Employees --> Employees.js

<h2> React info </h2>
- super(props) refers to the parent class constructur which means that we are able to make use of the parant class states in our components.


<h2>Implementation of REDUX</h2>
We install redux into our project with 
"npm install --save redux react-redux"

The store:
React-Guide --> src --> store

We make redux usable for the redux extension by adding the vollowing variable in the creatioStore() method:
<br>
"window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()"
<br>
more info can be found here
https://github.com/zalmoxisus/redux-devtools-extension

<h2>How to setup Styling</h2>

Syling can be setup in multiple ways.

1. Run the following command: "npm run eject" 
2. ...
