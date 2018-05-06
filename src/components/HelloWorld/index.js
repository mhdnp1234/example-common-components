import React from 'react';
import PropTypes from 'prop-types';

class HelloWorld extends React.Component {
    displayName='HelloWorld';

    propTypes = {
        /**Message to display */
        message: PropTypes.string,
    }

    defaultProps = {
        message: 'World',
    }

    render() {
        return (
            <div>Hello From 4d-Doctor Team! Hello {this.props.message}</div>
        );
    }
}

export default HelloWorld;
