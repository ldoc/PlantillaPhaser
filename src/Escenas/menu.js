import Phaser from 'phaser';

export class Menu extends Phaser.Scene{
    
    constructor(){
        super({key:"menu"})
    }

    preload (){
      //Cargamos todos los recursos (imagenes, sprites, audio, etc)
    }

    create (){
      // Creamos los objetos iniciales de la escena
      this.add.text(this.game.canvas.width/2,this.game.canvas.height/2,"Angry Dani",{fontSize:40}).setOrigin(0.5,0.5);
    }

    update (){
      // Cada vez que se actualiza la escena, si queremos hacer algo lo ponemos aquí
    }

}

