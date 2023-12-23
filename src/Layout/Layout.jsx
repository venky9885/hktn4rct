import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";
import ParticipantUpload from "./ParticipantUpload";
import AdminUpload from "./AdminUpload";
import Logo from "./company-logo.png";
import { FaDiamond } from "react-icons/fa6";
const Layout = () => {
  let navigate = useNavigate();
  let location = useLocation().pathname.split("/");
  return (
    <div style={{ marginLeft: "20px" }}>
      <Row style={{ height: "8vh" }}>
        <div style={{ padding: "0px", boxShadow: "3px 0 4px rgba(0,0,0,.15)" }}>
          <img src={Logo} alt={Logo} />
        </div>
      </Row>
      <Row style={{ height: "91vh" }}>
        <Col md={3} style={{ backgroundColor: "#f7f7f7", padding: "0px" }}>
          <ul
            className="d-flex flex-column flex-wrap "
            style={{ padding: "0px" }}>
            <li
              className="d-flex flex-wrap align-items-center"
              style={{
                cursor: "pointer",
                marginTop: "20px",
                padding: "10px",
                marginTop: "20px",
                backgroundColor: location.includes("admin")
                  ? "rgba(48,123,246,.1)"
                  : "#f7f7f7",
                fontweight: 500,
                color: location.includes("admin") ? "#004dcb" : "black",
              }}
              onClick={() => {
                navigate("/file-upload/admin");
              }}>
              <FaDiamond style={{ marginRight: "18px" }} />
              Admin
            </li>
            <li
              className="d-flex flex-wrap align-items-center"
              style={{
                cursor: "pointer",
                padding: "10px",
                marginTop: "20px",
                backgroundColor: location.includes("participant")
                  ? "rgba(48,123,246,.1)"
                  : "#f7f7f7",
                color: location.includes("participant") ? "#004dcb" : "black",
              }}
              onClick={() => {
                navigate("/file-upload/participant");
              }}>
              <FaDiamond style={{ marginRight: "18px" }} />
              Participant
            </li>
          </ul>
        </Col>
        <Col>
          <Row className="justify-content-end">
            {(location.includes("participant") ||
              location.includes("admin")) && (
              <Button
                className="col-md-1"
                style={{
                  height: "40px",
                  fontWeight: "500",
                  color: "white",
                  backgroundColor: "004dcb !important",
                  textAlign: "center",
                  boxShadow:
                    "inset 0 1px 0 hsla(0,0%,100%,.15), 0 1px 1px rgba(0,0,0,.075) !important",
                  margin: "16px",
                  position: "relative",
                  right: "0%",
                }}>
                {location.includes("participant")
                  ? "Submit"
                  : location.includes("admin") && "Approve"}
              </Button>
            )}
            <hr style={{ border: "1px solid #c1c1c1" }} />
          </Row>
          <Routes>
            <Route path="admin" Component={AdminUpload}></Route>
            <Route path="participant" Component={ParticipantUpload}></Route>
          </Routes>
        </Col>
      </Row>
    </div>
  );
};

export default Layout;
