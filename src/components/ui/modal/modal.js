import React,{Component} from 'react';
import modalStyle from '../modal/modal.module.css';
import Aux from '../../../hoc/Auxillary/Auxillary';
import Backdrop from '../backdrop/backdrop'


class Modal extends Component {

    shouldComponentUpdate(nextProps,nextState){
       
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    componentWillUpdate(){
        console.log(`[Modal.js] will update`)
    }
    render(){
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.closed}/>
            <div className={modalStyle.Modal}
             style={{transform:(this.props.show)?'translateY(0)':'translateY(-100vh)',
                    opacity:(this.props.show)?'1':'0'}}>
                {this.props.children}
            </div>
            </Aux>)
    }

        
    
}



export default Modal;