import React from "react";
import { Container, Form,  Button, FormGroup, Label, Input} from "reactstrap";
import {
    InputEmail,
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
                    <FormGroup className="mt-3">
                        <Label for="username">Username :</Label>
                        <Input
                            id="username"
                            name="username"
                            placeholder="Contoh: PanjiSiPetualang"
                            type="text"
                            onChange={(e) => this.onChangeInput(e)}
                            required
                        />
                    </FormGroup>
                    <InputEmail onChange={(e) => this.onChangeInput(e)}/>
                    <FormGroup>
                        <Label for="password">Password :</Label>
                        <Input
                            id="password"
                            name="password"
                            placeholder="Contoh: Garaga@123"
                            type="password"
                            minLength={"6"}
                            onChange={(e) => this.onChangeInput(e)}
                            required
                        />
                    </FormGroup>
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