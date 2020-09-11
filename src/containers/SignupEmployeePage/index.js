import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { addEmployee } from "../../actions/employee";

import NumberFormat from 'react-number-format';


const SignupEmployeeWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            thousandSeparator
            isNumericString
            prefix="$"
        />
    );
}

class SignupEmployeePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            lastName: "",
            role: "",
            birth: "",
            salary: "",
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addEmployee({
            name: this.state.name,
            lastName: this.state.lastName,
            role: this.state.role,
            birth: this.state.birth,
            salary: this.state.salary,
        })
        alert(`Funcionário [${this.state.name}] cadastrado com sucesso!`)
    }

    handleInputChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }


    render() {
        // console.log("Testando valor redux role")
        // console.log(this.props.getRole)
        console.log("Testando adicionar funcionario")
        console.log(this.props.getEmployee)
        return (
            <SignupEmployeeWrapper onSubmit={this.handleSubmit}>
                <Typography variant="h5" gutterBottom>
                    Cadastro de funcinários
                </Typography>
                <Box m={2} />
                <TextField name="name" id="outlined-basic" label="Insira o nome" variant="outlined" value={this.state.name} onChange={this.handleInputChange} />

                <Box m={1} />

                <TextField name="lastName" id="outlined-basic" label="Insira o sobrenome" variant="outlined" value={this.state.inputRole} onChange={this.handleInputChange} />

                <Box m={1} />

                <TextField
                    name="salary"
                    label="Salário"
                    value={parseInt(this.state.salary)}
                    onChange={this.handleInputChange}
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                    }}
                />

                <Box m={1} />

                <TextField
                    name="birth"
                    id="date"
                    label="Data de nascimento"
                    type="date"
                    // defaultValue="2017-05-24"
                    value={this.state.birth}
                    onChange={this.handleInputChange}
                    // className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

                <Box m={1} />

                <TextField
                    name="role"
                    id="outlined-select-currency-native"
                    select
                    label="Selecione o cargo"
                    value={this.state.role}
                    onChange={this.handleInputChange}
                    SelectProps={{
                        native: true,
                    }}
                    variant="outlined"
                >
                    {
                        this.props.getRole.map((role, index) => {
                            return (
                                <option key={index} value={role}>
                                    {role}
                                </option>
                            )
                        })
                    }
                </TextField>

                <Box m={1} />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                // endIcon={<Icon>send</Icon>}
                >
                    Cadastrar
                </Button>
                <Box m={1} />
            </SignupEmployeeWrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        getRole: state.role,
        getEmployee: state.employee
    }
}

const mapDispatchToProps = dispatch => ({
    addEmployee: (employee) => dispatch(addEmployee(employee))
})


export default connect(mapStateToProps, mapDispatchToProps)(SignupEmployeePage);


