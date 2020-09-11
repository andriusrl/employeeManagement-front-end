import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { addEmployee } from "../../actions/employee";
import NumberFormat from 'react-number-format';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const SignupEmployeeWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const BirthWrapper = styled.div`
    display: flex;
`

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

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
            dialogStatus: false
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
        this.handleClickOpen()
        this.setState({
            name: "",
            lastName: "",
            role: this.props.getRole[0],
            birth: "",
            salary: ""
        })
    }

    handleInputChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleClickOpen = () => {
        this.setState({
            dialogStatus: true
        })
    };

    handleClose = () => {
        this.setState({
            dialogStatus: false
        })
    };

    render() {
        return (
            <SignupEmployeeWrapper onSubmit={this.handleSubmit}>
                <Typography variant="h5" gutterBottom>
                    Cadastro de funcionários
                </Typography>
                <Box m={2} />
                <TextField
                    name="name"
                    required
                    id="outlined-basic"
                    label="Insira o nome"
                    variant="outlined"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                />

                <Box m={1} />

                <TextField
                    name="lastName"
                    required
                    id="outlined-basic"
                    label="Insira o sobrenome"
                    variant="outlined" value={this.state.lastName}
                    onChange={this.handleInputChange}
                />

                <Box m={1} />

                <BirthWrapper>
                    <Typography
                        variant="body1"
                    >
                        Data nascimento:
                    </Typography>
                    <TextField
                        name="birth"
                        required
                        // label="Data de nascimento"
                        type="date"
                        value={this.state.birth}
                        onChange={this.handleInputChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </BirthWrapper>

                <Box m={1} />

                <TextField
                    name="salary"
                    required
                    label="Salário"
                    value={parseInt(this.state.salary)}
                    onChange={this.handleInputChange}
                    InputProps={{
                        inputComponent: NumberFormatCustom,
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

                <Box m={2} />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                // endIcon={<Icon>send</Icon>}
                >
                    Cadastrar
                </Button>
                <Box m={1} />
                <Dialog
                    open={this.state.dialogStatus}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>{"Funcionário cadastrado com sucesso!"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Nome do funcinário: {this.props.getEmployee[this.props.getEmployee.length - 1].name}
                            {this.props.getEmployee[this.props.getEmployee.length - 1].lastName}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Fechar
                        </Button>
                    </DialogActions>
                </Dialog>
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


