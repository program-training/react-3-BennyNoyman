import "./App.css";
import { Example } from "./components/Example/Example";
import UsersFromServer from "./components/UsersFromServer/UsersFromServer";


function App() {
  return (
    <>
      <Example />{" "}
        <UsersFromServer/>
    </>
  );
}

export default App;
