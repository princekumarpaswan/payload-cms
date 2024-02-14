import React, { useContext } from "react";
import Abouts from "./Abouts";
import DashboadContext from "../context";

const About = () => {
  const data = useContext(DashboadContext);

  return (
    <div>
      About Pages
      <Abouts />
      <h1>{data}</h1>
    </div>
  );
};

export default About;
