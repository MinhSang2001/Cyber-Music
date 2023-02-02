import React, { useState } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import DetailSongs from "./components/DetailSongs";
import ListSongs from "./components/ListSongs";
import Playing from "./components/Playing"
import { Songs } from "./Context";
import DataSongs from "./data/songs.json"

function App() {
  const [ song, setSong ] = useState(DataSongs[0])
  
  const handleSetSong = (idSong) => {
    const song = DataSongs.find(song => song.id === idSong)
    if(!song) 
      setSong(DataSongs[0])
    else 
      setSong(song)
  }
  return (
    <div className="App">
       <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
       <Navbar/>
       <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
        <DetailSongs/>
        <ListSongs/>
       </div>
       <Playing/>
       </Songs.Provider>
    </div>
  );
}

export default App;
