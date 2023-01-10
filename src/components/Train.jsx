import React, { useState, useEffect } from 'react';
import {Card, Button, Form} from "react-bootstrap";

//https://www.w3schools.com/jsref/dom_obj_audio.asp


function Train() {
  const [ts, setTs] = useState(15);
  const [playState, setPlayState] = useState(false);
  const [startTs, setStartTs] = useState(0);
  
  const getTimeStamp = () => parseInt((new Date).getTime()/1000);
  const [currTs, setCurrTs] = useState(getTimeStamp());

  // const [inter, setInter] = useState(null);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    const inter = setInterval(() => {
      setCurrTs(getTimeStamp());
    }, 1000)

    // console.log('currTs', currTs);
  
    return () => {
      // console.log('clearn inter');
      clearInterval(inter);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [(new Date())])
  
  const calcDuration = () => {
    // console.log('#### startTs', startTs, 'currTs', currTs);

    let ts = startTs > 10000 ? currTs - startTs : 0;
    let h = parseInt(ts/60/60);
    let m = parseInt((ts - h * 60 * 60)/60);
    let s = parseInt(ts % 60);

    return `${h}:${m}:${s}`;
  }

  useEffect(() => {
    // console.log('playState', playState);
    // console.log('timer', timer);
    const audio = document.getElementsByTagName('audio')[0];

    if(playState){
      setTimer(setTimeout(() => {
        setPlayState(!playState);
      }, ts * 1000));

      audio?.play();
      setStartTs(getTimeStamp());
    }else{
      // console.log('end');
      clearTimeout(timer);
      setTimer(null);

      audio?.pause();
      audio.currentTime = 1;
      setStartTs(0);

      // console.log('startTs', startTs, 'currTs', currTs);
    }

    return () => {
      
    }
  }, [playState]);
  
  // console.log('#### startTs', startTs, 'currTs', currTs);

  return (
    <>
      <Card className='align-items-center'>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
          <audio controls preload="auto" loop className="">
            <source src="asset/facai.ogg" type="audio/ogg" />
            <source src="asset/facai.mp4" type="audio/mpeg" />
            <source src="asset/facai.wav" type="audio/Wav" />
            当前浏览器不支持audio标签
          </audio>
      </Card.Body>
      <Card.Body>
        <label className='btn btn-sm btn-warning text-uppercase'>duration </label><span className="ms-2">{ calcDuration() }</span>
      </Card.Body>
      <Card.Body>
        <Form.Select aria-label="Default select example" className='d-inline-block w-auto' defaultValue={ts} onChange={(e)=>setTs(e.target.value)}>
        <option value={15}>15 secs</option>
          <option value={60}>1 mins</option>
          <option value={15*60}>15 mins</option>
          <option value={30*60}>30 mins</option>
          <option value={60*60}>1 hour</option>
          <option value={90*60}>1.5 hour</option>
          <option value={120*60}>2 hour</option>
        </Form.Select>
        <Button variant="primary" className='ms-2' onClick={() => setPlayState(!playState)}>{playState ? 'Stop' : 'Play'}</Button>
      </Card.Body>
    </Card>

    </>
  )
}

export default Train