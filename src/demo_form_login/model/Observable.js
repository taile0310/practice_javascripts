class Observable {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(message, isSuccess) {
    if (this.observers.length > 0) {
      console.log(message);
      this.observers.forEach((observer) => observer.showMessage(message, isSuccess));
    }
  }
}

export default Observable;
