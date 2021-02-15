import React, { useState } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import {
  connectPeer,
  selectId,
  setOtherId,
} from './transferSlice';
import styles from './Transfer.module.css';

export function Transfer() {
  const id = useSelector(selectId);
  const dispatch = useDispatch();

  return (
    <div>
      Peer id:
      <div className={styles.peerId}>
        {id || "Please click host"}
        <br />
        <button onClick={() => dispatch(connectPeer())}>
          Host
        </button>
        <br />
        <input type="text" placeholder="Other person's id" onChange={event => dispatch(setOtherId(event.target.value))} />
        <br />
        <button>
          Connect
        </button>
      </div>
    </div>
  );
}
