import './App.scss';
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import Header from "./components/Header/Header";
import Assistant from "./components/Assistant/Assistant";

function App() {
  return (
    <div className="App">
      <NavigationMenu/>
        <Header/>
        <Assistant/>
    </div>
  );
}

export default App;
