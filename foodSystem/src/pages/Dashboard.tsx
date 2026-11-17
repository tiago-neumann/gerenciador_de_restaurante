import { Link } from "react-router-dom";

function Dashboard(){
    return(
        <div>
            <h1>Home</h1>

            <Link to="/login">
                Ir para Login
            </Link>
        </div>
    );
}

export default Dashboard;