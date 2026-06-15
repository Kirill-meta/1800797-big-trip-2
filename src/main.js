import AppPresenter from './presenter/app-presenter.js';
import FilterView from './view/filters.js';
import SortView from './view/sort.js';
import EditFormView from './view/editForm.js';
import {render} from './render.js';

const app = new AppPresenter();
app.init();

// const filter = document.querySelector('.trip-controls__filters');
// const sort = document.querySelector('.trip-events');
// const editForm = document.querySelector('.trip-events__item');

// render(new FilterView(), filter);
// render(new SortView(), sort);
// render(EditFormView(), editForm);
