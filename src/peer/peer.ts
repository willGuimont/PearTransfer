import Peer from "peerjs";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { setId, newConnection } from '../features/transfer/transferSlice'

export var peer: Peer | undefined;
let connections = new Map<string, Peer.DataConnection>();

function registerNewConnection(conn: Peer.DataConnection, dispatch: ThunkDispatch<{}, {}, AnyAction>) {
    console.log(`Registering ${conn.peer}`)
    let id = conn.peer;

    conn.on('data', (data) => {
        console.log(data);
    });
    conn.on('open', () => {
        conn.send('hello!');
        console.log(conn);
    });

    connections.set(id, conn);
    dispatch(newConnection(id))
}

export function newPeer(dispatch: ThunkDispatch<{}, {}, AnyAction>) {
    peer = new Peer();
    peer.on("open", id => {
        dispatch(setId(id));
    });
    peer.on('connection', (conn) => {
        registerNewConnection(conn, dispatch);
    });
}

export function connectTo(id: string, dispatch: ThunkDispatch<{}, {}, AnyAction>) {
    if (peer != undefined) {
        let conn = peer.connect(id);
        console.log(`Connecting to ${id}`)
        registerNewConnection(conn, dispatch)
    }
}

export function sendData(id: string, data: string) {
    let conn = connections.get(id);
    if (conn != undefined) {
        console.log(`Sending ${data}`)
        conn.send(data);
    }
}
