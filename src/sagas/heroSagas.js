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

export function * getHeroes (action) {
  try {
    const {
      data: { data: heroes },
    } = yield API.getHeroes(action.payload);
    console.log('saga', heroes);
    yield put(HeroActionsCreator.getHeroSuccess({ heroes }));
  } catch (error) {
    yield put(HeroActionsCreator.getHeroError({ error }));
  }
}
