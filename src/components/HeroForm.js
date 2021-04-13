import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { createHeroRequest } from '../actions/createHeroActions';

const HeroForm = props => {
  const { createHeroRequest } = props;

  const onSubmit = (values, formikBag) => {
    createHeroRequest(values);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={{
        nickname: '',
        realName: '',
        originDescription: '',
        catchPhrase: '',
      }}
      onSubmit={onSubmit}
    >
      <Form>
        <Field name='nickname' placeholder='nickname' />
        <Field name='realName' placeholder='realName' />
        <Field name='originDescription' placeholder='originDescription' />
        <Field name='catchPhrase' placeholder='catchPhrase' />
        <button type='submit'>Create Hero</button>
      </Form>
    </Formik>
  );
};

const mapDispatchToProps = dispatch => ({
  createHeroRequest: data => dispatch(createHeroRequest(data)),
});

export default connect(null, mapDispatchToProps)(HeroForm);
