const api={
  key: '9b14e2c5e8080a7ad16dc865ca7314d4',
  base: 'https://api.openweathermap.org/data/2.5/'
}
function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input 
          type = "text"
          className = "search-bar"
          placeholder = "Search..."
          />
        </div>
      </main>
    </div>
  );
}

export default App;
