import React from "react";
import { Container, Form,  Button } from "reactstrap";
import {
    InputUsername,
    InputEmail,
    InputPassword,
    InputExperience,
    Result
} from "../../components";

class CreatePlayer extends React.Component {
    constructor (props) {
        super(props);
    
        this.state = {
            username: '',
            email: '',
            password: '',
            experience: '',
            showResult: false
        };

        this.onChangeInput = this.onChangeInput.bind(this)
    };
    
    onChangeInput (e) {
        this.setState({
            [e.target.id]: e.target.value,
            showResult: false
        });
    };

    handleSubmit (event) {
        event.preventDefault();
    }

    render () {
        return (
            <Container>
                <h1>Create New Player</h1>
                <Form onSubmit={this.handleSubmit}>
                    <InputUsername onChange={(e) => this.onChangeInput(e)}/>
                    <InputEmail onChange={(e) => this.onChangeInput(e)}/>
                    <InputPassword onChange={(e) => this.onChangeInput(e)}/>
                    <InputExperience onChange={(e) => this.onChangeInput(e)}/>
                    <Button 
                        type="submit" 
                        color="primary" 
                        onClick={() => this.setState({showResult : true})}
                    >
                        Submit
                    </Button>
                </Form>

                {this.state.showResult && 
                    <Result 
                        username={this.state.username} 
                        email={this.state.email} 
                        password={this.state.password} 
                        experience={this.state.experience} 
                    />
                }
            </Container>
        ); 
    };
};

export default CreatePlayer;