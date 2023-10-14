var text = document.getElementById('loli');
var char = document.getElementById('kali');
 

text.addEventListener("input", function(){
let count = text.value.length;
if(count == 0 ){
    kali.innerHTML = "Enter Your Text and I'll Tell You How Many Characters You Entered."
}
else{

    kali.innerHTML = 'You Have Entered ' + count + ' characters'
}


})