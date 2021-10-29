import "./App.css";

import { useState } from "react";
import Movieliste from "./Movieliste";
import SearchMovie from "./SearchMovie/SearchMovie";
import AddMovie from "./AddMovie/AddMovie";

function App() {
  const [movie, setMovie] = useState([
    {
      id: Math.random(),
      image:
        "https://i.egycdn.com/pic/WmFwZndlY21tbUVtcG1tRXZ0Y0VjbXZtVGptanh4eEs.jpg",
      rating: 3,
      name: "Venom: Let There Be Carnage",
      date: "2021",
      type: "Action|adventure|science fiction",
      description:
        "Après avoir choisi le journaliste d'enquête Eddie Brock comme hôte, le symbiote extraterrestre Venom doit affronter un nouvel ennemi du nom de Carnage, qui se trouve à être l'alter ego du tueur en série Cletus Kasady.",
    },
    {
      id: Math.random(),
      image:
        "https://i.egycdn.com/pic/WmFwZndlY21tbUV2Y21qbWptVHZFY21ieHdUdm1URW1qUA.jpg",
      rating: 4,
      name: "The Wonderful: Stories from the Space Station",
      date: "2021",
      type: "Documentary",
      description:
        "Astronauts recount their experiences aboard the International Space Station",
    },
    {
      id: Math.random(),
      image: "https://mediacdn.aent-m.com/prod-img/1000/46/3999446-2734308.jpg",
      name: "Last Man Down",
      rating: 2,
      date: "2021",
      type: "Action",
      description:
        "Watch Last Man Down 2021 Full Movie After civilization succumbs to a deadly epidemic and kills his wife, a Special Forces soldier abandons his duty and becomes a hermit in the wilderness of the North. ",
    },
  ]);
  const [movieSearch, setMovieSearch] = useState("");
  const addMovie = (e, newMovie) => {
    e.preventDefault();
    setMovie([...movie, newMovie]);
  };
  return (
    <div>
      <AddMovie addMovie={addMovie} />
      <SearchMovie setMovieSearch={setMovieSearch} />
      <Movieliste movie={movie} movieSearch={movieSearch} />
    </div>
  );
}

export default App;
