import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Filmlist from "../shared/ListOfFilms";

export default function PlayersPresentation({ players }) {
  const { id } = useParams();

  const film = Filmlist.find((obj) => {
    return obj.id == id;
  });
  //  gan link youtube
  const [video, setVideo] = useState(film.src);

  //tat mo popup
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenPopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container detail">
      <Card sx={{ maxWidth: 1100 }}>
        <CardMedia>
          <iframe
            width="100%"
            height="600"
            src={film.video} // Đường link YouTube hoặc đường link đến video khác
            title="Video Player"
            allowFullScreen
          />
        </CardMedia>

        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {film.tilte}
          </Typography>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="card-detail" style={{ marginRight: "10px" }}>
              <Typography variant="h5" color="text.secondary">
                publish year: {film.year}
              </Typography>
              <Typography variant="h5" color="text.secondary">
                nation: {film.nation}
              </Typography>
              <Typography variant="h5" color="text.secondary">
                Gía: {film.cost}
              </Typography>
              <Typography variant="h5" color="text.secondary">
                Thời gian: {film.time}
              </Typography>
            </div>
            <div>
              <Button variant="contained" color="success">
                Success
              </Button>
            </div>
          </div>

          <Typography variant="body2" color="text.secondary">
            {film.info}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button
            size="small"
            onClick={() => {
              setVideo(video);
              setIsOpen(true);
            }}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
