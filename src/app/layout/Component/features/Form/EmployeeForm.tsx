import React, { ChangeEvent, useState } from "react";
import { Form, Input, Button, Checkbox, Card } from "antd";
import { Employee } from "../../../../models/employee";
import useStore from "../../../../storeZustand/storeState";

const EmployeeForm = () => {
  const {
    closeForm,
    selectedEmployee1,
    checkSelectedEmployee,
    createEmployee,
    updateEmployee,
    loading,
  } = useStore();

  const initialState = selectedEmployee1 ?? {
    employeeId: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };
  const [employee, setEmployee] = useState(initialState);

  const handleSubmit = () => {
    employee.employeeId ? updateEmployee(employee) : createEmployee(employee);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEmployee({ ...employee, [name]: value });
  };
  return (
    <Card style={{ width: "100%", textAlign: "left" }}>
      <Form
        name="create"
        labelCol={{ flex: "110px" }}
        labelAlign="left"
        wrapperCol={{ flex: 1 }}
        colon={false}
        onSubmitCapture={() => handleSubmit()}
        autoComplete="off"
      >
        <Form.Item
          label="email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
          valuePropName="employee"
        >
          <Input
            value={employee.email}
            name="email"
            onChange={handleInputChange}
          />
        </Form.Item>

        <Form.Item
          label="lastName"
          name="lastName"
          rules={[{ required: true, message: "Please input your lastName!" }]}
          valuePropName="employee"
        >
          <Input
            name="lastName"
            value={employee.lastName}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item
          label="firstName"
          name="firstName"
          rules={[{ required: true, message: "Please input your firstName!" }]}
          valuePropName="employee"
        >
          <Input
            name="firstName"
            value={employee.firstName}
            onChange={handleInputChange}
          />
        </Form.Item>

        <Form.Item
          label="phone"
          name="phone"
          rules={[{ required: true, message: "Please input your phone!" }]}
          valuePropName="employee"
        >
          <Input
            name="phone"
            value={employee.phone}
            onChange={handleInputChange}
          />
        </Form.Item>

        <Form.Item style={{ textAlign: "right" }}>
          <Button
            type="primary"
            htmlType="submit"
            className="w-25 btn bg-success"
            style={{ marginRight: "5px" }}
            loading={loading}
          >
            Submit
          </Button>
          <Button
            type="primary"
            onClick={closeForm}
            className="w-25 btn bg-danger"
          >
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
export default EmployeeForm;
