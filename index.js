// Write your solution in this file!
const employee = {
    name: "Elizabeth",
    street: "5327 Itaska",
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const employeeUpdated = {...employee};
    employeeUpdated[key] = value;
    return employeeUpdated;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const employeeWithoutKey = {...employee};
    delete employeeWithoutKey[key];
    return employeeWithoutKey;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}