import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { addRole } from "../../actions/role";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const SignupRolePageWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

class SignupRolePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputRole: "",
            dialogStatus: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addRole(this.state.inputRole)
        this.handleClickOpen()
        this.setState({
            inputRole: ""
        })
    }

    handleInputChange = (e) => {
        this.setState({
            inputRole: e.target.value
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
                <Dialog
                    open={this.state.dialogStatus}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>{"Cargo criado com sucesso!"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Nome do cargo: {this.props.getRole[this.props.getRole.length-1]}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Fechar
                        </Button>
                    </DialogActions>
                </Dialog>
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