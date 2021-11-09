class CarGridComponent {
  constructor() {
    this.state = {
      Car: [],
      loading: false
    };
    this.init();
  }
  
  saveCar = Car => {
    this.state = { Car, loading: false };

    this.render();
  }

  showError = msg => alert(msg);

  fetchCar = () => API.fetchCar(this.saveCar, this.showError);

  init = () => {
    this.state.loading = true;
    this.fetchCar();
    this.htmlElement = document.createElement('div');

    this.render();
  }

  render = () => {
    const { loading, Car } = this.state;
    if (loading) {
      this.htmlElement.innerHTML = 'Siunčiama...';
    } else if (Car.length > 0) {
      this.htmlElement.innerHTML = 'Parsiųsta!';
    } else {
      this.htmlElement.innerHTML = 'Nėra elementų';
    }
  }
}