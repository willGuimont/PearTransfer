import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as peer from '../../peer/peer'
import { AppThunk, RootState } from '../../app/store';

interface TransferState {
  id: string,
  otherId: string,
}

const initialState: TransferState = {
  id: "",
  otherId: "",
};

export const transferSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    setOtherId: (state, action: PayloadAction<string>) => {
      state.otherId = action.payload;
    }
  },
});

export const { setId, setOtherId } = transferSlice.actions;

export const connectPeer = (): AppThunk => dispatch => {
  peer.connectPeer(dispatch)
};

export const selectId = (state: RootState) => state.transfer.id;

export default transferSlice.reducer;
