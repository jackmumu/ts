const url = "ws://localhost:8082";
const ws = new WebSocket(url);
const isSpeaker = location.search.includes("speaker");
ws.onopen = () => {
  window.addEventListener("click", (e) => {
    console.log(e);
    ws.send(e.x + "," + e.y);
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "20");
    svg.setAttribute("height", "20");
  
    let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", "10");
    circle.setAttribute("cy", "10");
    circle.setAttribute("r", "2");
    circle.setAttribute("fill", "red");
  
    svg.appendChild(circle);
    svg.style.position = "absolute";
    svg.style.left = e.x + "px";
    svg.style.top = e.y + "px";
    document.body.appendChild(svg);
  });
};
ws.onmessage = (event) => {
  console.log(event.data); // Hello, Client
  if (!isSpeaker) {
    let [x, y] = event.data.split(",");
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "20");
    svg.setAttribute("height", "20");

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", "10");
    circle.setAttribute("cy", "10");
    circle.setAttribute("r", "2");
    circle.setAttribute("fill", "blue");

    svg.appendChild(circle);
    svg.style.position = "absolute";
    svg.style.left = x + "px";
    svg.style.top = y + "px";
    document.body.appendChild(svg);
  }
};
