import { Card, Form } from "react-bootstrap";
import React, { useState, useEffect } from "react";

function UrbanAreaCard(props) {
  return (
    <Card style={{ width: "20rem", flexGrow: "1" }}>
      <Card.Body>
        <Form.Select>
          <option>Select an Urban Area</option>
          {props.urbanAreas.map(u => (
            <option>{u.name}</option>
          ))}
        </Form.Select>
      </Card.Body>
    </Card>
  );
}

export default UrbanAreaCard;
