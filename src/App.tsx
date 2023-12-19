import React, { useEffect } from "react";
import { connect } from "react-redux";
import { increment } from "./actions";
import reducer from "./reducers/reducer";
import axios from "axios";

const App = ({ count, increment }: any) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://mocki.io/v1/b4544a37-0765-405f-baf6-6675845d5a0e"
        );
        console.log(response?.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    return () => {
      // console.log("Component will unmount");
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  count: state.reducer.count,
});

const mapDispatchToProps = {
  increment,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
