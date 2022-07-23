import React from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import {
    InputUsername,
    InputEmail,
    InputPassword,
    InputExperience,
    Result
} from "../../components"

class FindPlayer extends React.Component {
    constructor (props) {
        super(props);
    
        this.state = {
            id: '',
            username: '',
            email: '',
            password: '',
            experience: '',
            showResult: false
        }

        this.onChangeInput = this.onChangeInput.bind(this);
    }
    
    onChangeInput (e) {
        this.setState({
            [e.target.id]: e.target.value,
            showResult: false
        })
    }   

    handleSubmit (event) {
        event.preventDefault();
    }

    render () {
        return (
            <Container>
                <h1>Find a Player</h1>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="id">Id :</Label>
                        <Input
                            id="id"
                            name="id"
                            placeholder="Contoh: 1, 2, ..., etc"
                            type="number"
                            onChange={(e) => this.onChange(e)}
                            required
                        />
                    </FormGroup>
                    <InputUsername onChange={(e) => this.onChangeInput(e)}/>
                    <InputEmail onChange={(e) => this.onChangeInput(e)}/>
                    <InputPassword onChange={(e) => this.onChangeInput(e)}/>
                    <InputExperience onChange={(e) => this.onChangeInput(e)}/>
                    <Button 
                        type="button" 
                        color="primary" 
                        onClick={() => this.setState({showResult : true})}
                    >
                        Submit
                    </Button>
                </Form>

                {this.state.showResult && 
                    <Result 
                        id={this.state.id}
                        username={this.state.username} 
                        email={this.state.email} 
                        password={this.state.password} 
                        experience={this.state.experience} 
                    />
                }
            </Container>
        ) 
    }
}

export default FindPlayer;