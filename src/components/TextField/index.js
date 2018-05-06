import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

export const TextFieldType = {
    TEXT: 'text',
    EMAIL: 'email',
    PASSWORD: 'password',
};

class TextField extends React.Component {
    static displayName='TextField';

    static propTypes = {
        /** unique id for the text element*/
        id: PropTypes.string.isRequired,
        /** name for the input field */
        name: PropTypes.string.isRequired,
        /** type of the field one of type text, email, password */
        type: PropTypes.string,
        /** hint text */
        placeholder:PropTypes.string,
        /** on change listener to receive text */
        onChange: PropTypes.func.isRequired,
    }

    static defaultProps = {
        id: '',
        type: TextFieldType.TEXT,
    }

    _onChangeHandler(event) {
        const {onChange} = this.props;
        onChange(event.target.value);
    }

    _onFocus(event) {
        event;
    }

    _onBlur(event) {
        event;
    }

    render() {
        const {
            id,
            type,
            name,
            placeholder,
        } = this.props;

        return (
            <div className="cc-text-field">
                <input
                    id={id}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    onChange={this._onChangeHandler.bind(this)}
                />
            </div>
        );
    }
}

export default TextField;
