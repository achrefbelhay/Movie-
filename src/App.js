import "./App.css";

import { useState } from "react";

import AddMovie from "./AddMovie/AddMovie";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Card from "./Card";
import Trailer from "./Trailer";
import Home from "./Home";

function App() {
  const [movie, setMovie] = useState([
    {
      id: 1,
      image:
        "https://i.egycdn.com/pic/WmFwZndlY21tbUVtcG1tRXZ0Y0VjbXZtVGptanh4eEs.jpg",
      rating: 3,
      name: "Venom: Let There Be Carnage",
      date: "2021",
      type: "Action|adventure|science fiction",
      description:
        "Après avoir choisi le journaliste d'enquête Eddie Brock comme hôte, le symbiote extraterrestre Venom doit affronter un nouvel ennemi du nom de Carnage, qui se trouve à être l'alter ego du tueur en série Cletus Kasady.",
      trailerURL: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/-FmWuCgJmxo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      id: 2,
      image:
        "https://i.egycdn.com/pic/WmFwZndlY21tbUV2Y21qbWptVHZFY21ieHdUdm1URW1qUA.jpg",
      rating: 4,
      name: "The Wonderful: Stories from the Space Station",
      date: "2021",
      type: "Documentary",
      description:
        "Astronauts recount their experiences aboard the International Space Station",
      trailerURL: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/6J6pzE_JfmE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      id: 3,
      image: "https://mediacdn.aent-m.com/prod-img/1000/46/3999446-2734308.jpg",
      name: "Last Man Down",
      rating: 2,
      date: "2021",
      type: "Action",
      description:
        "Watch Last Man Down 2021 Full Movie After civilization succumbs to a deadly epidemic and kills his wife, a Special Forces soldier abandons his duty and becomes a hermit in the wilderness of the North. ",
      trailerURL: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/7tjtYgEvtTY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
    },
  ]);
  const [movieSearch, setMovieSearch] = useState("");

  return (
    <Router>
      <div>
        <Route exact path="/">
          <Home
            movie={movie}
            setMovie={setMovie}
            setMovieSearch={setMovieSearch}
            movieSearch={movieSearch}
          />
        </Route>
        <Route path="/profile/:movieId">
          <Trailer movie={movie} />
        </Route>
      </div>
    </Router>
  );
}

export default App;
