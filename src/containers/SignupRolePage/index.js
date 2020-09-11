import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { addRole } from "../../actions/role";


const SignupRolePageWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

class SignupRolePage extends React.Component {
    constructor(props){
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
            <SignupRolePageWrapper onSubmit={this.handleSubmit}>
                <Typography variant="h5" gutterBottom>
                    Cadastro de cargo
                </Typography>
                <Box m={2} />
                <TextField id="outlined-basic" label="Insira o nome cargo" variant="outlined" value={this.state.inputRole} onChange={this.handleInputChange} />
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
            </SignupRolePageWrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        getRole: state.role
    }
  }

const mapDispatchToProps = dispatch => ({
    addRole: (role) => dispatch(addRole(role))
  })
  

export default connect(mapStateToProps, mapDispatchToProps)(SignupRolePage);


