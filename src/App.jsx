import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchTodo } from "./redux/Slice/todoSlice";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    dispatch(fetchTodo());
  }, []);

  if (isLoading) return <div>Loading.....</div>;
  return (
    <div>
      {data.map((ele) => {
        return <div key={ele.id}>{ele.title}</div>;
      })}
    </div>
  );
}

export default App;
