import React from 'react'
import { useState } from 'react'
import Employee from './Employee';
import { useRef } from 'react';

function EmployeeList() {

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const designationRef = useRef();
    const experienceRef = useRef();

    const employeeListData= [];
            //employee : {'firstName':'swati','lastName':'suman', 'designation' :'developer','experience':'5'}];


    const handleAddClick = () => {
        const newEmployee = {firstName:firstNameRef,lastName:lastNameRef,designation:designationRef,experience: experienceRef}

        employeeList = [...employeeList,newEmployee];
        dispatch(SetEmployeeList(employeeList));
    }

  return (
    <>
    <input type="text" ref = {firstNameRef}> FirstName </input>
    <input type="text" ref = {lastNameRef}> LastName </input>
    <input type="text" ref = {designationRef}> Designation </input>
    <input type="text" ref = {experienceRef}> Experience </input>
    <button onClick={handleAddClick}>Add</button>
    <div>EmployeeList</div>
    {employeeList.map((employee,index) =>{
        return (<>
        <Employee key = {index} employee ={employee}></Employee>
        </>)
    })}
    </>
  )
}

export default EmployeeList