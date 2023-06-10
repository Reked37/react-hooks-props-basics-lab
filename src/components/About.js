import React from "react";
import user from "../data/user";

// function Addbio({bio}){
//   return(<p>{bio}</p>)
// }

// function Nobio(){
//   return null
// }

// function Bio({bio}){
//   if(isThereABio){
//     return <Addbio />
//   }
//   else{
//     return <Nobio />
//   }
// }

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio === undefined || props.bio === ""?null:<p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* <a href={props.github}>https://github.com/liza</a>
      <a href={props.linkedin}>https://www.linkedin.com/in/liza/</a> */}
    </div>
  );
}

export default About;
