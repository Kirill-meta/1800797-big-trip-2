import { editForm, filtersElement, sort } from '../elemenets.js';
import { render } from '../render.js';
import EditFormView from '../view/editForm.js';
import FilterView from '../view/filters.js';
import SortView from '../view/sort.js';


export default class AppPresenter {
  filterView = new FilterView();
  sortView = new SortView();
  editForm = new EditFormView();
  init() {
    render(this.filterView, filtersElement);
    for (let i = 1; i < 3; i++) {
      render(this.editForm, editForm);
    }
    render(this.sortView, sort);
  }
}
