//selecting popup-box
//selecting pop-overley
let popupOverley = document.querySelector('.pop-overley');
let popupBox = document.querySelector('.popup-box');
let addpopupButton = document.getElementById('add-popup')
let cancelPopupButton = document.getElementById('cancel-popup');

addpopupButton.addEventListener('click', () => {
    popupOverley.style.display = "block";
    popupBox.style.display = "block";
});

cancelPopupButton.addEventListener('click', (event) => {
    event.preventDefault();
    popupOverley.style.display = "none";
    popupBox.style.display = "none";
});


let container = document.querySelector('.container');
let addbookButton = document.getElementById('add-book');
let booktitleinput = document.getElementById('book-title-input');
let bookauthorinput = document.getElementById('book-author-input');
let bookdescriptioninput = document.getElementById('book-description-input');



addbookButton.addEventListener('click', function (event) {
    event.preventDefault();
    let div = document.createElement('div');
    div.setAttribute('class', 'book-container');
    div.innerHTML = `<h1>${booktitleinput.value}</h1> <h4>${bookauthorinput.value}</h4> 
    <p>${bookdescriptioninput.value}</p> <button onclick = "deleteBook(event)">delete</button>`;
    container.append(div);
    popupOverley.style.display = "none";
    popupBox.style.display = "none";
})

function deleteBook(event) {
    event.target.parentElement.remove();
}