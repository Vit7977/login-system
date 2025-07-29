import { IoMdClose } from "react-icons/io";
import PropTypes from 'prop-types';
import '../styles.css';

function Alert({ message, type, show, onClose }) {
    return (
        <div className={`alert-container ${!show ? 'hide' : ''}`}>
            <div className={`alert-content ${type}`}>
                <span><p>{message}</p></span>
                <span className="close-icon">
                    <IoMdClose onClick={onClose} />
                </span>
            </div>
        </div>
    );
}

Alert.propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['success', 'error', 'warning']).isRequired,
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Alert;
