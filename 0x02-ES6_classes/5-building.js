export default class Building {
  constructor(sqft) {
  //  this._sqft = typeof sqft === 'number' ? sqft : 0;
    if (new.target !== Building && this.evacuationWarningMessage === undefined) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    if (typeof newSqft === 'number') {
      this._sqft = newSqft;
    }
  }
  /*
  executionWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  } */
}
