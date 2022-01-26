import React from "react";
import { List, Skeleton, Button } from "antd";
import useStore from '../../../../storeZustand/storeState'


const EmployeeList = () => {
  const {employees,checkSelectedEmployee , deleteEmployee,loading} = useStore()
  return (
    <div>
      <List
        size="small"
        dataSource={employees}
        renderItem={(item) => (
          <List.Item
            key={item.employeeId}
            actions={[
              <Button
                className="btn"
                type="primary"
                key={item.employeeId}
                onClick={() => checkSelectedEmployee(item.employeeId)}
              >
                detail
              </Button>,
              <Button
                name={item.employeeId}
                className="btn btn-danger"
                key={item.employeeId}
                type="primary"
                danger
                loading={loading}
                onClick={() => deleteEmployee (item.employeeId)}
              >
                Detele
              </Button>,
            ]}
          >
            {item && (
                <Skeleton
                  title={false}
                  avatar={false}
                  active={false}
                ></Skeleton>
              ) && (
                <List.Item.Meta
                  title={item.email}
                  description={item.firstName}
                />
              )}
          </List.Item>
        )}
      />
    </div>
  );
};
export default EmployeeList;
