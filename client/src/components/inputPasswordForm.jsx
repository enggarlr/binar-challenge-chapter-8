import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

class InputPassword extends React.Component {
    render () {
        return (
            <FormGroup>
                <Label for="password">Password :</Label>
                <Input
                    id="password"
                    name="password"
                    placeholder="Contoh: Garaga@123"
                    type="password"
                    minLength={"6"}
                    onChange={this.props.onChange}
                />
            </FormGroup>
        );
    };
};

export default InputPassword;