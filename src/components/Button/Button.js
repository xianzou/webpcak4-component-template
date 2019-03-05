import React from 'react';
import Style from './style/Button.scss';

class Button extends React.Component {
    render() {
        return (
            <div className={Style['home-component-root']}>
                <button className={Style[this.props.Type]}>{this.props.Text}</button>
            </div>
        );
    }
}
export default Button;
