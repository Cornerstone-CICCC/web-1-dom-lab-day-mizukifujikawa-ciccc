const form = document.querySelector('form')
form.addEventListener('submit', (event) => {
    event.preventDefault()

    const formData = new FormData(form)
    const firstname = formData.get('firstname')
    const lastname = formData.get('lastname')
    const email = formData.get('email')
    const hireDate = formData.get('hire_date')
    const photo = formData.get('photo')
    
    const row = document.createElement('tr')
    row.className = "tableRow";
    row.innerHTML = `<td><img src="./../images/${photo.name}" /></td><td>${firstname}</td><td>${lastname}</td><td>${email}</td><td>${hireDate}</td><td><button onclick="deleteRow(this)">delete</button></td>`

    document.getElementById('employeeList').appendChild(row)

    form.reset();
})


function deleteRow(button) {
    if (window.confirm('Are you sure you want to delete this employee?')) {
        let parent = button.parentNode.parentNode;
        parent.remove();
    }
}