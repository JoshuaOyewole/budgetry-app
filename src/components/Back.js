import React from 'react'
import {useHistory} from 'react-router-dom'

function Back() {

  let history = useHistory();
  const back = () =>history.goBack();

  return <button onClick={back}>Go Back</button>
}

export default Back
