import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import transferReducer from '../features/transfer/transferSlice'

export const store = configureStore({
    reducer: {
        transfer: transferReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
