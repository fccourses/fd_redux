import React from 'react';
import { connect } from 'react-redux';

const HeroList = props => {
  const { heroes, isFetching, error } = props;
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
    </section>
  );
};

const mapStateToProps = ({ hero }) => ({
  ...hero,
});

export default connect(mapStateToProps)(HeroList);
