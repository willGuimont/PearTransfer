import React, { useState } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import {
  selectId,
  selectConnections,
  newPeer,
  connectTo,
  sendData,
} from './transferSlice';
import styles from './Transfer.module.css';

export function Transfer() {
  const id = useSelector(selectId);
  const connections = useSelector(selectConnections);
  const dispatch = useDispatch();
  const [peerConnectionId, setPeerConnectionId] = useState("");
  const [data, setData] = useState("");

  return (
    <div>
      Peer id:
      <div className={styles.peerId}>
        {id || "Please click to create Peer"}
        <br />
        <button onClick={() => dispatch(newPeer())}>
          Create peer
        </button>
        <br />
        <input type="text" placeholder="Other person's id" onChange={e => setPeerConnectionId(e.target.value)} />
        <br />
        <button onClick={e => dispatch(connectTo(peerConnectionId))}>
          Connect
        </button>
        <br />
        {connections.map((x, i) => <div key={i}>{x}</div>)}
        <br />
        <input type="text" placeholder="Data" onChange={e => setData(e.target.value)} />
        <button onClick={e => dispatch(sendData(peerConnectionId, data))}>
          Send
        </button>
      </div>
    </div>
  );
}
