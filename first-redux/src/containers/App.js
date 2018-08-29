import { connect } from 'react-redux'
import * as actions from '../actions/index'
import { bindActionCreators } from 'redux'
import App from '../components/App';


const mapStateToProps = state => ({
    counter: state.counter,
    randomFetch: state.increment.randomFetch
})


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

