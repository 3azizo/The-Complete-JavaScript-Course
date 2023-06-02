import * as model from './model';
import recipeView from './views/recipeView';

import icons from 'url:../img/icons.svg'; //parcel2
import 'core-js/stable';
import 'regenerator-runtime/runtime';

console.log(icons);
// const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    //1)loding recipe
    await model.loadRecipe(id);

    // 2)Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
};
['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);
