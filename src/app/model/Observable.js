class Observable {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    const removeIndex = this.observers.findIndex((obs) => {
      return observer === obs;
    });

    if (removeIndex !== -1) {
      this.observers = this.observers.slice(removeIndex, 1);
    }
  }

  notify(data) {
    console.log('this.observers', this.observers.length);
    if (this.observers.length > 0) {
      this.observers.forEach((observer) => observer.update(data));
    }
  }
}

export default Observable;
