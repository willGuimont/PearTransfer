import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as peer from '../../peer/peer'
import { AppThunk, RootState } from '../../app/store';
import { v4 as uuidv4 } from 'uuid';

export class FileDescription {
  name: string;
  url: string;

  constructor(name: string, url: string) {
    this.name = name;
    this.url = url;
  }
}

class FileInformation {
  id: string;
  name: string;
  url: string;

  constructor(id: string, name: string, url: string) {
    this.id = id;
    this.name = name;
    this.url = url;
  }
}


interface TransferState {
  id: string,
  connections: Array<string>,
  files: Array<FileInformation>
}

const initialState: TransferState = {
  id: "",
  connections: [],
  files: []
};

export const transferSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    newConnection: (state, action: PayloadAction<string>) => {
      state.connections.push(action.payload);
    },
    disconnect: (state) => {
      state.connections = [];
      state.id = "";
    },
    addFile: (state, action: PayloadAction<FileDescription>) => {
      let fileDescription = action.payload;
      let fileId = uuidv4();
      let file = new FileInformation(fileId, fileDescription.name, fileDescription.url);
      state.files.push(file);
    }
  },
});

export const { setId, newConnection, disconnect, addFile } = transferSlice.actions;

export const newPeer = (): AppThunk => dispatch => peer.newPeer(dispatch);
export const connectTo = (id: string): AppThunk => dispatch => peer.connectTo(id, dispatch);
export const sendFile = (ids: Array<string>, file: File): AppThunk => dispatch => peer.sendFile(ids, file, dispatch);

export const selectId = (state: RootState) => state.transfer.id;
export const selectConnections = (state: RootState) => state.transfer.connections; // TODO might want to use Peer.listAllPeers
export const selectFiles = (state: RootState) => state.transfer.files;

export default transferSlice.reducer;
