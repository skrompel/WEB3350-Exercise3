import { useState } from "react";
import HobbyForm from "./components/HobbyForm";
import HobbyList from "./components/HobbyList";
import Card from "./components/Card";
import "./styles/App.css";

function App() {
  const [hobbies, setHobbies] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const addHobbyHandler = (hobby) => {
    setHobbies((prevHobbies) => [hobby, ...prevHobbies]);
    setIsFormVisible(false);
  };

  return (
    <div className="app">
      <Card>
        <h1>My Hobbies</h1>
        {!isFormVisible && (
          <button onClick={() => setIsFormVisible(true)}>Add Hobby</button>
        )}
        {isFormVisible && (
          <HobbyForm
            onAddHobby={addHobbyHandler}
            onCancel={() => setIsFormVisible(false)}
          />
        )}
      </Card>
      <Card>
        <HobbyList hobbies={hobbies} />
      </Card>
    </div>
  );
}

export default App;
