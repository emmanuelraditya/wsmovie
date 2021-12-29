
import './App.css';
import MovieList from './components/MovieList';
import SearchAppBar from './components/Navbar';

function App() {
  return (
    <div className="App">
   <SearchAppBar />
   <MovieList />
    </div>
  );
}

export default App;
