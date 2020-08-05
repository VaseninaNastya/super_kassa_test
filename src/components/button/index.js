import React from 'react';
import s from './button.module.css'
import cl from "classnames";
import {connect} from 'react-redux'
import { changeStateAction } from '../../actions';
class Button extends React.Component {
    state = {
        chosen: false
    }
    render() {
        const buttonClass = cl(s.mainButton, { [s.chosen]: !this.props.buttonState });
        console.log('пропсы в баттоне', this.props);
        return (
            <div className={s.buttonContainer}>
                <div onClick={() => this.props.changeState()} className={buttonClass}>
                </div>
            </div>
        )}
}

const mapStateToProps =(state)=>{
    return {
        buttonState: state.chosen
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        changeState: () => dispatch(changeStateAction())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Button);