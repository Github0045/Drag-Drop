// Quering The Dom
const img = document.querySelector('.img');
const empties = document.querySelectorAll('.empty');

// Adding The Functionalty
img.addEventListener('dragstart', dragStart);
img.addEventListener('dragend', dragEnd);
for (let emptyEl of empties) {
    emptyEl.addEventListener('dragleave', dragLeave);
    emptyEl.addEventListener('dragenter', dragEnter);
    emptyEl.addEventListener('dragover', dragOver);
    emptyEl.addEventListener('drop', drop);
}

// Creating The Functions
function dragStart() {
    setTimeout(() => img.classList = 'hide', 0);
}
function dragEnd() {
    img.classList = 'img';
}
function dragEnter(e) {
    e.preventDefault();
    this.classList += ' hover';
}
function dragLeave() {
    this.classList = 'empty';
}
function dragOver(e) {
    e.preventDefault();
}
function drop() {
    this.append(img);
    this.classList = 'empty';
}