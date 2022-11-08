import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import {
  restaurantCard,
  emptyFavorite,
} from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <img class="heros heros-favorite" src="./images/heros/hero-image_2.jpg" alt="">
      <p class="favourite__restaurant">Favorite <span>Restaurant</span></p>

      <div id="favoriteContent">
        <div class="loader"></div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#favoriteContent');
    const loader = document.querySelector('.loader');
    if (restaurants.length) {
      let cards = '';
      restaurants.forEach((restaurant) => {
        cards += restaurantCard(restaurant);
      });

      loader.style.display = 'none';
      restaurantsContainer.innerHTML = cards;
    } else {
      loader.style.display = 'none';
      restaurantsContainer.innerHTML = emptyFavorite();
    }
  },
};

export default Favorite;
