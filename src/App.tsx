import { applyMiddleware, createStore } from 'redux';
import { combineForms } from 'react-redux-form'
import { Provider } from 'react-redux';
import React, { Component } from 'react';
import ReduxtThunk from 'redux-thunk';

import './App.scss';
import FormRegisterComponent from  './components/FormRegisterComponent';
import ListComponent from './components/ListComponent';

const initialCareState = {
  country: '',
  name: '',
  phone: '',
  email: ''
};

const store = createStore(
  combineForms({
    formRegister: initialCareState,
  }),
  applyMiddleware(ReduxtThunk)
);

/**
 * @extends {Component}
 */
class App extends Component {
  /**
   * Creates an instance of App.
   * @param {Readonly<any>} props
   * @memberof App
   */
  public constructor(props: Readonly<any>) {
    super(props);
  }

  /**
   * @memberof App
   */
  public render(): React.ReactNode {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-12 mt-5">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">
                    <h2 className="text-center">Alta cuidador</h2>
                  </div>
                </div>
                <div className="card-body">
                  <Provider store={store}>
                    <FormRegisterComponent />
                  </Provider>
                </div>
              </div>
            </div>
            <div className="col-12 mt-5">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">
                    <h2 className="text-center">Listado cuidadores</h2>
                  </div>
                </div>
                <div className="card-body">
                  <ListComponent />
                </div>
              </div>
            </div>            
          </div>
        </div>
      </div>
    );
  }
}
export default App;
