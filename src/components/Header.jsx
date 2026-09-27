import reactLogo from "../assets/react.svg";

export function Header() {
  return (
    <header className="header">
      <img src={reactLogo} className="img-size" alt="React logo" />
      <nav>
        ReactFacts
      </nav>
    </header>
  );
}
