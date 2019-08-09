import React, { Component } from 'react';
import Modal from '../../components/ui/modal/modal';
import Aux from '../Auxillary/Auxillary';


const withErrorHandler = (WrapperComponent, axios) => {


    return class extends Component {
        constructor(props) {
            super(props)
           this.state = {
                error: null
            }
          this.reqInterceptors =  axios.interceptors.request.use(null, err => {
                this.setState({ error: null });
            })

            this.resInterceptors = axios.interceptors.response.use(null, err => {
                this.setState({ error: err });
            })

        }

        componentWillUnmount(){
            console.log('[componentWillMount]',this.reqInterceptors,this.resInterceptors);
            axios.interceptors.request.eject(this.reqInterceptors);
            axios.interceptors.response.eject(this.resInterceptors);
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null })
        }
        render() {
            return (
                <Aux>
                    <Modal show={this.state.error}
                        closed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrapperComponent {...this.props} />
                </Aux>
            )
        }
    }

}

export default withErrorHandler;