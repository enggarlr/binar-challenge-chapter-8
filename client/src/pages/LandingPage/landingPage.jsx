import React from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

function LandingPage () {
    const Navigate = useNavigate()
    const HandleClick = (e) => {
        Navigate(e.target.dataset.link)
    }

    return(
        <>
            <div className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="mt-4">What Do You Want to Do?</h1>
                <Button 
                    style={{width:'40vw'}}
                    className="mt-4"
                    color="primary"
                    outline
                    data-link="/create-player"
                    onClick={HandleClick}
                >
                    Create New Player
                </Button>
                {' '}
                <Button
                    style={{width:'40vw'}}
                    className="mt-4"
                    color="primary"
                    outline
                    data-link="/edit-player"
                    onClick={HandleClick}
                >
                    Edit Player Data
                </Button>
                {' '}
                <Button
                    style={{width:'40vw'}}
                    className="mt-4"
                    color="primary"
                    outline
                    data-link="/find-player"
                    onClick={HandleClick}
                >
                    Find a Player
                </Button>
                {' '}
            </div>
        </>
    );
};

export default LandingPage;