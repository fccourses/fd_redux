import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  heroes: [],
  isFetching: false,
  error: null,
};

function heroReducer (state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.GET_HEROES_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ACTION_TYPES.GET_HEROES_SUCCESS: {
      const { heroes } = state;
      const {
        payload: { heroes: newHeroes },
      } = action;
      console.log(newHeroes)
      return {
        ...state,
        isFetching: false,
        heroes: [...heroes, ...newHeroes],
      };
    }
    case ACTION_TYPES.GET_HEROES_ERROR: {
      const {
        payload: { error },
      } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }
    case ACTION_TYPES.CREATE_HERO_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ACTION_TYPES.CREATE_HERO_SUCCESS: {
      const { data: hero } = action;
      const { heroes } = state;
      return {
        ...state,
        isFetching: false,
        heroes: [...heroes, hero],
      };
    }
    case ACTION_TYPES.CREATE_HERO_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }

    default:
      return state;
  }
}

export default heroReducer;
