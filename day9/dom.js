//Accessing element
//by ID
// const heading =document.getElementById('heading')
// console.log(heading);

//by className
// const heading = document.getElementsByClassName('heading1')
// console.log(heading);

//by tagName
const heading = document.getElementsByTagName('h1')
console.log(heading)

//by querySelector
const listItems = document.querySelectorAll('#list li')
console.log(listItems)

console.log(heading[1])
console.log(listItems[1])

//Modifying Elements
//modifying content using innerHTML
heading[0].innerHTML = "Learning DOM Manipulation"

//using textContent
heading[1].textContent = "Element Manipulation"

//setting attributes
heading[1].setAttribute('class', 'highlight')

// //using style property
// const button = document.getElementById('btn')
// button.style.backgroundColor = 'skyblue';

//creating elements
const container = document.getElementsByClassName('container');
const newParagraph = document.createElement('p');
newParagraph.textContent = "This is a new parapraph"

container[0].appendChild(newParagraph);


//handing events
const button = document.getElementById('btn');
button.addEventListener('click',addListItem);

function addListItem() {
    const newListItem = document.createElement('li')
    newListItem.textContent = "Wash Dishes"

    document.getElementById('list').appendChild(newListItem)
}