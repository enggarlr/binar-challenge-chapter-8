import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  CreatePlayer,
  EditPlayer,
  FindPlayer,
  LandingPage
} from "./pages/index";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create-player" element={<CreatePlayer />} />
          <Route path="/edit-player" element={<EditPlayer />} />
          <Route path="/find-player" element={<FindPlayer />} />
        </Routes>
      </>
    )
  } 
}

export default App;
