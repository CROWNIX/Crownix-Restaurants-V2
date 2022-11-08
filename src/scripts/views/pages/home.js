import RestaurantApiSource from '../../data/restaurantapi-source';
import { restaurantCard, requestFailed } from '../templates/template-creator';

const home = {
  async render() {
    return `
    <img class="heros heros-list" src="./images/heros/hero-image_4.jpg" alt="">
    <p class="restaurant__name">Crownix <span>Restaurants</span></p>

    <div class="content" id="content">
      <section class="search" id="search">
        <div class="search__title">
            <h2>List Restaurants</h2>
        </div>
        <div>
            <input class="search-input" type="search" placeholder="Search..." id="searchInput" />
        </div>
      </section>
      <section class="cards">
      </section>
      <div class="loader"></div>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantApiSource.listRestaurant();
    const listRestaurants = document.querySelector('.cards');
    const loader = document.querySelector('.loader');

    try {
      let cards = '';
      restaurants.forEach((restaurant) => {
        cards += restaurantCard(restaurant);
      });

      loader.style.display = 'none';
      listRestaurants.innerHTML = cards;
    } catch {
      loader.style.display = 'none';
      alert('Please check your internet connection');
      listRestaurants.innerHTML = requestFailed();
    }
  },
};

export default home;
