import React, { useState, useEffect, useMemo } from "react";
import PlayerNavbar from "../Components/PlayerNavbar";
import PlayerCard from "../Components/PlayerCard";
import "../Styles/LandingPage.css";
import PlayerFooter from "../Components/PlayerFooter";
import Row from "react-bootstrap/Row";

export default function LandingPage() {
  const [songData, setSongData] = useState([]);
  console.log(songData);

  const handleShowMusic = async () => {
    try {
      let response = await fetch("http://localhost:5000/api/addedMusic", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await response.json();
      setSongData(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleShowMusic();
  }, []);

  const [searchResult, setSearchResult] = useState("");

  const searchFilter = useMemo(() => {
    if (!searchResult) {
      return songData;
    }
    return songData.filter(
      (item) => {
        return (
          // !searchSinger ? true : item.singer.toLowerCase().includes(searchSinger.toLowerCase()) &&
          //   !searchSongName?true: item.name.toLowerCase().includes(searchSongName.toLowerCase())

          !searchResult
            ? true
            : item.singer.toLowerCase().includes(searchResult.toLowerCase()) ||
                item.name.toLowerCase().includes(searchResult.toLowerCase())
        );
      },
      [searchResult]
    );
  });

  return (
    <div className="landingPageContainer">
      <div>
        <PlayerNavbar
          searchFilter={searchFilter}
          setSearchResult={setSearchResult}
        />
      </div>
      <div className="landingPageBody">
        <div
          className="landingPageCard"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Row xs={1} md={4} className="w-100">
            {searchFilter.map((item) => {
              return (
                <>
                  <PlayerCard
                    songsId={item._id}
                    name={item.name}
                    singer={item.singer}
                    image={item.image}
                  />
                </>
              );
            })}
          </Row>
        </div>
      </div>
      <div className="landingPageFooter">
        <PlayerFooter />
      </div>
    </div>
  );
}
