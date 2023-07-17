   

function qoutecreater(){
    var arr1 = ["You miss 100% of the shots you don't take." , "Do not take life too seriously. You will not get out alive.","It's not what happens to you, but how you react to it that matters.","The best revenge is massive success." , "Resentment is like drinking poison and waiting for your enemies to die."];
    var arr2 =["--Frank Sinatra" , "--Epictetus" , "--Nelson Mandela" , "--Wayne Gretzy" , "--Nelson"];
    var num = Math.floor( Math.random()*arr1.length);
    document.getElementById("demo").innerHTML = arr1[num];
    document.getElementById("demo1").innerHTML = arr2[num];
}



