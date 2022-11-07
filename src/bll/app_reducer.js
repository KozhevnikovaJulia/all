import { API } from '../dal/api';

const SET_WARNING_VISIBLE = 'SET_WARNING_VISIBLE';
const SET_STATUS = 'SET_STATUS';
const SET_ERROR = 'SET_ERROR';
const SET_TABBED_CALCULATOR_IS_ACTIVE = 'SET_TABBED_CALCULATOR_IS_ACTIVE';
const SET_TABBED_INSTRUCTION_IS_ACTIVE = 'SET_TABBED_INSTRUCTION_IS_ACTIVE';
const SET_IS_INITIALIZED = 'SET_IS_INITIALIZED';

const initialState = {
  warningVisible: false,
  status: 'success',
  error: null,
  tabbedCalculatorIsActive: true,
  tabbedInstructionIsActive: false,
  isInitialized: false,
};

export const app_reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WARNING_VISIBLE:
      return { ...state, warningVisible: action.warningVisible };
    case SET_STATUS:
      return { ...state, status: action.status };
    case SET_ERROR:
      return { ...state, error: action.error };
    case SET_TABBED_CALCULATOR_IS_ACTIVE:
      return { ...state, tabbedCalculatorIsActive: action.tabbedCalculatorIsActive };
    case SET_TABBED_INSTRUCTION_IS_ACTIVE:
      return { ...state, tabbedInstructionIsActive: action.tabbedInstructionIsActive };
    case SET_IS_INITIALIZED:
      return { ...state, isInitialized: action.isInitialized };
    default:
      return state;
  }
};

// action creators
export const setWarningVisible = warningVisible => ({ type: SET_WARNING_VISIBLE, warningVisible });
export const setStatus = status => ({ type: SET_STATUS, status });
export const setError = error => ({ type: SET_ERROR, error });
export const setTabbedCalculatorIsActive = tabbedCalculatorIsActive => ({ type: SET_TABBED_CALCULATOR_IS_ACTIVE, tabbedCalculatorIsActive });
export const setTabbedInstructionIsActive = tabbedInstructionIsActive => ({ type: SET_TABBED_INSTRUCTION_IS_ACTIVE, tabbedInstructionIsActive });
export const setInitialized = isInitialized => ({ type: SET_IS_INITIALIZED, isInitialized });

//thunk creators
export const getStartIp = () => async dispatch => {
  dispatch(setStatus('loading'));
  try {
    const response = await API.getIp();
    response.data.indexOf('172.16') > -1 || response.data.indexOf('10.100') > -1 || response.data.indexOf('192.168') > -1 ? dispatch(setInitialized(true)) : dispatch(setInitialized(false));
  } catch (error) {
    dispatch(setError(error.message));
  }
  dispatch(setStatus('success'));
};
