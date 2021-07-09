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

  decodeBase64({REP}) {
    return eval(REP);
  }

  encodeBase64({COM}) {
    try {
      Promise.resolve(eval(value))
        .then(output => {
          vm.postIOData('cloud', {
            varUpdate: {
              name: CLOUD_PREFIX + 'eval output',
              value: output
            }
          });
        })
        .catch(postError);
    } catch (err) {
      postError(err);
    }

  }

}

Scratch.extensions.register(new JS());
