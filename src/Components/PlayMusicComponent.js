import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardBody from "react-bootstrap/esm/CardBody";
import CardHeader from "react-bootstrap/esm/CardHeader";
import PlayerNavbar from "./PlayerNavbar";
export default function PlayMusicComponent() {
  const [playSong, setPlaySong] = useState([]);
  let { state } = useLocation();
  console.log(state.songsId);
  const id = state.songsId;

  const handlePlayMusic = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/playMusic/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const res = await response.json();
      if (!res) {
        console.log("ERROR");
      } else {
        setPlaySong([res]);
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    handlePlayMusic();
  }, []);
  console.log(playSong);
  return (
    <div>
      <div>
        <PlayerNavbar />
      </div>
      <div>
        {playSong.map((item) => {
          return (
            <>
              <Card style={{ backgroundColor: "#111111", borderRadius: "0%" }}>
                <CardBody>
                  <CardHeader>
                    <Card.Img
                      src={`http://localhost:5000/images/${item.image}`}
                      style={{ width: "40%" }}
                    ></Card.Img>
                  </CardHeader>
                  <CardBody>
                    <audio controls style={{ width: "30%" }} className="mt-3">
                      <source
                        src={`http://localhost:5000/audios/${item.song}`}
                        type="audio/mpeg"
                      />
                    </audio>
                  </CardBody>
                </CardBody>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
}
