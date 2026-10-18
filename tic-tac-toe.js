document.addEventListener('DOMContentLoaded', function() {
    let turn = 0;
    let state = Array(9).fill(null);
    let marker;
    let wCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8]];
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

            let winner = winner_check(state, wCombinations);
            if (winner!=null){
                let status = document.querySelector('#status');
                status.textContent = `Congratulations! ${winner} is the Winner!`;
                status.classList.add('you-won');
            }
        })
    })
});

function winner_check(state, wCombinations)
{
    for (let combination of wCombinations){
        let x = combination[0];
        let y = combination[1];
        let z = combination[2];

        if (state[x] && state[x] === state[y] && state[y] === state[z]){
            return state[x];
        }
    }
    return null;
}