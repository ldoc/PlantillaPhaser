import Phaser from 'phaser';

export class Juego extends Phaser.Scene{
    
    constructor(){
        super({key:"juego"})
    }

    preload (){
      //Cargamos todos los recursos (imagenes, sprites, audio, etc)
        this.load.spritesheet('calabaza','recursos/calabaza.png',{ frameWidth: 128, frameHeight: 128 });
        // Load body shapes from JSON file generated using PhysicsEditor
        this.load.json('shapes', 'recursos/calabaza.json');
    }

    create (){
      // Creamos los objetos iniciales de la escena
      this.matter.world.setBounds(0, 0, this.game.config.width, this.game.config.height);
      this.matter.add.sprite(200,200,'calabaza',0);  
    }

    update (){
      // Cada vez que se actualiza la escena, si queremos hacer algo lo ponemos aquí
    }

}

