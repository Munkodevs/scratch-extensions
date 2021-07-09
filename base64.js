const icon = "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTQgMkg2YTIgMiAwIDAgMC0yIDJ2MTZjMCAxLjEuOSAyIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjhsLTYtNnoiLz48cGF0aCBkPSJNMTQgM3Y1aDVNMTYgMTNIOE0xNiAxN0g4TTEwIDlIOCIvPjwvc3ZnPg==";

class Base64 {

  constructor() {}

  getInfo() {
    return {
      id: 'base64',
      name: 'Base64',

      color1: '#c34a4a',
      color2: '#b34242',
      color3: '#9f3838',

      menuIconURI: icon,

      blocks: [
        {
          opcode: 'decodeBase64',

          blockType: Scratch.BlockType.BOOLEAN,

          text: 'decode [DECODEVAL] from base64',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'SGkh'
            }
          }
        },
        {
          opcode: 'encodeBase64',

          blockType: Scratch.BlockType.BOOLEAN,

          text: 'encode [ENCODEVAL] from base64',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Hi!'
            }
          }
        }
      ]
    }
  }

  decodeBase64({DECODEVAL}) {
    return btoa(DECODEVAL);
  }

  encodeBase64({ENCODEVAL}) {
    return atob(ENCODEVAL);
  }

}

Scratch.extensions.register(new Base64());
