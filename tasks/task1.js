"Ваша функція повинна робити GET-запит до вказаного URL і отримати дані."
"Поверніть дані користувачів у форматі масиву"
"Дані мають включати такі поля, як id та name."

"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"

function fetchUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
      let users = [];
      for (let i = 0; i < data.length; i++) {
        users.push({ id: data[i].id, name: data[i].name });
      }
      return users;
    })
    .catch(error => console.error("Error fetching users:", error));
}

console.log(fetchUsers())

module.exports = fetchUsers;
