const route = (event) => {
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
};

const routes = {
  404: "/pages/404.html",
  "/": "../index.html",
  "/about": "/pages/about.html",
  "/home": "/pages/home.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  let route;
  if (path === "/") route = routes["/home"];
  else route = routes[path] || routes[404];

  const html = await fetch(route).then((data) => data.text());
  document.getElementById("root").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
