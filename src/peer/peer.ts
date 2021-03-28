import Peer from "peerjs";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { FileDescription, setId, newConnection, disconnect, addFile, selectConnections } from '../features/transfer/transferSlice'

export var peer: Peer | undefined;
let connections = new Map<string, Peer.DataConnection>();

function onReceiveData(data: any, dispatch: ThunkDispatch<{}, {}, AnyAction>) {
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
  peer = new Peer(); // TODO custom id
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

export function connectTo(id: string, dispatch: ThunkDispatch<{}, {}, AnyAction>) {
  if (peer != undefined) {
    let conn = peer.connect(id);
    console.log(`Connecting to ${id}`)
    registerNewConnection(conn, dispatch)
  }
}

export function sendFile(connectionIds: Array<string>, file: File, dispatch: ThunkDispatch<{}, {}, AnyAction>) {
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
