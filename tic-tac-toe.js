document.addEventListener('DOMContentLoaded', function() {
    let turn = 1;
    let state = Array(9).fill(null);
    let marker;
    document.querySelectorAll('#board div').forEach(function(cell, index){
        cell.classList.add('square');
        cell.addEventListener('click', function(){
            if (turn % 2 === 1)
            {
                marker = 'X';
                cell.classList.add('X');
            }
            else 
            {
                marker = 'O';
                cell.classList.add('O');
            }
            cell.textContent = marker;
            state[index] = marker;
            turn+=1;
        })
    })
});

