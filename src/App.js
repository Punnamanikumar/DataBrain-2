import "./App.css";
import AllComponents from "./Components/AllComponents";
import { CategoryProvider } from "./Components/Context/ContextApi";

function App() {
  return (
    <div className="App">
      <CategoryProvider>
        <span className="mediaqury">
          <AllComponents />
        </span>
        <div className="mediaqury1">
          For Better Experience Please View in Desktop Mode
        </div>
      </CategoryProvider>
    </div>
  );
}

export default App;
