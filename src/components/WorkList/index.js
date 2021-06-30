import React, { useEffect } from "react";
import { WorkItem, Work } from "../components//workList";
import { Link } from "react-router-dom";
// import { useStoreContext } from "../utils/GlobalState";
import "./style.css";

const WorkList = () => {
  const [state, dispatch] = useWorkItems();

  const getWorkItems = () => {
    dispatch({ type: LOADING });
  };

  
  useEffect(() => {
    getWorkList();
  }, []);

  return (
    <div className="container mb-5 mt-5">
      <h1 className="text-center">Here's Some of my Favorite Portfolio Work</h1>
      {state.favorites.length ? (
        <List>
          <h3 className="mb-5 mt-5">Click on a portfolio item to view in detail</h3>
          {state.favorites.map(post => (
            <WorkItem key={work._id}>
              <Link to={"/work/" + work._id}>
                <strong>
                  {work.title}
                </strong>
              </Link>
            </WorkItem>
          ))}
        </List>
      ) : (

      )}
      <div className="mt-5">
        <Link to="home">Back to home</Link>
      </div>
    </div>
  );
};

export default WorkList;

