1. Where does React put all of the elements I create in JSX when I 
   call `root.render()`?
React puts the rendered element into the DOM element that you passed to createRoot().

2. What would show up in my console if I were to run this line of code:
```
console.log(<h1>Hello world!</h1>)
```
It logs a React element object. JSX doesn't immediately create the actual DOM element; it creates an object that describes what React should render. 

3. What's wrong with this code:
```
root.render(
    <h1>Hi there</h1>
    <p>This is my website!</p>
)
```
root.render() needs a single root React element. Since <h1> and <p> are siblings, we need to wrap them in a parent element such as <div> or React Fragment.

4. What does it mean for something to be "declarative" instead of "imperative"?
Declarative programing means describing what the UI should look like, while React hanles the steps required to make the DOM match the description.

5. What does it mean for something to be "composable"?

Composable means you build a larger UI by combining samller, reusable pieces together.