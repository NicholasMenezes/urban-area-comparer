import { Container, Card } from "react-bootstrap";

function App() {
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
        <Card style={{ width: "20rem", flexGrow: "1" }}>
          <Card.Body>
            <Card.Title>Urban Area 1</Card.Title>
            <Card.Text>Urban Area Data Points</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "20rem", flexGrow: "1" }}>
          <Card.Body>
            <Card.Title>Urban Area 2</Card.Title>
            <Card.Text>Urban Area Data Points</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default App;
