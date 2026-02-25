import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header";
import Footer  from "./MyComponents/Footer";
import Todos  from "./MyComponents/Todos";
import TodoItem  from "./MyComponents/TodoItem";

function App() {
  
  return (
    <>
      <Header title="My Todos List" searchBar={true}/>
      <Todos/>
      <Footer/>
    </>
  );
}
export default App;
