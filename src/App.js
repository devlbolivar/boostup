import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getInfoCovid } from "./apis/api";
import "./App.css";
import Header from "./components/header/Header";
import Filters from "./components/filters/Filters";
import Charts from "./components/charts/Charts";
import Table from "./components/table/Table";

function App() {
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(getInfoCovid(filter));
  }, [filter]);

  return (
    <div className="App">
      <Header />
      <Filters />
      <Charts />
      <Table />
    </div>
  );
}

export default App;
