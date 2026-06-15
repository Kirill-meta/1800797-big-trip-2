import { editFormElement, filtersElement, sortElement } from '../elemenets.js';
import { render } from '../render.js';
import EditFormView from '../view/editForm.js';
import FilterView from '../view/filters.js';
import ListEventsView from '../view/list-events-view.js';
import PointView from '../view/point-view.js';
import SortView from '../view/sort.js';


export default class AppPresenter {
  filterView = new FilterView();
  sortView = new SortView();
  editForm = new EditFormView();
  listEventsView = new ListEventsView();

  init() {
    render(this.filterView, filtersElement);
    render(this.sortView, sortElement);
    render(this.listEventsView, sortElement);

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.listEventsView.getElement());
    }
  }
}
