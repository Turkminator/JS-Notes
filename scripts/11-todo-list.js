const todoList = [{
  name: 'yemek',
  dueDate: '2023-09-15'
},{
  name: 'bulaşık',
  dueDate: '2023-09-16'
}];

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
    const todoObject = todoList[i];
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    //listedekileri göstermek için div elementi açtık
    //oraya eklemek üzere her elemana bir paragraf elementi verdik
    //paragraf elementi içine o paragrafı silebilmek için bir buton koyduk
    //böylece todo listesindeki her elemanın karşısında bir silme butonu olacak
    const html = `<p>
      ${name} ${dueDate} 
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      ">delete</button>
    </p>`
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
  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  //tarih girdisini bir değişkene atadıktan sonra (innerHTML input'ta çalışmaz)
  //tarih girdiden gelen veriyi de bir değişkene atıyoruz
  todoList.push({
    name: name,
    dueDate: dueDate
  });
  console.log(todoList);
  //değer girdikten sonra placeholder çalışsın diye boş değer attık
  inputElement.value = '';

  //eklenen değer ile birlikte listeyi div elementine gönderdik
  renderTodoList();
}