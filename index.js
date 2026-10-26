import { getstock } from "./fakestockapi.js"
console.log(getstock());
setInterval(function(){
    const s=getstock();
    renderstock(s);
},1500);
 let prevprice=null;
function renderstock(stockData){
   
    const displayname=document.getElementById("name");
    const displaysymbol=document.getElementById("symbol");
    const displayprice=document.getElementById("price");
    const displaypriceicon=document.getElementById("priceicon");
    const displaytime=document.getElementById("time");
const{name,symbol,price,time}=stockData;
const currentprice = Number(price);

const priceicon = currentprice > prevprice
    ? 'greentri.png'
    : currentprice < prevprice
        ? 'red tri.png'
        : 'gray.png';
        displaypriceicon.innerHTML = "";
const priceele=document.createElement("img");
priceele.src = `./svg/${priceicon}`;
displaypriceicon.appendChild(priceele);

displayname.innerText ="Name: "+name;
displaysymbol.innerText="Symbol: "+symbol;
displayprice.innerText="Price: "+" "+price;


displaytime.innerText="Time: "+time;
prevprice = currentprice;
}
renderstock(getstock());
