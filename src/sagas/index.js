import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actionTypes';
import { createHero } from './heroSagas';

function * rootSaga () {
  yield takeLatest(ACTION_TYPES.CREATE_HERO_REQUEST, createHero);
}

export default rootSaga;
