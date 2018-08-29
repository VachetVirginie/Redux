// à quoi a acces le composent

import { connect } from 'react-redux'
import * as actions from '../actions/index'
import { bindActionCreators } from 'redux'
import App from '../components/App';


const mapStateToProps = state => ({
    counter: state.counter,
    inputValue: state.increment.inputValue
})


const mapDispatchToProps = dispatch => ({
    //combine le dispatch avec les actions qu'on lui a deja envoyé
    actions: bindActionCreators(actions, dispatch)
})

//this.props.action.monAction();
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

