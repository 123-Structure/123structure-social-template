import React from "react";
import "../App.css";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = ({theme}) => {
  return (
    <div className="loading">
      <CircularProgress sx={{mr:"16px"}}/>

      <h1>Chargement ...</h1>
    </div>
  );
};

export default Loading;
