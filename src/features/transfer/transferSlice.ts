import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as peer from '../../peer/peer'
import { AppThunk, RootState } from '../../app/store';

interface TransferState {
  id: string,
  connections: Array<string>,
}

const initialState: TransferState = {
  id: "",
  connections: [],
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
    }
  },
});

export const { setId, newConnection } = transferSlice.actions;

export const newPeer = (): AppThunk => dispatch => peer.newPeer(dispatch);
export const connectTo = (id: string): AppThunk => dispatch => peer.connectTo(id, dispatch);
export const sendData = (id: string, data: string): AppThunk => dispatch => peer.sendData(id, data);

export const selectId = (state: RootState) => state.transfer.id;
export const selectConnections = (state: RootState) => state.transfer.connections

export default transferSlice.reducer;
