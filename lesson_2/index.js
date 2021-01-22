
// клонирую 7 элементов- заметок , ставлю разные даты.
// первым днем всегда будет текущее число

window.onload = function () {
    const todo_list = document.querySelector('.todo_list');
    const root = document.querySelector('#root');
    let date = new Date


    for (let i = 1; i < 7; i++) {
        /*так мы клонируем  элемент todo_list */
        date.setDate(date.getDate() + 1 )
        let cloneElement = todo_list.cloneNode(true)
        /*так мы вставляем клоны в root */
        root.appendChild(cloneElement)
        root.children[i].querySelector("time").innerText = (date+'').slice(0,15)
    }
}
