import { combineReducers, legacy_createStore as createStore, } from 'redux';
import { fellowReducer } from './FellowReducer';
import { moneyReducer } from './MoneyReducer';
import { cashReducer } from './CashReducer';
import { customerReducer } from './CustomerReducer';

const rootReducer = combineReducers({
    cashhh:cashReducer,
    customers:customerReducer,
    gold:moneyReducer,
    fellow:fellowReducer,
});
export const store = createStore(rootReducer);