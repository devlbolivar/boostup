import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataCovidStates } from "../../apis/api";
import { Bar } from "react-chartjs-2";

function Charts() {
  const { data } = useSelector((state) => state.data);

  const days = data
    ? data.map((element) => element.date)
    : ["1", "2", "3", "4", "5", "6"];

  const cases = data
    ? data.map((element) => element.cases)
    : ["1", "2", "3", "4", "5", "6"];
  const deaths = data
    ? data.map((element) => element.deaths)
    : ["1", "2", "3", "4", "5", "6"];

  const dataInfo = {
    labels: days,
    datasets: [
      {
        label: "# of deaths",
        data: deaths,
        backgroundColor: "rgb(255, 99, 132)",
      },
      {
        label: "# of confirmed cases",
        data: cases,
        backgroundColor: "rgb(75, 192, 192)",
      },
    ],
  };

  const dispatch = useDispatch();
  const [date, setDate] = useState("");

  useEffect(() => {
    dispatch(getDataCovidStates(date));
  }, [date]);

  const getElementAtEvent = (element) => {
    if (!element.length) return;

    const { index } = element[0];
    setDate(dataInfo.labels[index]);
  };

  return (
    <Bar
      data={dataInfo}
      width={100}
      height={50}
      getElementsAtEvent={getElementAtEvent}
    />
  );
}

export default Charts;
