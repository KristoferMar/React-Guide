This is a sample project created with best practice react implementations. 

This project includes some ot he following implementations

<h4>AUX (Auxiliary) Component</h4>
Auxiliary element is something that does not have semantic purpose but exist for the purpose of grouping elements, styling, etc. We make use of the AUX component to combine multiple components in one. 

this can also be done with "React.Fragment" which essensially does the same.

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

We install redux thunk in the following way to be able to make use of middleware.
"npm install --save redux-thunk"

The store:
React-Guide --> src --> store

We make redux usable for the redux extension by adding the vollowing variable in the creatioStore() method:
<br>
"window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()"
<br>
more info can be found here
https://github.com/zalmoxisus/redux-devtools-extension

<h3>Redux Saga</h3>
Redux saga helps us run side effect actions in our "redux actions"
Install with: 
"npm install --save redux-saga

The sagas can be found here

src --> store --> sagas

Description:
- Side effects are made into SAGA's. It leads to leaner action creators. Side effects are stuff like HTTP requests and so on.


<h2>How to setup Styling</h2>

Syling can be setup in multiple ways.

1. Run the following command: "npm run eject" 
2. ...

- You are able to create dynamic styling by adding styles to a javascript constant and add eg 'red' to an array which is loaded into HTML elements. (section 5 nr. 67 - Udemy)



<h2>React animations</h2>

Animations are done in the CSS files. It's not necessarily "react" animations but general CSS class animations & Transitions.

We can do animations with
- Transition
- transform: translateY(0)
- animation (using @keyframes)
- @keyframes 


<h2>How to setup test for React apps</h2>
First install 

"npm install --save enzyme react-test-renderer enzyme-adapter-react-16"

Example on test can be found with the following path: 
<b>src --> components --> Navigation --> NavigationItems --> NavigationItems.test.js</b>

<b>functions</b>
"describe":    Allows us to idetify what kind if test we are running.
"it":          describes and allows us to run one individual test. 
"expect":      is used to test values.
"beforeEach":  Executes some code before all testcases.
"afterEach":   Executes some code after all testcases.

<b>Documentation</b>
jest: https://jestjs.io/docs/en/getting-started

shallow/enzyme: https://airbnb.io/enzyme/docs/api/



<h2>Deployment Steps</h2>

1. Check (& adjust) basepath to fx '<'BrowserRouter basename ="/map-app/"> 
2. build & Optimize Project : "npm run build in create-react-app project
3. Server must ALWAYS serve index.html (also for 404 cases). : (to ensure that Routing works correctly) 
4. Upload Build Artifacts to (static) Server. : In /build folder when using create-react-app