const SNAKEGAME = {
    __INIT__ : function(){
        SNAKEGAME.GAME.buildTab();
        SNAKEGAME.GAME.executeGame();
    },
    DATA: {
        matrizNumber : 15,
        matriz: [],
    },
    GAME : {
        assignPlayer : function(){
            SNAKEGAME.DATA.matriz[0][0] = 'game__tab__node__box-played'
        },
        listeng : function(){
            document.addEventListener(
                "keydown",
                (event) => {
                    console.log(event.code);
                }
            );
        },
        buildTab : function(){
            for (let index = 0; index < SNAKEGAME.DATA.matrizNumber; index++) {
                SNAKEGAME.DATA.matriz.push([])
                for (let index2 = 0; index2 < SNAKEGAME.DATA.matrizNumber; index2++) {
                    SNAKEGAME.DATA.matriz[index].push(null)
                } 
            }
        },
        drawGame : function(){
            var node = '';
            document.getElementById("game__tab").innerHTML = '';
            for (let index = 0; index < SNAKEGAME.DATA.matriz.length; index++) {
                node += '<div class="game__tab__node">';
                for (let index2 = 0; index2 < SNAKEGAME.DATA.matriz[index].length; index2++) {
                    const classPoint = SNAKEGAME.DATA.matriz[index][index2] == null ? '' :  SNAKEGAME.DATA.matriz[index][index2];
                        node += '<div class="game__tab__node__box '+classPoint+'"></div>';
                    
                } 
                node += '</div">';
                document.getElementById("game__tab").insertAdjacentHTML('beforeend',  node ); 
                node = '';
            }
        },
        executeGame : function(){
            SNAKEGAME.GAME.assignPlayer();
            SNAKEGAME.GAME.listeng();
            setInterval(function(){

                SNAKEGAME.GAME.drawGame();

            },1000)
        }
    }
}


SNAKEGAME.__INIT__();