let id = 0;

document.getElementById('addSong').addEventListener('click', () => {
    let list = document.getElementById('list');
    let newRow = list.insertRow(1);
    newRow.setAttribute('id', `item-${id}`);
    newRow.insertCell(0).innerHTML = document.getElementById('songInput').value;
    newRow.insertCell(1).innerHTML = document.getElementById('artistInput').value;
    let action = newRow.insertCell(2);
    action.appendChild(removeBtn(id++ ));
    document.getElementById('songInput','artistInput').value = ''; 
});

function removeBtn(id){
    let rmv = createElement('button');
    rmv.className = "btn btn-light btn-outline-warning edit";
    rmv.id = id;
    rmv.innerHTML = 'Remove';
    rmv.onclick = () => {
        let removedSong = document.getElementById(`${id}`)
        removedSong.parentNode.removeChild(removedSong);
    }

    return rmv;

}
