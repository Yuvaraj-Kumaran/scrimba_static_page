1. What is a React component?

A React component is a reusable peice of UI, usually defined by as a Javascript function that returns JSX.

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
The component name starts with lower letter case. React component names must start with an uppercase letter so that React can distinguish components from other HTML elements. So it should be MyComponent().

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <img src="./react-logo.png" width="40px" alt="React logo" />
        </header>
    )
}

root.render(Header())
```

Header() calls the components as a normal function. Components should be rendered using JSX, so it should be root.render(<Header/>)
