const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');

let draggedItem = null;

for (let i = 0; i < list_items.length; i++) {
    const item = list_items[i]
};

item.addEventListener('dragstart', function (){
    let draggedItem;
    console.log('dragstart');
    draggedItem = this;
})

item.addEventListener('dragend', function(){
    console.log('dragend');
    draggedItem = null; 
}) 

for (let j = 0; j < lists.length; i++){
    const  list = lists[j]
};