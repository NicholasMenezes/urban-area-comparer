import { Card, Form, Table } from "react-bootstrap";
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
        {selectedUrbanArea ? (
          <div>
            <Table striped bordered hover style={{ marginTop: "1rem" }}>
              <tbody>
                <tr>
                  <td>Full Name</td>
                  <td>{selectedUrbanArea["full_name"]}</td>
                </tr>
                <tr>
                  <td>Continent</td>
                  <td>{selectedUrbanArea["continent"]}</td>
                </tr>
                <tr>
                  <td>Mayor</td>
                  <td>{selectedUrbanArea["mayor"]}</td>
                </tr>
                <tr>
                  <td>Eastern Boundery</td>
                  <td>{selectedUrbanArea["bounding_box"]["latlon"]["east"]}</td>
                </tr>
                <tr>
                  <td>Western Boundery</td>
                  <td>{selectedUrbanArea["bounding_box"]["latlon"]["west"]}</td>
                </tr>
                <tr>
                  <td>Southern Boundery</td>
                  <td>
                    {selectedUrbanArea["bounding_box"]["latlon"]["south"]}
                  </td>
                </tr>
                <tr>
                  <td>Northern Boundery</td>
                  <td>
                    {selectedUrbanArea["bounding_box"]["latlon"]["north"]}
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        ) : null}
      </Card.Body>
    </Card>
  );
}

export default UrbanAreaCard;
