class TOOLS {

  constructor() {}

  getInfo() {
    return {
      id: 'tools',
      name: 'Tools yknow',

      color1: '#c34a4a',
      color2: '#b34242',
      color3: '#9f3838',

      blocks: [
        {
          opcode: 'songplay',

          blockType: Scratch.BlockType.COMMAND,

          text: 'run song [SONG]',
          arguments: {
            SONG: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://audio.ngfiles.com/36000/36355_newgrounds_techoc.mp3'
            }
          }
        }
      ]
    }
  }

  songplay({SONG}) {
    var song = new Audio(SONG); song.play(); console.log("Running song!");
  }

}

Scratch.extensions.register(new TOOLS());
class TOOLS {

  constructor() {}

  getInfo() {
    return {
      id: 'tools',
      name: 'Tools yknow',

      color1: '#c34a4a',
      color2: '#b34242',
      color3: '#9f3838',

      blocks: [
        {
          opcode: 'songplay',

          blockType: Scratch.BlockType.COMMAND,

          text: 'run song [SONG]',
          arguments: {
            SONG: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://audio.ngfiles.com/36000/36355_newgrounds_techoc.mp3'
            }
          }
        }
      ]
    }
  }

  songplay({SONG}) {
    var song = new Audio(SONG); song.play(); console.log("Running song!");
  }

}

Scratch.extensions.register(new TOOLS());
