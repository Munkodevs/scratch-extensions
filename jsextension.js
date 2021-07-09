class JS {

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
          opcode: 'evalcom',

          blockType: Scratch.BlockType.COMMAND,

          text: 'execute [COM]',
          arguments: {
            COM: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'console.log("Hi!")'
            }
          }
        }
      ]
    }
  }

  evalrep({REP}) {
    return eval(REP);
  }

  evalcom({COM}) {
    eval(COM);
  }

}

Scratch.extensions.register(new JS());
