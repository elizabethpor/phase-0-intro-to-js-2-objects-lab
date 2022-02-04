// created employee object with keys name and streetAddress
const employee = {
    name: " ",
    streetAddress: " ",
}

// or like this:
// const employee = {};
// employee.name = " ";
// employee.streetAddress = " ";

function updateEmployeeWithKeyAndValue(employee, key, value) {
    // let newEmployeeObj;
    // return newEmployeeObj = {...employee, [key]: value};

    return {...employee, [key]: value};
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}