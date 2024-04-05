const nameList = document.getElementById("name-item");
const totalList = document.getElementById("total-item");
const listContainer = document.getElementById("list-container");

nameList.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addItem();
  }
});

totalList.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addItem();
  }
});

function addItem() {
  let totalItem;
  if (nameList.value === "") {
    alert("Please add your item!");
  } else {
    if (totalList.value === "") {
      totalItem = 1;
    } else {
      totalItem = totalList.value;
    }
    const li = document.createElement("li");
    li.innerHTML = `<div class="total-items">${totalItem}</div>
            <span class="name-items">${formatText(nameList.value)}</span>
            <div class="icon-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"
                />
              </svg>
            </div>`;
    listContainer.appendChild(li);
  }
  nameList.value = "";
  totalList.value = "";
  saveData();
}

listContainer.addEventListener("click", function (e) {
  console.log(e.target);
  if (
    e.target.tagName === "svg" ||
    e.target.tagName === "path" ||
    e.target.classList.contains("icon-container")
  ) {
    e.target.closest("li").remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showItem() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showItem();

function formatText(text) {
  let words = text.toLowerCase().split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  return words.join(" ");
}
