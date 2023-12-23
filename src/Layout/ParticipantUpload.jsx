import React from "react";
import { Form } from "react-bootstrap";
import { Formik, Field } from "formik";
import UploadComponent from "./UploadComponent";
const ParticipantUpload = () => {
  return (
    <Formik
      initialValues={{ name: null }}
      validateOnChange={false}
      validateOnBlur={false}>
      {({ handleChange, setFieldValue, handleSubmit, values, ...rest }) => {
        return (
          <Form
            autoComplete="off"
            onSubmit={handleSubmit}
            className="d-flex flex-column">
            <label style={{ margin: "8px" }}>Name</label>
            <Field
              className="col-md-5"
              name="name"
              label="Name"
              value={values["name"]}
              autoComplete="Off"
              style={{
                border: "1px solid #c1c1c1",
                height: "40px",
                borderRadius: "5px",
                margin: "8px",
              }}
            />
            <label style={{ margin: "8px" }}>Type</label>
            <Field
              className="col-md-5"
              name="type"
              label="Type"
              value={values["type"]}
              autoComplete="Off"
              style={{
                border: "1px solid #c1c1c1",
                height: "40px",
                borderRadius: "5px",
                margin: "8px",
              }}
            />
            <label style={{ margin: "8px" }}>Upload file</label>
            <Field
              name="upload"
              label="Name"
              value={values["upload"]}
              component={UploadComponent}
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default ParticipantUpload;
