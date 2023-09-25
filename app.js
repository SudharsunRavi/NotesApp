const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.addNote');
let notes=document.querySelectorAll('.noteBox');


createBtn.addEventListener('click', ()=>{
    let inputBox=document.createElement('p')
    inputBox.classList.add('noteBox');
    inputBox.setAttribute('contenteditable','true');
    let delImg=document.createElement('img');
    delImg.src='images/delete.png';
    delImg.classList.add('deleteBtn');
    notesContainer.appendChild(inputBox).appendChild(delImg);
});

notesContainer.addEventListener('click', function(e){
    if(e.target.tagName==='IMG'){
        e.target.parentElement.remove();
        updateStorage();
    }

    else if(e.target.tagName==='P'){
        notes=document.querySelectorAll('.noteBox');
        notes.forEach(nt=>{
            nt.onkeyup=function(){
                updateStorage();
            };
        });
    }
});

function showNotes(){
    notesContainer.innerHTML=localStorage.getItem('notes');
}
showNotes();

function updateStorage(){
    localStorage.setItem('notes', notesContainer.innerHTML);
}


document.addEventListener('keydown', event=>{
    if (event.key === 'Enter') {
        document.execCommand('insertLineBreak');
        event.preventDefault();
    }
});





