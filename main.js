var lcd=document.getElementById("lcd");
var ac=document.getElementById("ac");
var del=document.getElementById("del");
var div=document.getElementById("div");
var mul=document.getElementById("mul");
var sub=document.getElementById("sub");
var add=document.getElementById("add");
var equal=document.getElementById("equal");
var dot=document.getElementById("dot");
var zero=document.getElementById("zero");
var one=document.getElementById("one");
var two=document.getElementById("two");
var three=document.getElementById("three");
var four=document.getElementById("four");
var five=document.getElementById("five");
var six=document.getElementById("six");
var seven=document.getElementById("seven");
var eight=document.getElementById("eight");
var nine=document.getElementById("nine");
var str="";
ac.addEventListener("click",function(){
    str="";
    lcd.innerHTML=str;
});
del.addEventListener("click",function(){
    str=str.slice(0,-1);
    lcd.innerHTML=str;
});
zero.addEventListener("click",function(){
    str+=0;
    lcd.innerHTML=str;
});
one.addEventListener("click",function(){
    str+=1;
    lcd.innerHTML=str;
});
two.addEventListener("click",function(){
    str+=2;
    lcd.innerHTML=str;
});
three.addEventListener("click",function(){
    str+=3;
    lcd.innerHTML=str;
});
four.addEventListener("click",function(){
    str+=4;
    lcd.innerHTML=str;
});
five.addEventListener("click",function(){
    str+=5;
    lcd.innerHTML=str;
});
six.addEventListener("click",function(){
    str+=6;
    lcd.innerHTML=str;
});
seven.addEventListener("click",function(){
    str+=7;
    lcd.innerHTML=str;
});
eight.addEventListener("click",function(){
    str+=8;
    lcd.innerHTML=str;
});
nine.addEventListener("click",function(){
    str+=9;
    lcd.innerHTML=str;
});
add.addEventListener("click",function(){
    str+='+';
    lcd.innerHTML=str;
});
sub.addEventListener("click",function(){
    str+='-';
    lcd.innerHTML=str;
});
mul.addEventListener("click",function(){
    str+='*';
    lcd.innerHTML=str;
});
div.addEventListener("click",function(){
    str+='/';
    lcd.innerHTML=str;
});
dot.addEventListener("click",function(){
    str+='.';
    lcd.innerHTML=str;
});
per.addEventListener("click",function(){
    str+='%';
    lcd.innerHTML=str;
});
equal.addEventListener("click",function(){
    var mid="";
    str=mid+eval(str);
    lcd.innerHTML=str;
});
//keyboard integration
document.addEventListener("keydown",function(event){
    if(event.key=="0" || event.key=="1" || event.key=="2" || event.key=="3" || event.key=="4" || event.key=="5" || event.key=="6" || event.key=="7" || event.key=="8" || event.key=="9" || event.key=="+" || event.key=="-" || event.key=="+" || event.key=="*" || event.key=="/" || event.key=="%" || event.key=="."){
        str+=event.key;
        lcd.innerHTML=str;
    }else if(event.key=="Enter" || event.key=="="){
        var mid="";
        str=mid+eval(str);
        lcd.innerHTML=str;
    }else if(event.key=="Backspace"){
        str=str.slice(0,-1);
        lcd.innerHTML=str;
    }else if(event.key=="c" || event.key=="C" || event.key=="Escape" || event.key=="Delete" || event.key=="Home"){
        str="";
        lcd.innerHTML=str;
    }
});
var close=document.getElementById("close");
var open=document.getElementById("open");
close.addEventListener("click",function(){
    close.style.display="none";
    open.style.display="block";
});
open.addEventListener("click",function(){
    close.style.display="block";
    open.style.display="none";
});