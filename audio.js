class Audio {

  constructor() {}

  getInfo() {
    return {
      id: 'audio',
      name: 'Audio',

      color1: '#c34a4a',
      color2: '#b34242',
      color3: '#9f3838',

      blocks: [
        {
          opcode: 'evalreps',

          blockType: Scratch.BlockType.REPORTER,

          text: 'execute [YE]',
          arguments: {
            YE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Math.PI'
            }
          }
        },
        {
          opcode: 'songplay',

          blockType: Scratch.BlockType.COMMAND,

          text: 'play song [SONG]',
          arguments: {
            SONG: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'yeah'
            }
          }
        }
      ]
    }
  }

  evalreps({YE}) {
    return eval(YE);
  }

  songplay({SONG}) {
    var audio = new Audio("http://www.storiesinflight.com/html5/audio/flute_c_long_01.wav")
    audio.play();
  }

}

Scratch.extensions.register(new Audio());
