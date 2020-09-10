import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { addRole } from "../../actions/role";

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
            inputRole: "",
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addRole(this.state.inputRole)
        alert(`Cargo [${this.state.inputRole}] cadastrado com sucesso!`)
    }

    handleInputChange = (e) => {
        this.setState({
            inputRole: e.target.value
        })
    }


    render() {
        console.log("Testando valor redux role")
        console.log(this.props.getRole)
        return (
            <SignupEmployeeWrapper onSubmit={this.handleSubmit}>
                <Typography variant="h5" gutterBottom>
                    Cadastro de funcinários
                </Typography>
                <Box m={2} />
                <TextField id="outlined-basic" label="Insira o nome" variant="outlined" value={this.state.inputRole} onChange={this.handleInputChange} />
                <TextField id="outlined-basic" label="Insira o sobrenome" variant="outlined" value={this.state.inputRole} onChange={this.handleInputChange} />
                <TextField
                    id="outlined-select-currency-native"
                    select
                    label="Native select"
                    // value={currency}
                    // onChange={handleChange}
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
                <TextField
                    id="date"
                    label="Data de nascimento"
                    type="date"
                    // defaultValue="2017-05-24"
                    // className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

                <TextField
                    label="Salário"
                    // value={values.numberformat}
                    // onChange={handleChange}
                    name="numberformat"
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                    }}
                />

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
        getRole: state.role.roleData
    }
}

const mapDispatchToProps = dispatch => ({
    addRole: (role) => dispatch(addRole(role))
})


export default connect(mapStateToProps, mapDispatchToProps)(SignupEmployeePage);


