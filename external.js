var element = document.getElementById("btn1");
element.addEventListener('click',fun1);
element.addEventListener('click',fun2);
element.addEventListener('click',fun3);
element.addEventListener('mouseover',fun4);
element.removeEventListener('click',fun1);
element.removeEventListener('click',fun2);





function fun1(){
    document.getElementById("para1").style.backgroundColor="pink";
  
}
function fun2(){
    document.getElementById("para1").style.color="white";
  
}
function fun3(){
    document.getElementById("para1").style.border="3px solid purple";
  
}
function fun4(){
    document.getElementById("para1").style.backgroundColor="yellow";
  
}


function newfun(){
    
}
