const SNAKEGAME = {
    __INIT__: function () {
        SNAKEGAME.GAME.executeGame();
    },
    DATA: {
        matrizNumber: 15,
        matriz: [],
        direction: 'ArrowRight',
        coordinates : [[0,0]],
        finish: false,

    },
    GAME: {
        assignPlayer: function () {
            try{
                SNAKEGAME.DATA.coordinates.forEach(([pointX , pointY]) => {
                    SNAKEGAME.DATA.matriz[pointX][pointY] = 'game__tab__node__box-played'       
                });
            }catch(e){
               document.getElementById("game__message").innerHTML = 'Perdiste';
               SNAKEGAME.DATA.finish = true;
            }
        },
        listeng: function () {
            document.addEventListener(
                "keydown",
                (event) => {
                    SNAKEGAME.DATA.direction = event.code;
                }
            );
        },
        move: async function (type) {
            const [posX , posY] =  SNAKEGAME.DATA.coordinates[0]
            SNAKEGAME.DATA.direction = type;
                switch (type) {

                    case 'ArrowUp':
                        SNAKEGAME.DATA.coordinates = [];
                        SNAKEGAME.DATA.coordinates.push([posX-1, posY]);
                        break;
                    case 'ArrowDown':
                        SNAKEGAME.DATA.coordinates = [];
                        SNAKEGAME.DATA.coordinates.push([posX+1, posY]);
                        break;
                    case 'ArrowLeft':
                        SNAKEGAME.DATA.coordinates = [];
                        SNAKEGAME.DATA.coordinates.push([posX, posY-1]);
                        break;
                    case 'ArrowRight':
                        SNAKEGAME.DATA.coordinates = [];
                        SNAKEGAME.DATA.coordinates.push([posX, posY+1]);
                        break;
                }

                await new Promise(r => setTimeout(r, 2000));
        },
        buildTab: function () {
            SNAKEGAME.DATA.matriz = [];
            for (let index = 0; index < SNAKEGAME.DATA.matrizNumber; index++) {
                SNAKEGAME.DATA.matriz.push([])
                for (let index2 = 0; index2 < SNAKEGAME.DATA.matrizNumber; index2++) {
                    SNAKEGAME.DATA.matriz[index].push(null)
                }
            }
        },
        drawGame: function () {
            var node = '';
            document.getElementById("game__tab").innerHTML = '';
            for (let index = 0; index < SNAKEGAME.DATA.matriz.length; index++) {
                node += '<div class="game__tab__node">';
                for (let index2 = 0; index2 < SNAKEGAME.DATA.matriz[index].length; index2++) {
                    const classPoint = SNAKEGAME.DATA.matriz[index][index2] == null ? '' : SNAKEGAME.DATA.matriz[index][index2];
                    node += '<div class="game__tab__node__box ' + classPoint + '"></div>';

                }
                node += '</div">';
                document.getElementById("game__tab").insertAdjacentHTML('beforeend', node);
                node = '';
            }
        },
        executeGame: function () {
            SNAKEGAME.GAME.listeng();
            setInterval(function () {
                if(!SNAKEGAME.DATA.finish){
                    SNAKEGAME.GAME.buildTab();
                    SNAKEGAME.GAME.assignPlayer();
                    SNAKEGAME.GAME.drawGame();
                    SNAKEGAME.GAME.move( SNAKEGAME.DATA.direction);
                }
            }, 500)

        }
    }
}


SNAKEGAME.__INIT__();