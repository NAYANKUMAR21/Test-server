let container = document.getElementById("container");
container.addEventListener("click", myfunc);
//deployed link for frontend =>
//deployed link for backend => https://macserver.onrender.com/posts
// window.onload = myfunc();
async function myfunc() {
  try {
    let res = await fetch("https://macserver.onrender.com/posts");
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
