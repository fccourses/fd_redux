import { put } from 'redux-saga/effects';
import * as HeroActionsCreator from '../actions/createHeroActions';
import * as API from '../api';

export function * createHero (action) {
  try {
    const {
      data: {
        data: [hero],
      },
    } = yield API.createHero(action.data);

    yield put(HeroActionsCreator.createHeroSuccess(hero));
  } catch (error) {
    yield put(HeroActionsCreator.createHeroError(error));
  }
}
