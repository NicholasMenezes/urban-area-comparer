import { Card, Form } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { GetUrbanAreaBySlug } from "./teleport-api";

function UrbanAreaCard(props) {
  const [selectedUrbanArea, setSelectedUrbanArea] = useState(undefined);

  const selectedUrbanAreaOnChange = async event => {
    const value = event.target.value;
    const slug = value
      .replace("https://api.teleport.org/api/urban_areas/slug:", "")
      .replace("/", "");
    setSelectedUrbanArea(await GetUrbanAreaBySlug(slug));
  };

  return (
    <Card style={{ width: "20rem", flexGrow: "1" }}>
      <Card.Body>
        <Form.Select onChange={selectedUrbanAreaOnChange}>
          <option>Select an Urban Area</option>
          {props.urbanAreas.map(u => (
            <option value={u.href}>{u.name}</option>
          ))}
        </Form.Select>
      </Card.Body>
    </Card>
  );
}

export default UrbanAreaCard;
