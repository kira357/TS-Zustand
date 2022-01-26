import { Employee } from "./../models/employee";
import create from "zustand";
import callapi from "../api/callapi";
import { v4 as uuidv4 } from "uuid";

interface EmployeeState {
  employees: Employee[];
  selectedEmployee1: Employee | undefined;
  editEmployee: boolean;
  loadingInit: boolean;
  loading: boolean;
  loadingEmployee: () => void;
  checkSelectedEmployee: (id: string) => void;
  cancelSelectedEmployee: () => void;
  openForm: (id?: string) => void;
  closeForm: () => void;
  createEmployee: (employee: Employee) => void;
  updateEmployee: (employee: Employee) => void;
  deleteEmployee: (id: string) => void;
}
const useStore = create<EmployeeState>((set, get) => ({
  employees: [],
  selectedEmployee1: undefined,
  editEmployee: false,
  loadingInit: true,
  loading: false,
  loadingEmployee: async () => {
    callapi.Employees.list()
      .then((res) => {
        console.log(res);
        set((state) => ({ loadingInit: false, employees: res }));
      })
      .catch((err) => {
        console.log(err);
        set((state) => ({ loadingInit: false }));
      });
  },
  checkSelectedEmployee: (id: string) => {
    let checkid = get().employees.find((e) => e.employeeId === id);
    console.log(checkid);
    set({
      selectedEmployee1: checkid,
    });
  },
  cancelSelectedEmployee: () => {
    set({
      selectedEmployee1: undefined,
    });
  },
  openForm: (id?: string) => {
    id ? get().checkSelectedEmployee(id) : get().cancelSelectedEmployee();
    set({ editEmployee: true });
  },
  closeForm: () => {
    set({
      editEmployee: false,
    });
  },
  createEmployee: (e: Employee) => {
    set({
      loading: true,
    });
    e.employeeId = uuidv4();
    callapi.Employees.createEmployee(e)
      .then(() => {
        set((state) => ({
          employees: [...state.employees, e],
          selectedEmployee1: e,
          editEmployee: false,
          loading: false,
        }));
      })
      .catch((err) => {
        console.log(err);
        set({
          loading: false,
        });
      });
  },

  updateEmployee: (e: Employee) => {
    set({
      loading: true,
    });
    callapi.Employees.editEmployee(e)
      .then((res) => {
        set((state) => ({
          employees: [
            ...state.employees.filter(
              (item) => item.employeeId !== e.employeeId
            ),
            e,
          ],
          selectedEmployee1: e,
          editEmployee: false,
          loading: false,
        }));
      })
      .catch((err) => {
        console.log(err);
        set({
          loading: false,
        });
      });
  },

  deleteEmployee : (id : string) => {
    set(({
      loading : true
    }))
    callapi.Employees.deteleEmployee(id)
    .then(() => {
      set(({
        employees : [...get().employees.filter((item) => item.employeeId !== id)],
        loading: false
      }))
      if(get().selectedEmployee1?.employeeId === id) get().cancelSelectedEmployee()
    }).catch((err) => {
      console.log(err);
      set({
        loading: false,
      });
    });
  }
}));

export default useStore;
