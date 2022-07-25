const hour= document.getElementById("hour-hand");
const minute= document.getElementById("min-hand");
const second= document.getElementById("second-hand");

function clockWork(){
    let dateNow=new Date();
    let h=((dateNow.getHours()/12)*360)+90;
    let m=((dateNow.getMinutes()/60)*360)+90;
    let s=((dateNow.getSeconds()/60)*360)+90;
    
    hour.style.transform=`rotate(${h}deg)`;
    minute.style.transform=`rotate(${m}deg)`;
    second.style.transform=`rotate(${s}deg)`;
}

setInterval(clockWork, 1000);
clockWork();