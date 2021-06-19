import Peer from "peerjs";
import {AnyAction} from "redux";
import {ThunkDispatch} from "redux-thunk";
import {addFile, disconnect, FileDescription, newConnection, setId} from '../features/transfer/transferSlice'
import randomstring from 'randomstring'

export var peer: Peer | undefined;
let connections = new Map<string, Peer.DataConnection>();

function onReceiveData(data: any, dispatch: ThunkDispatch<{}, {}, AnyAction>) {
    // TODO allow to receive other informations, such as other connected users
    var blob = new Blob([data.file], {type: data.filetype});
    var url = URL.createObjectURL(blob);
    var fileName = data.filename;

    let fileDescription = new FileDescription(fileName, url);
    dispatch(addFile(fileDescription));
}

function registerNewConnection(conn: Peer.DataConnection, dispatch: ThunkDispatch<{}, {}, AnyAction>) {
    let id = conn.peer;

    conn.on('data', data => onReceiveData(data, dispatch));
    conn.on('open', () => {
    });

    connections.set(id, conn);
    dispatch(newConnection(id))
}

export function newPeer(dispatch: ThunkDispatch<{}, {}, AnyAction>) {
    let id = generateId();
    peer = new Peer(id, {
        secure: true
    });
    peer.on("open", id => {
        dispatch(setId(id));
    });
    peer.on('connection', (conn) => {
        registerNewConnection(conn, dispatch);
    });
    peer.on("close", () => {
        dispatch(disconnect())
    })
}

function generateId(): string {
    let id = randomstring.generate({
        length: 5,
        charset: 'alphanumeric',
        capitalization: 'uppercase',
        readable: true,
    });
    return `Pear-${id}`;
}

export function connectTo(id: string, dispatch: ThunkDispatch<{}, {}, AnyAction>) {
    if (peer != undefined) {
        let conn = peer.connect(id);
        registerNewConnection(conn, dispatch)
    }
}

export function sendFile(connectionIds: Array<string>, file: File, dispatch: ThunkDispatch<{}, {}, AnyAction>) {
    // TODO add to own file list too
    connectionIds.map(connId => {
        let conn = connections.get(connId);
        if (conn != undefined) {
            conn.send({
                file: file,
                filename: file.name,
                filetype: file.type
            })
        }

    });
}
