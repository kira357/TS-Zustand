import React, { useState, useEffect } from "react";
import EmployeeDashboard from "./dashboard/EmployeeDashboard";
import NavBar from "../header/NavBar";
import useStore from "../../../storeZustand/storeState";

const Body = () => {
  const {
    loadingEmployee,
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
