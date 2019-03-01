class Ventti {

  constructor() {
    this._set = this._createSet();
    this._userHand = [];
    this._hostHand = [];
  }

  playUser() {
    // user draws a card
    this._userHand.push(this._drawCard());
  }

  playHost() {
    // host draws card if needed
    if (this._needCard(this._hostHand)) {
      this._hostHand.push(this._drawCard());
      return true;
    } else {
      return false;
    }
  }

  // 1 - user, -1 - host, 0 - tie
  getWinner() {
    let userCount = this._countHand(this._userHand)
    let hostCount = this._countHand(this._hostHand)

    if (userCount > 21 && hostCount > 21) {
      return 0;
    }

    if (userCount <= 21 && hostCount <= 21) {
      if (userCount > hostCount) {
        return 1
      } else {
        return -1
      }
    }

    if (userCount > 21) {
      return -1
    }

    return 1
  }

  getUserHand() {
    return this._userHand;
  }

  getHostHand() {
    return this._hostHand;
  }

  _drawCard() {
    let pos = Math.floor(Math.random() * this._set.length);
    return this._set.splice(pos, 1)[0];
  }

  _createSet() {
    let set = []
    for (let i = 100; i < 500; i += 100) {
      for (let j = 2; j < 15; j++) {
        set.push(i + j);
      }
    }
    return set;
  }

  _needCard(hand) {
    return this._countHand(hand) < 17;
  }

  _countHand(hand) {
    return hand.reduce((acc, val) => acc + val % 100, 0)
  }

}