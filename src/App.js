import { Container } from "react-bootstrap";
import { GetUrbanAreas } from "./teleport-api";
import React, { useState, useEffect } from "react";
import UrbanAreaCard from "./UrbanAreaCard";

function App() {
  const [urbanAreas, setUrbanAreas] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setUrbanAreas(await GetUrbanAreas());
    };
    getData();
  }, []);

  return (
    <div className="App">
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "20px",
          maxWidth: "60rem",
          marginTop: "2em"
        }}
      >
        <UrbanAreaCard urbanAreas={urbanAreas} />
        <UrbanAreaCard urbanAreas={urbanAreas} />
      </Container>
    </div>
  );
}

export default App;
