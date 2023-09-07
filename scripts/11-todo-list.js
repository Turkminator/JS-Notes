const todoList = ['yemek', 'bulaşık'];

renderTodoList();

/*
listeyi html'de gösterebilmek için bir fonksiyon oluşturduk
bu fonksiyonu hem uygulama açılırken kullanmak için sayfanın 
başına yazdık hem de butona basıldığında güncellemesi için
butondaki fonksiyona yazdık
*/
function renderTodoList(){
  let todoListHTML = '';

  for (let i = 0; i<todoList.length; i++){
    const todo = todoList[i];
    //listedekileri göstermek için div elementi açtık
    //oraya eklemek üzere her elemana bir paragraf elementi verdik
    const html = `<p>${todo}</p>`
    //paragraf elementlerini yukarıdaki değişkene atadık
    todoListHTML += html;
  }
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo(){
  //html elementini javascript'e çektik
  const inputElement = document.querySelector('.js-name-input');
  //input'a verilen değerleri name değişkenine atadık
  const name = inputElement.value;
  // değeri listeye ekledik
  todoList.push(name);
  console.log(todoList);
  //değer girdikten sonra placeholder çalışsın diye boş değer attık
  inputElement.value = '';

  //eklenen değer ile birlikte listeyi div elementine gönderdik
  renderTodoList();
}