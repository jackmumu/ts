"use strict";
var url = "ws://localhost:8082";
var ws = new WebSocket(url);
var isSpeaker = location.search.includes("speaker");
ws.onopen = function () {
    window.addEventListener("click", function (e) {
        console.log(e);
        ws.send(e.x + "," + e.y);
        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "20");
        svg.setAttribute("height", "20");
        var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
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
ws.onmessage = function (event) {
    console.log(event.data); // Hello, Client
    if (!isSpeaker) {
        var _a = event.data.split(","), x = _a[0], y = _a[1];
        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "20");
        svg.setAttribute("height", "20");
        var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
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
