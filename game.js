const game = () => {
    let board = ["N", "N", "N", "N", "N", "N", "N", "N", "N"];

    function checkWin(board)
    {
        let game_end = true;

        if ( board[0] == board[1] && board[0] == board[2] && board[0] != "N" )
        {
            return board[0];
        }

        else if ( board[3] == board[4] && board[3] == board[5] && board[3] != "N" )
        {
            return board[3];
        }

        else if ( board[6] == board[7] && board[6] == board[8] && board[6] != "N" )
        {
            return board[6];
        }

        else if ( board[0] == board[3] && board[0] == board[6] && board[0] != "N" )
        {
            return board[0];
        }

        else if ( board[1] == board[4] && board[1] == board[7] && board[1] != "N" )
        {
            return board[1];
        }

        else if ( board[2] == board[5] && board[2] == board[8] && board[2] != "N" )
        {
            return board[2];
        }

        else if ( board[0] == board[4] && board[0] == board[8] && board[0] != "N" )
        {
            return board[0];
        }

        else if ( board[2] == board[4] && board[2] == board[6] && board[2] != "N" )
        {
            return board[2];
        }

        else
        {
            for (let i = 0; i < 9; i++)
            {
                if (board[i] == "N")
                {
                    game_end = false;
                    break;
                }
            }
        }

        return game_end;
    };

    const displayBoard = (game_board) => {
        const squares = document.querySelectorAll('.square');

        for ( let i = 0; i < game_board.length; i++ )
        {
            if ( game_board[i] == "X" )
            {
                squares[i].textContent = "X";
                squares[i].style.color = "red";
            }

            else if ( game_board[i] == "O" )
            {
                squares[i].textContent = "O";
                squares[i].style.color = "lightblue";
            }

            else if ( game_board[i] == "N" )
            {
                squares[i].textContent = "";
            }
        }
    };

    const playGame = () => {
        const squares = document.querySelectorAll('.square');
        const web_board = document.querySelector('.board')
        const title = document.querySelector('.title');
        let red_turn = true;
        let game_check = "NULL";

        for ( let i = 0; i < 9; i++ )
        {
            squares[i].addEventListener('click', () => {
                if ( red_turn && board[i] == "N" )
                {
                    board[i] = "X";
                    red_turn = false;
                    displayBoard(board);
                }

                else if ( !red_turn && board[i] == "N" )
                {
                    board[i] = "O";
                    red_turn = true;
                    displayBoard(board);
                }
            });
        }

        web_board.addEventListener('click', () => {
            game_check = checkWin(board);

            console.log(game_check);

            if ( game_check == "X" || game_check == "O" )
            {
                for ( let i = 0; i < 9; i++ )
                {
                    board[i] = "N";
                }

                title.innerHTML = `${game_check} Won`;
            }

            else if ( game_check == true )
            {
                for ( let i = 0; i < 9; i++ )
                {
                    board[i] = "N";
                }

                title.innerHTML = `Tie`;
            }

            else
            {
                title.innerHTML = ``;
            }

            displayBoard(board);
        });
    };

    return { playGame };
};

const tic_tac_toe = game();
tic_tac_toe.playGame();