// let addstd = document.getElementById("addbtn"); // Correctly targets the button
// const StudentForm = document.getElementById("reg-form"); // Correctly targets the form

// addstd.addEventListener('click', () => {
//     if (StudentForm.style.display === 'none') {
//         StudentForm.style.display = 'block'; // Show the form
//         addstd.innerHTML = '<li><a href="#">Hide Form</a></li>'; // Update button text
//     } else {
//         StudentForm.style.display = 'none'; // Hide the form
//         addstd.innerHTML = '<li><a href="#">Add Student</a></li>'; // Restore button text
//     }
// });

const addbtn = document.getElementById('addbtn');
const viewbtn = document.getElementById('viewbtn');
const regForm = document.getElementById('reg-form');
const studentTable = document.getElementById('studentTable');
const addStudentForm = document.getElementById('addStudentForm');
const tableBody = document.getElementById('tableBody');

// Array to store student data
let students = [];

// Show/hide form
addbtn.addEventListener('click', () => {
    regForm.style.display = regForm.style.display === 'none' ? 'block' : 'none';
    studentTable.style.display = 'none'; // Hide table if form is displayed
});

// Show/hide table
viewbtn.addEventListener('click', () => {
    studentTable.style.display = studentTable.style.display === 'none' ? 'block' : 'none';
    regForm.style.display = 'none'; // Hide form if table is displayed
});

// Handle form submission
addStudentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const department = document.getElementById('department').value;
    const registerNumber = document.getElementById('registerNumber').value;
    const mail = document.getElementById('mail').value;
    const age = document.getElementById('age').value;
    const city = document.getElementById('city').value;

    // Add new student to the array
    students.push({ name, department, registerNumber, mail, age, city });

    // Clear the form
    addStudentForm.reset();

    // Update the table
    updateTable();

    // Hide the form and show the table
    regForm.style.display = 'none';
    studentTable.style.display = 'block';
});

// Function to update the table
function updateTable() {
    tableBody.innerHTML = ''; // Clear existing rows

    students.forEach((student) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.department}</td>
            <td>${student.registerNumber}</td>
            <td>${student.mail}</td>
            <td>${student.age}</td>
            <td>${student.city}</td>
        `;
        tableBody.appendChild(row);
    });
}
