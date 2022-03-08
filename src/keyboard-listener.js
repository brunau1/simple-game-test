export default class KeyboardListener {
  constructor(document, player) {
    this.player = player;
    document.addEventListener('keydown', this.handleKeydown)
  }

  handleKeydown(event) {
    const keyPressed = event.key;

    console.log("Player: " + this.player.id + "key pressed: ", keyPressed);

    const objectIndex = this.player.keyMap.map(keyConfig => keyConfig.key).indexOf(keyPressed);
    const action = this.player.keyMap[objectIndex].action;
    action();
  }

  static create(document, player) {
    return new KeyboardListener(document, player);
  }
}