import React from "react";
import axios from "axios";
import Playlist from "./components/Playlist";



export default class App extends React.Component{
  render(){
    return(
      <div>
        <Playlist/>
      </div>
    )
  }
}
