const debounced = {};

const debounce = () => next => action => {

  if (action.meta && action.meta.debounce) {

    debounced[action.type] = action;

    setTimeout(() => {
      next(debounced[action.type])
      delete(debounced[action.type])
    }, action.meta.debounce)
  }


}