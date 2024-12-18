let data = [];
let editIndex = -1;

document
  .getElementById("crudform")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let mail = document.getElementById("mail").value;
    let mobile = document.getElementById("mobile").value;
    let country = document.getElementById("country").value;

    if (editIndex === -1) {
      data.push({ name, age, mail, mobile, country });
    } else {
      data[editIndex] = { name, age, mail, mobile, country };
      editIndex = -1;
    }

    displayData();
    document.getElementById("crudform").reset();
  });

function displayData() {
  let listData = document.getElementById("datalist");
  listData.innerHTML = "";
  data.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.mail}</td>
            <td>${item.mobile}</td>
            <td>${item.country}</td>
            <td>
                <button onclick="editData(${index})">Edit</button>
                <button onclick="deleteData(${index})">Delete</button>
            </td>
        `;
    listData.appendChild(row);
  });
}

function editData(index) {
  let item = data[index];
  document.getElementById("name").value = item.name;
  document.getElementById("age").value = item.age;
  document.getElementById("mail").value = item.mail;
  document.getElementById("mobile").value = item.mobile;
  document.getElementById("country").value = item.country;

  editIndex = index;
}

function deleteData(index) {
  data.splice(index, 1);
  displayData();
}
