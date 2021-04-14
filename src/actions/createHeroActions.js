import ACTION_TYPES from './actionTypes';

export const createHeroRequest = data => ({
  type: ACTION_TYPES.CREATE_HERO_REQUEST,
  data,
});

export const createHeroSuccess = data => ({
  type: ACTION_TYPES.CREATE_HERO_SUCCESS,
  data,
});

export const createHeroError = error => ({
  type: ACTION_TYPES.CREATE_HERO_ERROR,
  error,
});

export const getHeroRequest = ({ limit, offset }) => ({
  type: ACTION_TYPES.GET_HEROES_REQUEST,
  payload: { limit, offset },
});

export const getHeroSuccess = ({ heroes }) => ({
  type: ACTION_TYPES.GET_HEROES_SUCCESS,
  payload: { heroes },
});

export const getHeroError = ({ error }) => ({
  type: ACTION_TYPES.GET_HEROES_ERROR,
  payload: { error },
});
