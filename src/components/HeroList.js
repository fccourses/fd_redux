import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as HeroActionCreators from '../actions/createHeroActions';

const HeroList = props => {
  const { heroes, isFetching, error, getHeroes } = props;

  useEffect(() => {
    getHeroes({ offset: heroes.length });
  }, []);

  return (
    <section>
      {isFetching && 'LOADING....'}
      {error && JSON.stringify(error, null, 4)}
      <ul>
        {heroes.map(hero => (
          <li key={hero.id}>
            <hr />
            {JSON.stringify(hero, null, 4)}
            <hr />
          </li>
        ))}
      </ul>
      <button onClick={() => getHeroes({ offset: heroes.length })}>
        Load more heroes
      </button>
    </section>
  );
};

const mapStateToProps = ({ hero }) => ({
  ...hero,
});

const mapDispatchToState = dispatch => ({
  getHeroes: ({ limit, offset } = {}) =>
    dispatch(HeroActionCreators.getHeroRequest({ limit, offset })),
});

export default connect(mapStateToProps, mapDispatchToState)(HeroList);
