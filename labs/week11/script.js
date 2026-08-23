document.addEventListener("DOMContentLoaded", () => {
  fetch("http://127.0.0.1:5000/users")
    .then(response => response.json())
    .then(data => {
      const userList = document.getElementById("user-list");
      data.forEach(user => {
        let li = document.createElement("li");
        li.textContent = `${user[1]} - ${user[2]}`;
        userList.appendChild(li);
      });
    })
  .catch(error => console.error("Error fetching users:",
  error));
});

document.getElementById("user-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  fetch("http://127.0.0.1:5000/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email })
  })
  .then(response => response.json())
  .then(data => {
    alert(data.message);
    location.reload();
  })
  .catch(error => console.error("Error adding user: ", error));
});
