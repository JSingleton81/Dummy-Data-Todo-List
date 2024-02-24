let arrayOfTodos = [
  {
  "userId": 14,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
},
{
  "userId": 20,
  "id": 2,
  "title": "delectus aut autem",
  "completed": false
}
];

  // console.log(arrayOfTodos[0].userId) // => 14
  // console.log(arrayOfTodos[1].userId) // => 20

  const userTwenty = arrayOfTodos [1]
  console.log('userTwentyTitle info:', userTwenty.title)

const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then( (response) => response.json())
  .then( (json) => arrayOfTodos = json)
  
}

const logTodos = () => {

  console.log(arrayOfTodos)
}

const populateTodos = () => {
  const orderedListElement = document.getElementById('todo-list')

  for (let index = 0; index < arrayOfTodos.length; index++) {
    const title = arrayOfTodos[index].title;
    
    const listItem = document.createElement("li");

    const textNode =document.createTextNode(title);

    listItem.appendChild(textNode);

  
    orderedListElement.appendChild(listItem)
  }
}


const filteredTodos = () => {
  clearTodos()
  const orderedListElement = document.getElementById("todo-list")

  const number = document.getElementById("userId").valueAsNumber

  const filteredArray = arrayOfTodos.filter((arr) => arr.userId === number)

  for (let index = 0; index < filteredArray.length; index++) {
    const title = filteredArray[index].title;
    
    const listItem = document.createElement("li");

    const textNode =document.createTextNode(title);

    listItem.appendChild(textNode);

  
    orderedListElement.appendChild(listItem)
  }
}
const clearTodos = () => {
  const orderedListElement = document.getElementsByTagName("ol")

  for (let index = 0; index < orderedListElement.length; index++) {orderedListElement[index].innerHTML = null
 }
}

  const filtered = arrayOfTodos.filter((todo) => {
  console.log('todo:', todo)
  return todo.userId === 5
   } )
