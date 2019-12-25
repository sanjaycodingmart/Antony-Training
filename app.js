const body = document.getElementById('main');
const todoList = [];
var deletedList = null;
let address = 0;
const newElement = (element) => {
    return document.createElement(element);
}

const newText = (text) => {
    return document.createTextNode(text);
}

//Title Header
const title = newElement('h1');
const titleText = newText('Todo List');
title.appendChild(titleText);
body.appendChild(title);

//Text Input
const todoInput = newElement('input');
todoInput.setAttribute('type', 'text');
todoInput.setAttribute('id', 'inputFeild');
body.appendChild(todoInput);
const inputFeild = document.getElementById('inputFeild'); // input
inputFeild.placeholder = "Enter what to do . . ."
inputFeild.required;

// Button Creation
const addBtn = newElement('button');
addBtn.setAttribute('id', 'btn-add');
body.appendChild(addBtn);
const btn = document.getElementById('btn-add'); // btn
btn.innerText = "Add";

//table creation
const table = newElement('table');
const tableRow = newElement('tr');
const selectHeader = newElement('th');
const TodoHeader = newElement('th');
const deleteHeader = newElement('th');
// selectHeader.appendChild(newText('Select'));
TodoHeader.appendChild(newText('LIST TODO'));
// deleteHeader.appendChild(newText('Delete'));
table.appendChild(tableRow);
// tableRow.appendChild(selectHeader);
tableRow.appendChild(TodoHeader);
// tableRow.appendChild(deleteHeader);
body.appendChild(table);
const div = newElement('div');
table.appendChild(div);

const undoHandler = () => {
    // console.log(deletedList);
    // table.appendChild(deletedList);
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild);
    }
    todoList.forEach(todo => {
        const td1 = newElement('td');
        td1.appendChild(newCheckBox());
        td1.setAttribute('id', address++);
        const td2 = newElement('td');
        td2.appendChild(newText(todo));
        const td3 = newElement('td');
        const deleteBtn = newElement('button');
        deleteBtn.innerText = "Delete";
        deleteBtn.disabled = true;
        deleteBtn.onclick = deleteHandler;
        deleteBtn.setAttribute('id', 'btn-delete');
        td3.appendChild(deleteBtn);
        const tr = newElement('tr');
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        div.appendChild(tr);
    });
}

//Undo Button 
const undoBtn = newElement('button');
undoBtn.innerText = "UNDO";
undoBtn.setAttribute('id', 'undo-btn');
undoBtn.onclick = undoHandler;

const tableData = newElement('td');

const checked = event => {
    if (event.target.checked) {
        const parent = event.target.parentNode.parentNode;
        const [check, text, btn] = parent.childNodes;
        text.style.textDecoration = 'line-through';
        btn.childNodes[0].disabled = false;
        btn.childNodes[0].style.backgroundColor = "seashell";
        btn.childNodes[0].style.color = "red";
    } else {
        const parent = event.target.parentNode.parentNode;
        const [check, text, btn] = parent.childNodes;
        text.style.textDecoration = 'none';
        btn.childNodes[0].disabled = true;
    }
}

// Checkbox hello
const newCheckBox = () => {
    const checkBox = document.createElement("INPUT");
    checkBox.setAttribute("type", "checkbox");
    checkBox.onclick = checked;
    return checkBox;
}

const deleteHandler = event => {
    const parent = event.target.parentNode.parentNode;
    deletedList = parent;
    console.log(deletedList);
    parent.parentNode.removeChild(parent);
    body.appendChild(undoBtn);
    setTimeout(() => {
        deletedList = null;
        undoBtn.parentNode.removeChild(undoBtn);
    }, 3000);
}


//Click Event Handler
btn.addEventListener('click', () => {
    todoList.push(inputFeild.value);
    const td1 = newElement('td');
    td1.appendChild(newCheckBox());
    td1.setAttribute('id', address++);
    const td2 = newElement('td');
    td2.appendChild(newText(inputFeild.value));
    const td3 = newElement('td');
    const deleteBtn = newElement('button');
    deleteBtn.innerText = "Delete";
    deleteBtn.disabled = true;
    deleteBtn.onclick = deleteHandler;
    deleteBtn.setAttribute('id', 'btn-delete');
    td3.appendChild(deleteBtn);
    const tr = newElement('tr');
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    div.appendChild(tr);
    inputFeild.value = '';
});