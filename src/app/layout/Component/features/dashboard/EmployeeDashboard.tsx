import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import { Employee } from "../../../../models/employee";
import EmployeeList from "./EmployeeList";
import EmployeeDetails from "../Details/EmployeeDetails";
import EmployeeForm from "../Form/EmployeeForm";
import LoadingComponent from "../../loadingComponent";
import useStore from "../../../../storeZustand/storeState"

const EmployeeDashboard = () => {
  const {openForm , selectedEmployee1 ,editEmployee,
        loadingInit} = useStore()
  
  if (loadingInit) return <LoadingComponent inverted={loadingInit} />;
  return (
    <main className="py-5 text-left container ">
        <Row>
        <Col span={13}>
      <div style={{ textAlign: "right" , marginRight:"25px"}}>
        <Button
          type="primary"
          className="btn btn-success"
          onClick={() => openForm()}
        >
          Create
        </Button>
      </div>
      </Col>

        <Col span={13} style={{ marginRight: "10px" }}>
          <EmployeeList/>
        </Col>
        <Col span={8}>
          {selectedEmployee1 && !editEmployee && (
            <EmployeeDetails
            />
          )}
          {editEmployee && (
            <EmployeeForm/>
          )}
        </Col>
      </Row>
    </main>
  );
};
export default EmployeeDashboard;
