import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

class InputExperience extends React.Component {
    render () {
        return (
            <FormGroup>
                <Label for="experience">Experience :</Label>
                <Input
                    id="experience"
                    name="experience"
                    placeholder="Contoh: 50000"
                    type="number"
                    onChange={this.props.onChange}
                />
            </FormGroup>
        );
    };
};

export default InputExperience;