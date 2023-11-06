import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function PlayersPresentation() {
  const { id } = useParams();
  const [film, setFilm] = useState(null);

  // Gọi API để lấy dữ liệu dựa trên id
  useEffect(() => {
    fetch(`https://6545916cfe036a2fa9546dff.mockapi.io/lab/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFilm(data);
      })
      .catch((error) => {
        console.error('Lỗi khi lấy dữ liệu từ API:', error);
      });
  }, [id]);

  const handleDeleteFilm = () => {
    if (film) {
      // Gửi yêu cầu xóa tới API bằng phương thức DELETE
      fetch(`https://6545916cfe036a2fa9546dff.mockapi.io/lab/${film.id}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.status === 200) {
            console.log("Phim đã được xóa thành công!");
            alert("Xóa thành công");
            // Thực hiện các hành động khác sau khi xóa phim thành công
          } else {
            console.error("Lỗi khi xóa phim");
          }
        })
        .catch((error) => {
          console.error("Lỗi khi gửi yêu cầu xóa:", error);
        });
    }
  };

  if (!film) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container detail">
      <Card sx={{ maxWidth: 1100 }}>
        <CardMedia>
          <iframe
            width="100%"
            height="600"
            src={film.video}
            title="Video Player"
            allowFullScreen
          />
        </CardMedia>

        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {film.title}
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
              <Button variant="contained" color="success" onClick={handleDeleteFilm}>
                Delete
              </Button>
            </div>
            <Link to={`/edit/${id}`}>Edit</Link>

          </div>

          <Typography variant="body2" color="text.secondary">
            {film.detail}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
        </CardActions>
      </Card>
    </div>
  );
}
