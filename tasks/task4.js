"Ваш код повинен зробити DELETE-запит до вказаного URL, де {userId} – це ID користувача, якого потрібно видалити."
"Поверніть статус відповіді сервера після видалення."

"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"


function deleteUser(id) {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  
  return fetch(url, {
    method: "DELETE",
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }
      return response.json(); // Optional: depending on API, you may not need to return this
    });
}

console.log(deleteUser(1));

module.exports = deleteUser;
