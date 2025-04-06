import "./App.css";

// JSX tags - think like HTML tags to wrap content
function Header() {
  return (
    <header>
      <h1>Eve's Kitchen</h1>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>We serve the most delicious food</h2>
      </main>
    </div>
  );
}

export default App;
