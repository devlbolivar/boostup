import { useDispatch } from "react-redux";
import { setFilter } from "../../actions/filters";

export default function Filters() {
  const dispatch = useDispatch();

  const handleSelect = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <select onChange={handleSelect}>
      <option value="sevenDays">Last 7 days</option>
      <option value="oneMonth">1 Month</option>
      <option value="all">All</option>
    </select>
  );
}
