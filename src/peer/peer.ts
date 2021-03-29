import Peer from "peerjs";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { FileDescription, setId, newConnection, disconnect, addFile } from '../features/transfer/transferSlice'
import randomstring from 'randomstring'

export var peer: Peer | undefined;
let connections = new Map<string, Peer.DataConnection>();

function onReceiveData(data: any, dispatch: ThunkDispatch<{}, {}, AnyAction>) {
  // TODO allow to receive other informations, such as other connected users
  console.log(`Received data ${data}`);
  var blob = new Blob([data.file], { type: data.filetype });
  var url = URL.createObjectURL(blob);
  var fileName = data.filename;

  let fileDescription = new FileDescription(fileName, url);
  dispatch(addFile(fileDescription));
}

function registerNewConnection(conn: Peer.DataConnection, dispatch: ThunkDispatch<{}, {}, AnyAction>) {
  console.log(`Registering ${conn.peer}`)
  let id = conn.peer;

  conn.on('data', data => onReceiveData(data, dispatch));
  conn.on('open', () => {
    console.log('New connection opened');
  });

  connections.set(id, conn);
  dispatch(newConnection(id))
}

export function newPeer(dispatch: ThunkDispatch<{}, {}, AnyAction>) {
  console.log('New peer');
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
    console.log(`Connecting to ${id}`)
    registerNewConnection(conn, dispatch)
  }
}

export function sendFile(connectionIds: Array<string>, file: File, dispatch: ThunkDispatch<{}, {}, AnyAction>) {
  // TODO add to self file list too
  connectionIds.map(connId => {
    let conn = connections.get(connId);
    if (conn != undefined) {
      console.log(`Sending file ${file.name} to ${connId}`);
      conn.send({
        file: file,
        filename: file.name,
        filetype: file.type
      })
    };
  });
}
