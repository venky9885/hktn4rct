import React, { useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import { FaCheckCircle, FaUpload } from "react-icons/fa";
import CircularProgressBar from "./CircularProgressBar";

const UploadComponent = () => {
  const fileInputRef = useRef(null);
  const [File, setFileName] = useState(null);
  const [size, setSize] = useState(0);
  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      console.log("Selected File:", selectedFile);
      setFileName(selectedFile?.name);
      setSize(selectedFile?.size / 1024);
    }
  };

  return (
    <div className="align-items-center">
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
        accept=".jpg, .jpeg, .png, .docx, .pdf"
      />
      <Col
        md={5}
        style={{
          border: "1px solid #c1c1c1",
          textAlign: File == null && "center",
          padding: "1.25em",
          cursor: "pointer",
          margin: "8px",
        }}
        onClick={File == null ? handleClick : null}>
        {File == null ? (
          <>
            <FaUpload style={{ margin: "2px" }} />
            <p style={{ margin: "0px" }}>Drap & drop here</p>
            <p style={{ margin: "0px" }}>or</p>
            <p style={{ margin: "0px", color: "#004dcb" }}>Browse file</p>
          </>
        ) : (
          <Row>
            <Col md={8}>
              <p style={{ margin: "5px", fontWeight: "500" }}>
                {File}{" "}
                <Trash
                  style={{
                    color: "red",
                    width: "20px",
                    height: "20px",
                    marginLeft: "20px",
                  }}
                  onClick={() => {
                    setFileName(null);
                    setSize(0);
                  }}
                />
              </p>
              <p style={{ margin: "5px" }}>
                {parseFloat(size).toFixed(2)} bytes
                <span style={{ marginLeft: "20px", marginRight: "20px" }}>
                  |
                </span>
                <span style={{ color: "#004dcb" }} onClick={handleClick}>
                  Reupload
                </span>
              </p>
              <p style={{ margin: "5px", color: "green" }}>
                <FaCheckCircle style={{ marginRight: "2px" }} />
                Successfully Uploaded
              </p>
            </Col>
            <Col>
              <CircularProgressBar percentage={80} width={80} />
              <p style={{ margin: "5px" }}>Matched %</p>
            </Col>
          </Row>
        )}
      </Col>
    </div>
  );
};

export default UploadComponent;
