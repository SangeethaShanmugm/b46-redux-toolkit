import logo from "./logo.svg";
import "./App.css";
import Expenditure from "./components/Expenditure";
import ExpenditureList from "./components/ExpenditureList";

function App() {
  return (
    <div className="App">
      <h4>List Expenditure</h4>
      <Expenditure />
      <ExpenditureList />
    </div>
  );
}

export default App;
