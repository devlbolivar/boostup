import { getData, getDataStates } from "../actions/data";
const apiKey = "ea3cc0b36cf341818e81ef2d5b2a6618";
export const getInfoCovid = (filter) => {
  return (dispatch) => {
    const url = `https://api.covidactnow.org/v2/country/US.timeseries.json?apiKey=${apiKey}`;

    fetch(url)
      .then((data) => {
        return data.json();
      })
      .then(({ actualsTimeseries }) => {
        const filteredData = processData(actualsTimeseries, filter);
        dispatch(getData(filteredData));
      });
  };
};

export const getDataCovidStates = (date) => {
  return (dispatch) => {
    const url = `https://api.covidactnow.org/v2/states.timeseries.json?apiKey=${apiKey}`;

    fetch(url)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        const arrayStates = data.map((state) => {
          const [serieByDate] = state.actualsTimeseries.filter(
            (serie) => serie.date === date
          );
          const infoState = {
            state: state.state,
            serie: serieByDate,
          };
          return infoState;
        });

        dispatch(getDataStates(arrayStates));
      });
  };
};

const processData = (data, filter) => {
  switch (filter) {
    case "sevenDays":
      return data.slice(-8, -1);
    case "oneMonth":
      return data.slice(-32, -1);
    default:
      return data;
  }
};
