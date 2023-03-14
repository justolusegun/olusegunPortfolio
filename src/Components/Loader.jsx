import React, { useState, useEffect } from "react";
import Header from "./Header";
import Links from "./Links";
import styled from "styled-components";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const Loader = () => {
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div>
      {loading ? (
        <LoaderSet>
          <ClimbingBoxLoader
            color={"red"}
            loading={loading}
            speedMultiplier={1}
            size={25}
          />
        </LoaderSet>
      ) : (
        <Links />
      )}
    </div>
  );
};

export default Loader;

const LoaderSet = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  width: 100%;
  z-index: 10000000;
`;
