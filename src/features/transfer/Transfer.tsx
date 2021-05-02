import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {connectTo, newPeer, selectConnections, selectFiles, selectId, sendFile,} from './transferSlice';
import styles from './Transfer.module.css';
import {useLocation} from 'react-router-dom';

export function Transfer() {
    const id = useSelector(selectId);
    const connections = useSelector(selectConnections);
    const files = useSelector(selectFiles);
    const dispatch = useDispatch();
    const [peerConnectionId, setPeerConnectionId] = useState("");
    const [data, setData] = useState("");

    const search = useLocation().search;
    const urlId = new URLSearchParams(search).get('id');
    // Test url params: {urlId || "no url id"} <br/>

    let handleFiles = async (files: FileList | null) => {
        if (files != null) {
            let file = files.item(0)
            if (file != null) {
                dispatch(sendFile(connections, file));
            }
        }
    }

    return (
        <div className={styles.transfer}>
            <h1>Peer transfer</h1>
            <div>
                {id || "Please click 'Create pear'"}
                <br/>
                <button onClick={() => dispatch(newPeer())}>
                    Create pear
                </button>
                <br/>
                <input type="text" placeholder="Other person's id" onChange={e => setPeerConnectionId(e.target.value)}/>
                <br/>
                <button onClick={e => dispatch(connectTo(peerConnectionId))}>
                    Connect
                </button>
                <br/>
                {connections.map((x, i) => <div key={i}>{x}</div>)}
                <br/>
                <br/>
                <label>
                    File upload
                    <br/>
                    <input type="file" onChange={e => handleFiles(e.target.files)}/>
                </label>
                <br/>
                <p>Files</p>
                <br/>
                {files.map((x, i) =>
                    <div key={x.id}>
                        <a href={x.url} download={x.name}>{x.name}</a>
                    </div>
                )}
            </div>
        </div>
    );
}
