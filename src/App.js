import logo from "./logo.svg";
import "./App.css";
import TodoItem from "./components/TodoItem";
import TodoContainer from "./components/TodoContainer";
import Header from "./components/Header";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <TodoContainer />
    </div>
  );
}

export default App;
