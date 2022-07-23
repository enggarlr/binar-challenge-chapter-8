import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

class InputEmail extends React.Component {
    render () {
        return (
            <FormGroup>
                <Label for="email">Email :</Label>
                <Input
                    id="email"
                    name="email"
                    placeholder="Contoh: panji@gmail.com"
                    type="email"
                    onChange={this.props.onChange}
                />
            </FormGroup>
        );
    };
};

export default InputEmail;