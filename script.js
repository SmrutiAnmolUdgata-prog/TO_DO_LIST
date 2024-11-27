document.getElementById("add").addEventListener("click", function () {
  let x = document.createElement("li");
  let input = document.getElementById("item").value;
  x.textContent = input;
  let todo = document.getElementById("list");
  todo.appendChild(x);
  document.getElementById("item").value = "";
});
