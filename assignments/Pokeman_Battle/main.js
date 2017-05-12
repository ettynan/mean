document.addEventListener("DOMContentLoaded", function(){
    var game = {
        players:[],
        addPlayer: function(){
            players.push;
            console.log(player);
            var player = document.getElementById('button').onclick;
            console.dir(player);
            // button.onclick = function(e){
            player.push;
            console.log(player);
        }
    };
    function playerConstructor(name){
        player = {};
        player.name = name;
            player.hand = [];
        player.addCard = function(card){
            player.hand.push(card);
        };
        return player;
    };
    //Add a new player to the game object's property when a user chooses
    
});