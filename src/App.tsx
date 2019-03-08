import React, { Component } from 'react';

import './App.scss';
import RegisterFormContainer from  './containers/RegisterFormContainer';
import ListContainer from  './containers/ListContainer';


/**
 * @extends {Component}
 */
class App extends Component {
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
                  <RegisterFormContainer />
                </div>
              </div>
            </div>
            <div className="col-12 mt-5 mb-5">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">
                    <h2 className="text-center">Listado cuidadores</h2>
                  </div>
                </div>
                <div className="card-body">
                  <ListContainer />
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
