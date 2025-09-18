import "../styles/HobbyList.css";

function HobbyList({ hobbies }) {
  return (
    <ul className="hobby-list">
      {hobbies.length === 0 && <p>No hobbies added yet.</p>}
      {hobbies.map((hobby) => (
        <li key={hobby.id}>
          <strong>{hobby.name}</strong> - {hobby.description}
        </li>
      ))}
    </ul>
  );
}

export default HobbyList;
