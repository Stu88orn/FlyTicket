function greet(){
  alert("Hello");
}

const oneSeat = document.querySelectorAll('.oneSeat');
const seat = document.querySelectorAll('.seat');
const active = document.querySelectorAll('.active');
const label = document.querySelectorAll('label');
const input = document.querySelectorAll('input');


oneSeat.forEach( seat => seat.addEventListener('click', freeSeat));


for (let i = 0; i < oneSeat.length; i++) {
    oneSeat[i].addEventListener('click', function(e){
        if(e.target.classList.contains('active')){
            e.target.classList.remove('active');
            input[i].checked = false;
            label[i].classList.remove('active');
        } else {
            e.target.classList.add('active');
            input[i].checked = true;
            label[i].classList.add('active');
        }
    });
}
