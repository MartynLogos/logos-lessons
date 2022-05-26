// function fun(event) {
//     // console.log(event);
//     // alert('hello');
//     // console.log(event.target.innerText);
//     // console.dir(btn);
//     if(event.shiftKey) {
//         console.log('secret stuff');
//     } else {
//         console.log('default stuff');
//     }
// }

// // console.dir(document);
// const btn = document.querySelector('.btn');

// // console.dir(btn);

// btn.onclick = fun; // void

// // console.dir(btn);

// const changeStyle = (event) => {
//     event.target.style.border = 'none'
//     event.target.style.outline = '3px solid green'
// }

// btn.onfocus = changeStyle;


// const container = document.querySelector('.container');
// const btnWrapper = document.querySelector('.btn-wrapper');
// const btn = document.querySelector('.btn');

// container.addEventListener('click', () => console.log('container'))
// btnWrapper.addEventListener('click', (e) => {
//     e.stopPropagation();
//     console.log('btn wrapper');
// })

// const foo = (event) => {
//     // alert('hello');
//     console.log(event);
//     event.stopPropagation();
//     fun(event);
// }

// btn.addEventListener('click', (event) => {
    // event.stopImmediatePropagation();
    // foo(event);
// });

// btn.addEventListener('click', () => {
//     console.log('second event');
// })

// btn.addEventListener('dblclick', (event) => {
//     // event.stopImmediatePropagation();
//     foo(event);
// });


// const btn = document.querySelector('.btn');

// btn.addEventListener('click', () => {
//     console.log('1');
// })

// btn.addEventListener('click', (event) => {
//     console.log('2');
//     event.stopImmediatePropagation();
//     btn.removeEventListener('dblclick', () => {
//         console.log(3);
//     });
// }, true)

// btn.addEventListener('dblclick', (event) => {
//     console.log('detail', event.detail);
//     event.preventDefault();
//     console.log(3);

// });


// const btnWrapper = document.querySelector('.btn-wrapper');


// btnWrapper.addEventListener('mousedown', event => {
    //     // console.log(1);
//     event.target.style.background = 'red';
// });

// btnWrapper.addEventListener('mouseup', event => {
    //     // console.log(1);
    //     event.target.style.background = 'blue';
    // });
    
    // btnWrapper.addEventListener('mouseover', event => {
        //     event.target.style.background = 'green';
        // });
        
        // btnWrapper.addEventListener('mouseout', event => {
            //     event.target.style.background = 'gray';
// });

// let width = btnWrapper.clientWidth;

// // console.log(btnWrapper.clientWidth);

// btnWrapper.addEventListener('mousemove', event => {
//     console.log(1);
//     width++;
//     event.target.style.width = `${width}px`;
// });
    
    
// document.querySelector('.btn-wrapper').addEventListener('click', () => {console.log('without variable')});

// const foo = (component) => {
//     component.addEventListener('click', () => {});
// }

// const createDiv = () => {
//     let div = document.createElement('div');
//     div.addEventListener('click', () => console.log('div'))
// }


// const inputField = document.querySelector('.input-field');
// const nameError = document.querySelector('.name-field-error');


// inputField.addEventListener('keyup', event => {
//     const value = event.target.value;

//     if(value.length > 5) {
//         nameError.style.display = 'block';
//     } else {
//         nameError.style.display = 'none';
//     }

//     if(event.keyCode === 13) {
//         event.target.value = '';
//         alert('saved');
//     }

//     console.log(value);
// })


// const car = document.querySelector('.car');

// window.addEventListener('keyup', event => {
//     let top = car.offsetTop, right = car.offsetLeft;

//     switch(event.keyCode) {
//         case 40:
//             top += 10;
//             car.style.marginTop = `${top}px`;
//             car.style.transform = `rotate(90deg)`;
//             break;
//         case 39:
//             right += 10;
//             car.style.marginLeft = `${right}px`;
//             car.style.transform = `rotate(0deg)`;
//             break;
//         case 38:
//             top -= 10;
//             car.style.marginTop = `${top}px`;
//             car.style.transform = `rotate(-90deg)`;
//             break;
//         case 37:
//             right -= 10;
//             car.style.marginLeft = `${right}px`;
//             car.style.transform = `rotate(180deg)`;
//             break;
//         default: 
//             break;
//     }
// });

// let checked = false;
const toggle = document.querySelector('.toggle');

// toggle.addEventListener('click', () => {
//     if (checked) {
//         toggle.classList.remove('checked');
//     } else {
//         toggle.classList.add('checked');
//     }
//     checked = !checked;
// })
