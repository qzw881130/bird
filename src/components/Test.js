import React from 'react';
import {useParams} from "react-router-dom";

const Test = () => {
  let { id } = useParams();

  return (
    <>
    <div>Test {id}</div>
    </>
  )
}

export default Test