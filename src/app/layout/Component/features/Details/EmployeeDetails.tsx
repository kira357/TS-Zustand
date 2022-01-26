import React from "react";
import { Card } from "antd";
import useStore from "../../../../storeZustand/storeState";
import LoadingComponent from "../../loadingComponent";

const { Meta } = Card;

const EmployeeDetails = () => {
  const {openForm , selectedEmployee1:employee ,cancelSelectedEmployee ,loadingInit} = useStore()
  
  if(!employee ) return <LoadingComponent inverted={loadingInit} />;;
  return (
    <Card
      hoverable
      style={{
        marginBottom: "10px",
        width: "100%",
      }}
      cover={
        <img
          style={{ width: "100%" }}
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <Meta
        title={`${employee.firstName} ${employee.lastName}`}
        description={employee.email}
        style={{ marginBottom: "10px" }}
      />
      <div className="card-bottom" style={{ display: "flex" }}>
        <button
          className="btn bg-success w-75 text-white"
          key={employee.employeeId}
          style={{ marginRight: "5px" }}
          onClick={() => openForm(employee.employeeId)}
        >
          Edit
        </button>
        <button
          className="btn bg-danger w-75 text-white "
          onClick={cancelSelectedEmployee}
        >
          delete
        </button>
      </div>
    </Card>
  );
};
export default EmployeeDetails;
