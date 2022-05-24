// alert('hello students')

// const btn = document.getElementById('success');

// console.dir(btn);

// console.dir(document);

// console.log(document.body.firstChild.previousSibling);

// for(let i = 0; i < document.body.childNodes.length; i++) {
//     console.log(document.body.childNodes[i]);
// }

// const wrapper = document.getElementsByTagName('div');

// const wrappers = document.querySelectorAll('.wrapper'); // []

// console.log(wrapper[1]);
 
// for(let wrapper of wrappers) {
//     wrapper.style.background = 'red';
//     wrapper.style.margin = '10px';
// }


// const wrapper = document.querySelector('.wrapper'); // []

// console.dir(wrapper);

// wrapper.innerHTML = '<h1>Changed wrapper</h1>';

// wrapper.childNodes[1].innerText += ' and Hold'

// const link = document.querySelector('.link');
// link.textContent = 'facebook';
// link.href = 'https://www.google.com/';
// link.target = '_blank';

// const nextLi = document.createElement('li');
// nextLi.innerText = 'third element';

// const list = document.querySelector('.list');

// const second = document.querySelector('.second');

// console.log(nextLi);

// second.after(nextLi);

// const list = document.querySelector('.list');

// function createTodo(event) {
//     console.dir(event);
//     const todo = document.createElement('li');
//     todo.style.color = 'silver';
//     todo.classList.add('todo');
//     const inputFieldValue = document.querySelector('.input-field').value;
//     // console.dir(inputField);
//     todo.innerText = inputFieldValue;
//     list.append(todo);
//     const toRemove = document.querySelector('.second');
//     if(inputFieldValue == 'remove') {
//         list.removeChild(toRemove);
//     }
// }

// function removeElem


const date = new Date();

(function (){
    console.log('111');
    document.body.style.background = date.getHours() >= 22 ? 'black' : 'white';
    // if (date.getHours() > 21 || date.getHours() < 6) {
    //     document.body.style.background = 'black';
    // } else {
    //     document.body.style.background = 'black';
    // }
})();

console.log(date.getUTCHours());

console.log(`current date: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);

