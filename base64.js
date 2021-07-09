class Base64 {

  constructor() {}

  getInfo() {
    return {
      id: 'base64',
      name: 'Base64',

      color1: '#c34a4a',
      color2: '#b34242',
      color3: '#9f3838',

      blocks: [
        {
          opcode: 'decodeBase64',

          blockType: Scratch.BlockType.REPORTER,

          text: 'decode [DECODEVAL] from base64',
          arguments: {
            DECODEVAL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'SGkh'
            }
          }
        },
        {
          opcode: 'encodeBase64',

          blockType: Scratch.BlockType.REPORTER,

          text: 'encode [ENCODEVAL] from base64',
          arguments: {
            ENCODEVAL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Hi!'
            }
          }
        }
      ]
    }
  }

  decodeBase64({DECODEVAL}) {
    return atob(DECODEVAL);
  }

  encodeBase64({ENCODEVAL}) {
    return btoa(ENCODEVAL);
  }

}

Scratch.extensions.register(new Base64());
