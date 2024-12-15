import { useState } from "react";

export function Player({ name, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function renderPlayerName() {
    const handleChange = (event) => {
      setPlayerName(event.target.value);
    }
    return isEditing ? (
        <input 
          type="text" 
          required 
          value={playerName} 
          onChange={handleChange} 
        />
      ) : (
        <span className="player-name">{playerName}</span>
      )
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {renderPlayerName()}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => setIsEditing((editing => !editing))}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  )
}