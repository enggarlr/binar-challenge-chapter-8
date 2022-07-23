import React from "react";
import { 
    Card, 
    CardBody, 
    CardTitle, 
    CardSubtitle, 
    CardText
} from "reactstrap";

function Result (props) {
    return (
        <Card
            style={{
                width: '18rem'
            }}
            className="mt-5"
        >
            <CardBody>
                <CardTitle tag="h5">
                    Player Input
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    Player's Informations
                </CardSubtitle>
                <CardText>
                    id: {props.id}
                </CardText>
                <CardText>
                    username: {props.username}
                </CardText>
                <CardText>
                    email: {props.email}
                </CardText>
                <CardText>
                    password: {props.password}
                </CardText>
                <CardText>
                    experience: {props.experience}
                </CardText>
            </CardBody>
        </Card>

    );
};

export default Result;