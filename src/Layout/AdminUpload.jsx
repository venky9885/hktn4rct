import React from "react";
import GenericProgressBar from "./GenericProgressBar";
import { Col, Row } from "react-bootstrap";
import CircularProgressBar from "./CircularProgressBar";
import { FaFileWord } from "react-icons/fa";
const AdminUpload = () => {
  return (
    <div style={{ padding: "2px" }}>
      <p style={{ fontWeight: 500 }}>Name</p>
      <p>Sathya Sucharitha</p>
      <p style={{ fontWeight: 500 }}>Type</p>
      <p>Withdrawal</p>
      <p style={{ fontWeight: 500 }}>Uploaded Document</p>
      <Row
        style={{
          border: "1px solid #c1c1c1",
          margin: "2px",
          borderRadius: "10px",
          padding: "5px",
        }}>
        <p style={{ fontWeight: 500, textAlign: "center", fontSize: "18px" }}>
          <FaFileWord
            style={{
              color: "#007bff",
              margin: "10px",
              width: "32px",
              height: "32px",
            }}
          />
          <span style={{ color: "#007bff" }}>File.png</span>
          <span style={{ margin: "50px" }}>|</span> 2.45 bytes
        </p>
        <Col md={9}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}>
            <Col md={2} style={{ marginRight: "10px" }}>
              Signature Check
            </Col>
            <GenericProgressBar percentage={"80%"} color={"#B8860B"} />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}>
            <Col md={2} style={{ marginRight: "10px" }}>
              Match words
            </Col>
            <GenericProgressBar percentage={"40%"} color={"orange"} />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}>
            <Col md={2} style={{ marginRight: "10px" }}>
              Related Doc
            </Col>
            <GenericProgressBar percentage={"60%"} color={"#004cbd"} />
          </div>
        </Col>
        <Col>
          <CircularProgressBar percentage={80} width={100} />
          <p style={{ textAlign: "center" }}>Matched %</p>
        </Col>
      </Row>
    </div>
  );
};

export default AdminUpload;
