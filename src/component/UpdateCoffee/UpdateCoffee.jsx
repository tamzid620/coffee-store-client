import { Link } from "react-router-dom";


const UpdateCoffee = () => {
    return (
        <div>
            <h3 className="text-6xl">Update coffee</h3>
            <p>back to <Link to="/">Home</Link></p>
        </div>
    );
};

export default UpdateCoffee;