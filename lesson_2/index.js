
// клонирую 7 элементов- заметок , ставлю разные даты.
// первым днем всегда будет текущее число

window.onload = function () {
    const todo_list = document.querySelector('.todo_list');
    const root = document.querySelector('#root');
    let date = new Date
    todo_list.querySelector("time").innerText = (date+'').slice(0,15)


    for (let i = 1; i < 7; i++) {
        /*так мы клонируем  элемент todo_list */
        let cloneElement = todo_list.cloneNode(true)
        root.appendChild(cloneElement)

        /*так мы вставляем клоны в root */
        date.setDate(date.getDate() + 1 )
        root.children[i].querySelector("time").innerText = (date+'').slice(0,15)
    }
}
