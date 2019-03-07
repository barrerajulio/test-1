import { connect } from 'react-redux';

import { addRegister } from '../actions';
import FormRegisterComponent from '../components/FormRegisterComponent';
import { IRecordRegister } from '../interfaces/record.register';

export default connect(
    null,
    dispatch => ({
        onCreate: (record: IRecordRegister) => dispatch(addRegister(record))
    })
)(FormRegisterComponent);
