import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Layout from "./Layout/Layout";
import Participation from "./Layout/Participant";
import { Container, Col } from "react-bootstrap";
import { FaUpload } from "react-icons/fa";
import core from "./core.svg";

function App() {
  return (
    <BrowserRouter>
      <Container
        fluid
        className="d-flex flex-wrap"
        style={{ paddingTop: "2px" }}>
        <Col md={1}>
          <img src={core} alt={"logo"} style={{ margin: "10px" }} />
          <ul style={{ margin: "1px", padding: "1px", listStyleType: "none" }}>
            <Link to="/file-upload">
              <li
                className="d-flex flex-column flex-wrap align-items-center"
                style={{
                  border: "1px solid #004dcb",
                  margin: "10px",
                  marginTop: "40px",
                  paddingBottom: "10px",
                  borderRadius: "5px",
                  backgroundColor: "#004dcb",
                  textDecoration: "none",
                  boxShadow: "3px 0 4px rgba(0,0,0,.15)",
                }}>
                <FaUpload style={{ margin: "10px", color: "white" }} />
                <div style={{ color: "white" }}>File Upload</div>
              </li>
            </Link>
          </ul>
        </Col>
        <Col md={11}>
          <Routes>
            <Route path="/file-upload/*" element={<Layout />}></Route>
            <Route
              path="/participant-analysis"
              element={<Participation />}></Route>
            <Route index element={<Navigate to="/file-upload" replace />} />
          </Routes>
        </Col>
      </Container>
    </BrowserRouter>
  );
}

export default App;
