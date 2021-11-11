import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getInfoCovid } from "./apis/api";
import "./App.css";
import {
  Dimmer,
  Loader,
  Image,
  Segment,
  Container,
  Divider,
} from "semantic-ui-react";
import Header from "./components/header/Header";
import Filters from "./components/filters/Filters";
import Charts from "./components/charts/Charts";
import TablePadded from "./components/table/Table";

function App() {
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state.filter);
  const { loading } = useSelector((state) => state.loading);
  const { date } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(getInfoCovid(filter));
  }, [filter]);

  let render = loading ? (
    <Segment>
      <Dimmer active inverted>
        <Loader inverted content="Loading" />
      </Dimmer>

      <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
    </Segment>
  ) : (
    <>
      <Header />
      <Divider />
      <Filters />
      <Charts />
      {date && (
        <>
          <Divider />
          <h4>Day selected: {date}</h4>
          <TablePadded />
        </>
      )}
    </>
  );
  return <Container>{render}</Container>;
}

export default App;
