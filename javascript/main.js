var elTitle = document.querySelector('.title')
var elInp = document.querySelector('.inp')
var elBtn = document.querySelector('.btn')


function fn() {
    var num = elInp.value
    if (num % 3 == 0 && num % 7 == 0){
        elTitle.innerHTML ='FizzBuzz'
    }else if(num % 7 == 0){
        elTitle.innerHTML = 'Buzz'
    }else if(num % 3 == 0){
        elTitle.innerHTML = 'Fizz'
    }else{
        elTitle.innerHTML = "Bo'linmaydi"
    }
    elInp.value = ''
    elInp.focus()
}