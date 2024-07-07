const colors=["green","red","rgba(133,122,200)","#f15025"];
const btn=document.getElementById('btn')
const color=document.querySelector(".color")

btn.addEventListener("click",function(){
    //get random number between 0 and 3 
    const randomNumber=getcolorNumber(0,colors.length-1);
    console.log("the color is "+randomNumber);
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber];
})




//fucntion to get the color number
function getRandomNumber(){
    const minceiled=Math.ceil(0);
    const maxfloored=Math.floor(3)
    return Math.floor(Math.random()*(maxfloored-minceiled+1)+minceiled);
}

//an more generalised fucntion to get the color number
function getcolorNumber(min,max){
    const minceil=Math.ceil(min);
    const maxfloored=Math.floor(max);
    return Math.floor(Math.random()*(maxfloored-minceil+1)+minceil);
}

//we can also obtain different colors using the click event on a function that uses a slightly differenct 
//logic
function getcolor(){
    return Math.floor(Math.random()*colors.length);
}