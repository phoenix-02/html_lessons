let a = 11
a++

const b = '12'
// b++

console.log(a)//12
console.log(a+1)//13
console.log(b+1)//'121'

//присваиваем еременной элемент Dom
let new_div = document.getElementById('new')
//меняем тескт в блоке
new_div.innerHTML = 'adidas'
// добавляе элементу класс
new_div.classList.add('red')
//удаляем класс у элемента
new_div.classList.remove('some_class')

//функция
function new_func(){
    console.log('функция сработала')
}
//вызов функции
new_func()
// зацикливаем действие в интервале 100мс
let i=1
timerid = setInterval(()=>{
    //дивгаем вправо элемент на i процентов
    new_div.style.left=i+'%'
    i+=0.3
    // останавливаем
    if(i>=90){
        clearInterval(timerid)
    }
},100)

