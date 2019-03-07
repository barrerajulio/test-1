import { connect } from 'react-redux';

import ListComponent from '../components/ListComponent';

export default connect(
    state => ({
        items: (state as any).rootReducer.registerReducer
    })
)(ListComponent);
