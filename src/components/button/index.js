import React from 'react';
import s from './button.module.css'
import cl from "classnames";
import {connect} from 'react-redux'
import { changeStateAction } from '../../actions';




class Button extends React.Component {
    componentDidMount() {
        
    }

    render() {
const propschosen = this.props.chosen
        const buttonClass = cl(s.mainButton, {[s.undefinedButton]:propschosen===undefined}, {[s.chosen]:propschosen});

        return (
            <div className={s.buttonContainer}>
                <div onClick={() => this.props.changeState()} className={buttonClass}>
                </div>
            </div>
        )}
}

const mapStateToProps =(state)=>{
    return {
        chosen: state.chosen,
    }
}
const mapDispatchToProps =(dispatch)=>{
    return{
        changeState: () => dispatch(changeStateAction())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Button);