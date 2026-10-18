document.addEventListener('DOMContentLoaded', function() {
    let turn = 0;
    let state = Array(9).fill(null);
    let marker;
    document.querySelectorAll('#board div').forEach(function(cell, index){
        cell.classList.add('square');

        cell.addEventListener('mouseover', function(){
            cell.classList.add('hover');
        })
        cell.addEventListener('mouseout', function(){
            cell.classList.remove('hover');
            }
        )

        cell.addEventListener('click', function(){
            if (turn % 2 === 0)
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

