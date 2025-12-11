import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SidebarValueState {
  open: boolean
}

const initialState: SidebarValueState = {
  open: false,
}

const sidebarValueSlice = createSlice({
  name: 'sidebarValue',
  initialState,
  reducers: {
    setSideBarValue: (
      state,
      action: PayloadAction<SidebarValueState['open']>
    ) => {
      state.open = action.payload
    },
  },
})

export const { setSideBarValue } = sidebarValueSlice.actions

export default sidebarValueSlice.reducer
