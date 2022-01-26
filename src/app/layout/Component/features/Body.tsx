import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployeeDashboard from "./dashboard/EmployeeDashboard";
import { Employee } from "../../../models/employee";
import callapi from "../../../api/callapi";
import NavBar from "../header/NavBar";
import { v4 as uuidv4 } from "uuid";
import useStore from "../../../storeZustand/storeState";

const Body = () => {
  const [employee, setEmployee] = useState<Employee[]>([]);
  const [submit, setSubmit] = useState(false);

  const {
    loadingEmployee,
    employees,
    loadingInit,
    checkSelectedEmployee,
    selectedEmployee1,
  } = useStore();

  useEffect(() => {
    loadingEmployee();
  }, [loadingEmployee]);

  return (
    <>
      <NavBar />
      <EmployeeDashboard
      ></EmployeeDashboard>
    </>
  );
};
export default Body;
