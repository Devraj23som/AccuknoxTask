'use client'
const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  categories: {
    "CSPM Executive Dashboard": [
      { id: 1, name: 'Widget 1', text: 'This is widget 1' },
      { id: 2, name: 'Widget 2', text: 'This is widget 2' },
    ],
    "Another Category": [
      { id: 3, name: 'Widget 3', text: 'This is widget 3' },
    ],
  },
  allWidgets: [
   
  ],
};

const widgetSlice = createSlice({
    name: 'widgets',
    initialState,
    reducers: {
      addWidget(state, action) {
        const { category, widget } = action.payload;
        state.categories[category].push(widget);
        state.allWidgets.push(widget);
      },
      removeWidget(state, action) {
        const { category, widgetId } = action.payload;
        state.categories[category] = state.categories[category].filter(
          (widget) => widget.id !== widgetId
        );
        state.allWidgets = state.allWidgets.filter(
          (widget) => widget.id !== widgetId
        );
      },
    },
  });
  
  export const { addWidget, removeWidget } = widgetSlice.actions;
  
  export default widgetSlice.reducer;