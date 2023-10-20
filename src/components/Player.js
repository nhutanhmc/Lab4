import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";


export default function PlayersPresentation({ players }) {
  const [player, setPlayer] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const hidePopup = () => {
    setShowPopup(false);
    if (!showPopup) window.location.href = "/#";
  };

  const hidePopup1 = () => {
    setShowPopup(false);
    
  };

  return (
    <div onClick={hidePopup} className="container player">
      <div className="row row-content">
        {players.map((player) => (
          <div className="col col-sm-3 col-md-3" key={player.id}>
            <div className="card">
              <img 
              width="305"
              height="250"
              src={player.img} />
              <h1>{player.id}</h1>
              <h2 className="title">{player.title}</h2>
              <h3>{player.nation}</h3>
              <h3>{player.year}</h3>
              <p>
                <button
                  onClick={() => {
                    setPlayer(player);
                    setShowPopup(true);
                  }}
                  className="btn btn-dark btn-lg btn-block"
                >
                  <a href="#popup" id="openPopup">
                    Detail
                  </a>
                </button>
              </p>
              <Box sx={{ "& button": { m: 1 } }}></Box>
            </div>
          </div>
        ))}

        <div id="popup" className="overlay">
          <div className="popup">
            <iframe
              width="555"
              height="300"
              src={player.video} // Đường link YouTube nằm trong trường video của đối tượng player
              frameBorder="0"
              allowFullScreen
              title="Video Player"
            ></iframe>
            <h3>Nội dung: {player.detail}</h3>
            <h3>Thời gian: {player.time}</h3>
            <a className="close" href="#close" onClick={hidePopup}>
              &times;
            </a>
            {/* player.info should be defined in your film objects */}
            <div className="content">{player.info}</div>
          </div>
        </div>

        <div id="popup2" className="overlay">
          <div className="popup">
            <h2>Thêm phim mới</h2>

            <form class="row g-3">
              <div class="col-md-6">
                <label for="inputTitle" class="form-label">
                  Title:
                </label>
                <input type="text" class="form-control" id="inputTitle" />
              </div>
              <div class="col-md-6">
                <label for="inputYear" class="form-label">
                  Năm phát hành:
                </label>
                <input type="text" class="form-control" id="inputYear" />
              </div>
              <div class="col-12">
                <label for="inputND" class="form-label">
                  Nội dung:
                </label>
                <input type="text" class="form-control" id="inputND" />
              </div>
              <div class="col-12">
                <label for="inputImg" class="form-label">
                  Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  class="form-control"
                  id="inputImg"
                />
              </div>
              <div class="col-md-6">
                <label for="inputTime" class="form-label">
                  Thời lượng:
                </label>
                <input type="text" class="form-control" id="inputTime" />
              </div>

              <div class="col-md-2">
                <label for="inputCountry" class="form-label">
                  Quốc gia:
                </label>
                <input type="text" class="form-control" id="inputCountry" />
              </div>
              <div class="col-12">
                <label for="inputLink" class="form-label">
                  Link Video:
                </label>
                <input type="text" class="form-control" id="inputLink" />
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-primary" id="create">
                  Create
                </button>
              </div>
            </form>
            <a className="close" href="#close" onClick={hidePopup1}>
              &times;
            </a>
            {/* player.info should be defined in your film objects */}
          </div>
        </div>
      </div>
    </div>
  );
}