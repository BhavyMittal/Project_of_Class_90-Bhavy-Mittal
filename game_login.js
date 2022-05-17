function adduser(){

    player1name = document.getElementById("player1_name").value;
    player2name = document.getElementById("player2_name").value;

    localStorage.setItem("Name_of_player_1" , player1name);
    localStorage.setItem("Name_of_player_2" , player2name);

    window.location="game.html";
 }