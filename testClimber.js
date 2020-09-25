let namePlayer = prompt("Введите свое имя");
//ПЕРЕМЕЩЕНИЕ КРУГА В СЛЕДУЮЩИЙ БОКС
function right() {
  let circle = document.querySelector("#circle"); //id круга

  let currentBox = circle.parentElement.id; //id текущего box
  if (currentBox === "box5") {
    alert(namePlayer + ", поздравляем тебя!!! Ты дошел до финиша!!!!");
  } else {
    circle.remove(circle); //удаляем старый круг
    let nextBox = document.querySelector("#" + currentBox).nextElementSibling; //получаем id соседнего бокса и тем самым осуществляем "переход" на него
    //создание нового круга
    let newCircle = document.createElement("DIV"); //создаем переменную для нового круга и создаем его
    newCircle.id = "circle"; //присваиваем имя ID
    nextBox.appendChild(newCircle); //помещаем новый круг в следующий бокс
  }
}

//ПЕРЕМЕЩЕНИЕ КРУГА В ПРЕДЫДУЩИЙ БОКС
function left() {
  let circle = document.querySelector("#circle"); //id круга

  let currentBox = circle.parentElement.id; //id текущего box
  if (currentBox === "box1") {
    currentBox = "box1";

    circle.remove(circle); //удаляем старый круг
    let nextBox = document.querySelector("#" + currentBox); //получаем id соседнего бокса и тем самым осуществляем "переход" на него
    //создание нового круга
    let newCircle = document.createElement("DIV"); //создаем переменную для нового круга и создаем его
    newCircle.id = "circle"; //присваиваем имя ID
    nextBox.appendChild(newCircle); //помещаем новый круг в след
  } else {
    circle.remove(circle); //удаляем старый круг
    let nextBox = document.querySelector("#" + currentBox)
      .previousElementSibling; //получаем id соседнего бокса и тем самым осуществляем "переход" на него
    //создание нового круга
    let newCircle = document.createElement("DIV"); //создаем переменную для нового круга и создаем его
    newCircle.id = "circle"; //присваиваем имя ID новому кругу такой же как и у старого, чтобы стиль для него подтянулся автоматически из файла
    nextBox.appendChild(newCircle); //помещаем новый круг в следующий бокс
  }
}

//прикручиваем управление "z" - влево, "x" - вправо.
addEventListener("keydown", function (event) {
  if (event.keyCode == 90) {
    left();
  }
  if (event.keyCode == 88) {
    right();
  }
});
