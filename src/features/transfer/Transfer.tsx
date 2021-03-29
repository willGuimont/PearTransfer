import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectId,
  selectConnections,
  selectFiles,
  newPeer,
  connectTo,
  sendFile,
} from './transferSlice';
import styles from './Transfer.module.css';
import { useParams } from 'react-router-dom';

interface RouteParams {
  id: string
}

export function Transfer() {
  const id = useSelector(selectId);
  const connections = useSelector(selectConnections);
  const files = useSelector(selectFiles);
  const dispatch = useDispatch();
  const [peerConnectionId, setPeerConnectionId] = useState("");
  const [data, setData] = useState("");

  const routeParams = useParams<RouteParams>();

  let handleFiles = async (files: FileList | null) => {
    if (files != null) {
      let file = files.item(0)
      if (file != null) {
        dispatch(sendFile(connections, file));
      }
    }
  }

  return (
    <div>
      Test url params: {routeParams.id || "no url id"} <br/>
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
        <br />
        <label>
          File:
            <input type="file" onChange={e => handleFiles(e.target.files)} />
        </label>
        <br />
        <p>Files</p>
        <br />
        {files.map((x, i) =>
          <div key={x.id}>
            <a href={x.url} download={x.name}>{x.name}</a>
          </div>
        )}
      </div>
    </div>
  );
}
