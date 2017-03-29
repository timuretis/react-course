const middleware = () => next => action => {

  if (action.meta && action.meta.analytics) {
    const { event, data } = action.meta.analytics;
    // ga(event, data)
    clicktale.log(event, data);
  }


  next(action);

};

export default middleware;