import View from './View';
import icons from 'url:../../img/icons.svg';

class paginationView extends View {
  _parentElement = document.querySelector('.pagination');
  addHandelrClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }
  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    function renderNext() {
      return `
            <button data-goto="${
              curPage + 1
            }" class="btn--inline pagination__btn--next">
                  <span>Page ${curPage + 1}</span>
                  <svg class="search__icon">
                    <use href="${icons}#icon-arrow-right"></use>
                  </svg>
              </button>`;
    }
    function renderPrev() {
      return `
        <button data-goto="${curPage - 1}" 
        class="btn--inline pagination__btn--prev">
              <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
              </svg>
              <span>Page ${curPage - 1}</span>
      </button>
            `;
    }

    console.log(numPages);
    //page1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return renderNext();
    }
    //last page
    if (curPage === numPages && numPages > 1) {
      return renderPrev();
    }
    //other page
    if (curPage < numPages) {
      return `${renderPrev()} ${renderNext()}`;
    }
    //page1, and there are NO other pages
    return ' ';
  }
}
export default new paginationView();
