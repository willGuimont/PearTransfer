import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connectTo, newPeer, selectConnections, selectFiles, selectId, sendFile, } from './transferSlice';
import styles from './Transfer.module.css';
import { useLocation } from 'react-router-dom';
import { Button } from "@material-ui/core";

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

    useEffect(() => {
        console.log(id);
        if (id === "") {
            dispatch(newPeer());
        }
    }, []);

    return (
        <div className={styles.transfer}>
            <img src={process.env.PUBLIC_URL + '/pear2pear.png'} className="App-logo" alt="logo" width="20%" />
            <h1>Pear transfer</h1>
            <div>
                {id}
                <br />
                <input type="text" placeholder="Other person's id" onChange={e => setPeerConnectionId(e.target.value)} />
                <br />
                <Button variant="contained" color="primary" onClick={e => dispatch(connectTo(peerConnectionId))}>
                    Connect
                </Button>
                <br />
                {connections.map((x, i) => <div key={i}>{x}</div>)}
                <br />
                <br />
                <label>
                    File upload
                    <br />
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
