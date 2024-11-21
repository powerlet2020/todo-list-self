
document.querySelector('.add-task').disabled = true;
// document.querySelector('.delete-task').disabled = true;

document.querySelector('#text').onkeyup= ()=> {

    if(document.querySelector('#text').value.length > 0) {
        document.querySelector('.add-task').disabled = false;
    }else { document.querySelector('.add-task').disabled = true; }
}

document.querySelector('.delete-task').onclick = ()=> {
    document.querySelector('ol').lastElementChild.remove();git
}


document.querySelector('.add-task').onclick = () => {


    const task = document.querySelector('#text').value;

    const li = document.createElement('li')

    li.innerHTML = task


    document.querySelector('ol').appendChild(li)
    document.querySelector('#text').value = ''
    document.querySelector('.add-task').disabled= true;
}
