import { filtersElement, sortElement } from '../elemenets.js';
import { render } from '../render.js';
import EditFormView from '../view/edit-form-view.js';
import FilterView from '../view/filters-view.js';
import FormView from '../view/form-view.js';
import ListEventsView from '../view/list-events-view.js';
import PointView from '../view/point-view.js';
import SortView from '../view/sort-view.js';


export default class AppPresenter {
  filterView = new FilterView();
  sortView = new SortView();
  editForm = new EditFormView();
  listEventsView = new ListEventsView();
  // formView = new FormView();

  init() {
    render(this.filterView, filtersElement);
    render(this.sortView, sortElement);
    render(this.listEventsView, this.sortView.getElement());
    render(new FormView, this.listEventsView.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointView, this.sortView.getElement());
    }
  }
}
