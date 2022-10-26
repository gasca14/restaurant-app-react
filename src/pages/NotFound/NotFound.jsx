import '../NotFound/NotFound.css'
function NotFound() {
    return (
        <div className="container text-center text-danger" style={{
            marginTop: "100px"
        }}> 
            <img src="/images/404.jpg" alt="" />
        </div>
    );
}

export default NotFound;