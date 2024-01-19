import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import axiosInstance from '../utils/axiosInstance'

const HomePage = () => {
  let [notes, setNotes] = useState([]);
  let { authTokens, logoutUser } = useContext(AuthContext);

  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async () => {
    let response = await axiosInstance.get('/api/notes/')
    
    if (response.status === 200) {
      setNotes(response.data);
    } 
  };

  return (
    <div>
      <p>You are logged to the home page!</p>

      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
