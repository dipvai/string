

//getting the button 
var btn = document.getElementById('btn')
//adding event
btn.addEventListener("click", myFunc)

//function to call HTML element and alter the value

function myFunc(){
    var num = document.getElementById('num').value
    var str = document.getElementById('str').value
    if(num >0 && str !== ""){
        var rslt = threeTime(str,num);
        document.getElementById('result').innerHTML= rslt;
    }else{
        //throw an alter if any of the inputs is invalid
        alert("One of the input is invalid! Please check it")
    }
}

//function to concat string value  
function threeTime(str, num){
    var newStr = ""   
        while(num > 0){
            newStr += str
            num--            
        }
    return newStr
}