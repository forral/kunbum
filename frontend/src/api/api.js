export function getMovements() {
  fetch('http://localhost:4000/api/movements/')
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}
