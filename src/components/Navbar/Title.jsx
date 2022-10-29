import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom'


function Title(props) {

    return (
        <NavLink className="nav-link" to="/home">
            {props.name}
        </NavLink>
    );
}

Title.propTypes ={
    name: PropTypes.string.isRequired,
}
Title.defaultProps = {
    name: "Oriental",
}

export default Title;
