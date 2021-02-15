import Peer from "peerjs";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { setId } from '../features/transfer/transferSlice'

export var peer: Peer | null = null;

export function connectPeer(dispatch: ThunkDispatch<{}, {}, AnyAction>) {
    peer = new Peer();
    peer.on("open", id => {
        dispatch(setId(id));
    });
}
