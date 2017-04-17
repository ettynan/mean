document.addEventListener("DOMContentLoaded", function(){
    var game = {
        players:[],
        addPlayer: function(){}
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