import React from 'react'
import useDispatch from 'react-redux'
//import logo from './../../logo.svg';

function Employee(props) {

    const dispatch = useDispatch();
    const handleDeleteClick = (id) => {
       let indexToDelete = employeeList.findIndex((employee => employee.id === id))
        
        const newemployeeList = employeeList.splice(indexToDelete,1);
        dispatch(SetEmployeeList(newemployeeList));

    }

    const handleEditClick = (id, employee) => {

        let indexToUpdate = employeeList.findIndex((employee => employee.id === id))
         
         employeeList[indexToUpdate] = employee;
         dispatch(SetEmployeeList(employeeList));
     }

const[key,employee,employeeList] = props;
  return (
    <>
    <div>Employee</div>
    <div>FirstName : {employee.firstName}</div>
    <div>LastName : {employee.lastName}</div>
    <div>Designation : {employee.designation}</div>
    <div>Experience : {employee.experience}</div>
    <button onClick={handleEditClick(key)} >Edit</button>
    <button onClick={handleDeleteClick(key)}>Delete</button>
    </>
  )
}

export default Employee