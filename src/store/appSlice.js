import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
    name: 'app',
    initialState: {themeMode: 'lightTheme', dashboards: []}, 
    reducers: {
        setThemeMode: (state, action) => {
            state.themeMode = action.payload
        },
        setDashboards: (state, action) => {
            state.dashboards = action.payload
        },
    },
});

export const {setThemeMode, setDashboards} = appSlice.actions
export default appSlice.reducer;