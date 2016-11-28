import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

const PostForm = ({ handleSubmit, pristine, reset, submitting }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="postName">Post name</label>
        <div>
          <Field id="postName"
                 name="postName"
                 component="input"
                 type="text"
                 placeholder="Post name"
          />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values
        </button>
      </div>
    </form>
  );
};

PostForm.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.any,
  reset: PropTypes.any,
  submitting: PropTypes.any,
};

export default reduxForm({ form: 'postForm' })(PostForm);
