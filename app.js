const card = document.querySelector(".card");
const container = document.querySelector(".container");

const title = document.querySelector(".info h1");
const info = document.querySelector(".info h3");
const logo = document.querySelector(".logo img");
const links = document.querySelector(".links");

container.addEventListener('mousemove' , (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    console.log(xAxis , yAxis);
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener('mouseenter' , (e) => {
    card.style.transition = 'none';
    title.style.transform = "translateZ(110px)";
    info.style.transform = "translateZ(125px)";
    logo.style.transform = "translateZ(140px)";
    links.style.transform = "translateZ(100px)";
});

container.addEventListener('mouseleave' , (e) => {
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = "translateZ(0px)";
    info.style.transform = "translateZ(0px)";
    logo.style.transform = "translateZ(0px)";
    links.style.transform = "translateZ(0px)";
    card.style.transition = 'all 0.5s ease';
});