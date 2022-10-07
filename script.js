function myName(){
    let fullname;
    let name=document.getElementById('name')
     fullname =name.value
     document.getElementById('fname').innerHTML = fullname;
}

function myEmail(){
    let email;
    let output=document.getElementById('email')
     email =output.value
     document.getElementById('mail').innerHTML = email;
}
function myNumber(){
    let phoneNumber;
    let num=document.getElementById('phone')
     number=num.value

     if(number.startsWith('081') || number.startsWith('080') || number.startsWith('091') || number.startsWith('070') || number.startsWith('090')){
        if (number.length== 11 ){
        phoneNumber = number;
        }
        else if (phoneNumber.length > 11){
            phoneNumber = 'Invalid number';
        
     }
    }
     else {
        phoneNumber = 'Invalid'
     }
     document.getElementById('number').innerHTML = phoneNumber;
}
function origin(){
    let myState;
    let state=document.getElementById('state')
     myState =state.value
     document.getElementById('origin').innerHTML = myState;
}
function occu(){
    let myOccupation; 
    let job =document.getElementById('occupation')
     myOccupation =job.value
     document.getElementById('job').innerHTML = myOccupation;
}
