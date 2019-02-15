import React from 'react'
import { connect } from 'react-redux'
import { FormSpy } from 'react-final-form'
import rootReducer from './ducks'

const FormStateToRedux = ({ form, rootReducer }) => (
  <FormSpy onChange={state => rootReducer(form, state)} />
)

export default connect(state, { rootReducer })(FormStateToRedux)
