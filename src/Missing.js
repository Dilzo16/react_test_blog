import { Link } from "react-router-dom";
const Missing=()=>{
    return (
        <main className="Missing">
            <h2>Page Not found</h2>
            <p>Well! thats  dissappointing!!mis</p>
            <p>
                <Link to='/'>Visit HomePage</Link>
            </p>
            </main>
    )
    
    }
    
    export default Missing;