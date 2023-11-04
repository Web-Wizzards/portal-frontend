import React from 'react';
import { useNavigate, Link } from "react-router-dom";
import './home.scss'
import Button from '../../../ui-elements/buttons/buttons';

type HomeProps = {
    
};

const Home:React.FC<HomeProps> = () => {
    const navigate = useNavigate();
    return(
        <div className="home">
            <Button text = "Lend" edges = "round"onClick={() => navigate("/lend")}/>
            <Button text = "rent" edges = "round"onClick={() => navigate("/rent")}/>
        </div>
    )
}
export default Home;