import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actionTypes';
import { createHero, getHeroes } from './heroSagas';

function * rootSaga () {
  yield takeLatest(ACTION_TYPES.CREATE_HERO_REQUEST, createHero);
  yield takeLatest(ACTION_TYPES.GET_HEROES_REQUEST, getHeroes);
}

export default rootSaga;
