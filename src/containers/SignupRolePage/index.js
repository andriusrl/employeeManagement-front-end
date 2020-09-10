import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


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
    }

    handleInputChange = (e) => {
        this.setState({
            inputRole: e.target.value
        })
    }

    
    render() {
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


export default connect(null, null)(SignupRolePage);


