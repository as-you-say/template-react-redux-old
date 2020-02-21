const CHOOSE_COLOR = 'CHOOSE_COLOR';
const chooseColor = (color) => ({
  type: CHOOSE_COLOR,
  payload: {
    color,
  },
});

const CHANGE_UI = 'CHANGE_UI';
const changeUI = (color) => ({
  type: CHANGE_UI,
  payload: {
    color,
  },
});