class Audio {

  constructor() {}

  getInfo() {
    return {
      id: 'js',
      name: 'JavaScript',

      color1: '#c34a4a',
      color2: '#b34242',
      color3: '#9f3838',

      blocks: [
        {
          opcode: 'evalrep',

          blockType: Scratch.BlockType.REPORTER,

          text: 'execute [REP]',
          arguments: {
            REP: {
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

  evalrep({REP}) {
    return eval(REP);
  }

  songplay({SONG}) {
    var audio = new Audio("http://www.storiesinflight.com/html5/audio/flute_c_long_01.wav")
    audio.play();
  }

}

Scratch.extensions.register(new Audio());