// import { useState } from 'react'
// import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'

// import { createRoot } from "react-dom/client"
// const root = createRoot(document.getElementById("root"))

/**
 * Challenge:
 * 
 * - Add a `nav` > `ul` > `li` (x3). The 3 items should say:
 *   "Pricing", "About", and "Contact"
 */

export function Header() {
    return (
        <header className='header'>
            <img src={reactLogo} className='img-size' alt="React logo" />
            <nav>
                <ul className='nav-list'>
                    <li className='nav-list-item'>Pricing</li>
                    <li className='nav-list-item'>About</li>
                    <li className='nav-list-item'>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function MainContent() {
    return (
        <main>
            <h1>Reason I am excited to learn React</h1>
            <ol>
                <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
                <li>I am more likely to get a job as a front end developer if I know React</li>
            </ol>
        </main>
    )
}

export function Footer() {
    return (
        <footer>
            <small>© 2024 Ziroll development. All rights reserved.</small>
        </footer>
    )
}
 function App() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}

// root.render(
//     <Page />
// )


export default App
