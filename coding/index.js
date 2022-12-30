let container = document.getElementById("container");
// container.addEventListener("click", myfunc);

window.onload = myfunc();
async function myfunc() {
  try {
    let res = await fetch("http://localhost:3000/posts");
    let data = await res.json();
    console.log(data);

    display(data);
  } catch (er) {
    console.log(er.message);
  }
}

function display(data) {
  const parent = document.getElementById("parent");
  parent.innerHTML = "";
  data?.map((item) => {
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.innerHTML = item.name;
    div.appendChild(p);
    parent.append(div);
  });
}
