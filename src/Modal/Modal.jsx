import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';


class Modal extends Component {
    static propTypes = {
        url: PropTypes.string.isRequired,
        onClose: PropTypes.func.isRequired,
    };

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    };

    componentWillMount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    };

    handleKeyDown = ({ key }) => {
        if (key === 'Escape') {
            this.props.onClose();
        } 
    };

    closeByClick = ({ target, currentTarget }) => {
        if (target === currentTarget) {
            this.props.onClose();
        }
    };

    render() {
        const { url } = this.props;
        return (<div className={styles.Overlay}>
            <div onClick={this.closeByClick} className={styles.Modal}>
                <img src={url} alt="" />
            </div>
        </div>
        )
    }
};

export default Modal;
