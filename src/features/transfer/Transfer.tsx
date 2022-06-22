import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connectTo, newPeer, selectConnections, selectFiles, selectId, sendFile, } from './transferSlice';
import styles from './Transfer.module.css';
import { useLocation } from 'react-router-dom';
import { Button } from "@material-ui/core";
import { CopyToClipboard } from "react-copy-to-clipboard";

export function Transfer() {
    const id = useSelector(selectId);
    const connections = useSelector(selectConnections);
    const files = useSelector(selectFiles);
    const dispatch = useDispatch();
    const [peerConnectionId, setPeerConnectionId] = useState("");

    const search = useLocation().search;
    const urlId = new URLSearchParams(search).get('id');

    let handleFiles = async (files: FileList | null) => {
        if (files != null) {
            let file = files.item(0)
            if (file != null) {
                dispatch(sendFile(connections, file));
            }
        }
    }

    useEffect(() => {
        if (id === "") {
            dispatch(newPeer());
            setTimeout(() => {
                if (urlId != null) {
                    dispatch(connectTo(urlId));
                }
            }, 1000);
        }
    });

    return (
        <div className={styles.transfer}>
            <img src={process.env.PUBLIC_URL + '/pear2pear.png'} className={styles.appLogo} alt="logo" />
            <h2>Pear transfer</h2>
            <div>
                <div>
                    Your pear id: <b>{id}</b>
                </div>
                <div className={styles.connectContainer}>
                    <input type="text" placeholder="Add a pear" onChange={e => setPeerConnectionId(e.target.value)} className={styles.pearInput} />
                    <div className={styles.pearButtonContainer}>
                        <Button variant="contained" color="primary" onClick={e => dispatch(connectTo(peerConnectionId))}>
                            Connect
                        </Button>
                    </div>
                </div>

                <div className={styles.pearButtonContainer}>
                    <CopyToClipboard text={window.location.href + `?id=${id}`}>
                        <Button variant="contained" color="primary" className={styles.pearButtonContainer}>
                            Get sharable link
                        </Button>
                    </CopyToClipboard>
                </div>

                <br />
                <br />

                <div>
                    <div>Connected to:</div>
                    {connections.map((x, i) => <div key={i}><b>{x}</b></div>)}
                </div>

                <br />

                <h2>Files</h2>
                <div className={styles.files}>
                    <div className={styles.filesUpload}>
                        <label>
                            File upload
                            <br />
                            <input type="file" onChange={e => handleFiles(e.target.files)} />
                        </label>
                    </div>
                    <div className={styles.filesList}>
                        <div>Received files</div>
                        {files.map((x, i) =>
                            <div key={x.id}>
                                <a href={x.url} download={x.name}>{x.name}</a>
                            </div>
                        )}
                    </div>
                </div>

                <br />

            </div>
        </div>
    );
}
