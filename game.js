class Game {
    constructor() {}
    getstate() {
        var statedata = database.ref("gameState");
        statedata.on("value", function(data) {
            gameState = data.val();
        })
    }
    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
        if (gameState === 0) {
            player = new Player();
            var playercountdata = await database.ref("playerCount").once("value");
            if (playercountdata.exists()) {
                playerCount = playercountdata.val();
                player.getplayercount()


            } 
            form = new Form();
            form.display();
        }
        car1=createSprite(100,200);
    car2=createSprite(300,200);
    car3=createSprite(500,200);
    car4=createSprite(700,200);
cars=[car1,car2,car3,car4];
    }
    play() {
        form.hide();
        
        Player.getplayerdetails();

        if(allplayers!==undefined)
        {
            background(rgb(198,135,103));
            var x=0;
            var y;
            var index=0;
           // var display_position=130;
            for(var plr in allplayers){
index=index+1;
x=x+200,
y=displayHeight-allplayers[plr].distance;
cars[index-1].x=x;
cars[index-1].y=y;
if(index===player.index)
{
    cars[index - 1].shapeColor = "red";
    camera.position.x=displayWidth/2;
    camera.position.y=cars[index-1].y
     
}
            
            } 
    
    }


        if (keyIsDown(UP_ARROW)&& player.index!==null) {
            player.distance += 50;
            player.updatend();
        }
       
drawSprites();
    }

    
}