import React, { useEffect } from 'react';
import './App.scss';
import { Context } from './components/functions/Context';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';

import { fetchGoods, selectGoods, selectStatus, selectError } from './components/store/goodsListSlice';



function App() {
  const dispatch = useDispatch(),
    error = useSelector(selectError),
    status = useSelector(selectStatus),
    goods = useSelector(selectGoods);

  useEffect(() => {
    dispatch(fetchGoods());
  }, [dispatch]);

  return (
    <Context.Provider value={{

    }}>
      <div className="App">

      </div>
    </Context.Provider>
  );
}
export default App;
