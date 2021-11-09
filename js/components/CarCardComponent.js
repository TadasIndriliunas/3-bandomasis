class CarCardComponent {
  constructor(props) {
    this.props = props;
    this.init();
  }

  init = () => {
    const {brand, model, year, fuelTypes,imgSrc, price} = this.props;
    const {amount, currency} = price;

    this.htmlElement = document.createElement('article');
    this.htmlElement.className = 'card shadow p-3';
    this.htmlElement.className = 'card shadow';
    this.htmlElement.innerHTML = `
    <img src="${imgSrc}"  height="300px" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">${brand}</h5>
      <h5 class="card-title">${model}</h5>
      <p class="card-title">Year: ${year}</p>
      <p class="card-title">Fuel Type: ${fuelTypes}</p>
      <div>
        <span>Price:</span>
        ${amount}${currency}
      </div>
    </div>`;
  }
}