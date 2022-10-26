import PropTypes from 'prop-types';
import {Link,NavLink} from 'react-router-dom'


function Title(props) {

    return (
        <Link className="navbar-brand" to="/home">
            {props.name}
        </Link>
    );
}

Title.propTypes ={
    name: PropTypes.string.isRequired,
}
Title.defaultProps = {
    name: "Oriental",
}

export default Title;
