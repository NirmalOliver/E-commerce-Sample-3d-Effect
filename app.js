const card = document.querySelector('.card');
const container= document.querySelector('.container');

const title=document.querySelector('.title');
const buy=document.querySelector('.buy button');
const description=document.querySelector('.info h3');
const sizes=document.querySelector('.sizes');
const watch=document.querySelector('.watch img');

container.addEventListener("mousemove",(e)=>{
   let xAxis = (window.innerWidth / 2 -e.pageX)/25;
   let yAxis = (window.innerHeight / 2-e.pageY)/25;
   card.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//animate-in
container.addEventListener('mouseenter', (e) =>{
    card.style.transition="none";

    title.style.transform="translateZ(150px)";
    watch.style.transform="translateZ(250px) rotateZ(-65deg)";
    description.style.transform="translateZ(125px)";
    sizes.style.transform="translateZ(100px)";
    buy.style.transform="translateZ(75px)";
});





//animate-out

container.addEventListener('mouseleave',(e)=>{
    card.style.transition="all 0.5s ease";
    card.style.transform=`rotateY(0deg) rotateX(0deg)`;
    title.style.transform="translateZ(0px)";
    watch.style.transform="translateZ(0px) rotateZ(0deg)";
    description.style.transform="translateZ(0px)";
    sizes.style.transform="translateZ(0px)";
    buy.style.transform="translateZ(0px)";
});