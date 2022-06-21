initialState={employeeList:[]}

export const EmployeeListReducer = (state={initialState},actionType,employeeList) => 
{
    if(actionType == "SetEmployeeList")
        return state = {employeeList : employeeList}

        return state;
}