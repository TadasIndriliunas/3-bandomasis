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
    setTimeout(this.fetchCar, 2000);
    this.fetchCar();
    this.htmlElement = document.createElement('div');

    this.render();
  }

  render = () => {
    const { loading, Car } = this.state;
    if (loading) {
      this.htmlElement.innerHTML = '<div class="text-center"><img src="assets/loading.gif" /></div>';
    } else if (Car.length > 0) {
      this.htmlElement.innerHTML = '';
      const children = Car
        .map(({ id, ...carProps }) => new CarCardComponent({
          ...carProps,
          onDelete: () => this.deleteCar(id)
        }))
        .map(x => x.htmlElement)
      this.htmlElement.append(...children);
    } else {
      this.htmlElement.innerHTML = 'Nėra elementų';
    }
  }
}