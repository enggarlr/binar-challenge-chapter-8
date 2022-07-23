import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

class InputUsername extends React.Component {
    render () {
        return (
            <FormGroup className="mt-3">
                <Label for="username">Username :</Label>
                <Input
                    id="username"
                    name="username"
                    placeholder="Contoh: PanjiSiPetualang"
                    type="text"
                    onChange={this.props.onChange}
                />
            </FormGroup>
        );
    };
};

export default InputUsername;