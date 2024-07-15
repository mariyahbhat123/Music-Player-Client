import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function PlayerCard(props) {
  const songsId = props.songsId;
  const name = props.name;
  const singer = props.singer;
  const image = props.image;

  return (
    <div>
      <Link
        to="/PlayMusic"
        state={{
          songsId: songsId,
        }}
      >
        <Card
          className="mt-5 mb-5"
          border="light"
          style={{
            width: "17rem",
            // backgroundColor: "#3A3B3C",
            backgroundColor: "#332D2D",
            color: "white",
            border: "1px solid white",
          }}
        >
          <Card.Body>
            <Card.Img
              src={`http://localhost:5000/images/${image}`}
              style={{ width: "80%" }}
            ></Card.Img>
            {/* <audio controls>
                  <source
                    src={`http://localhost:5000/audios/${item.song}`}
                    type="audio/mpeg"
                  />
                </audio> */}

            <Card.Title
              className="mt-3"
              style={{
                fontFamily: "initial",
                fontWeight: "bold",
                fontSize: "15px",
              }}
            >
              {name}
            </Card.Title>
            <Card.Text style={{ fontFamily: "initial", fontSize: "12px" }}>
              {singer}
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}
