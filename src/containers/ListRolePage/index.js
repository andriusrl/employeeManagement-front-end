import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { removeRole } from "../../actions/role";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const ListRolePageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

class ListRolePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dialogStatus: false,
            indexRoleToRemove: 0
        }
    }

    removeRole = (index) => {
        this.setState({
            indexRoleToRemove: index
        })
        this.handleClickOpen()
    }

    showRoles = () => {
        return (
            <TableBody>
                {
                    this.props.getRole.map((role, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell>
                                    <Typography variant="subtitle2">
                                        {role}
                                    </Typography>
                                </TableCell>
                                <TableCell align="right"><Button variant="contained" color="secondary" onClick={() => { this.removeRole(index) }} >Remover</Button></TableCell>
                            </TableRow>
                        )
                    })
                }
            </TableBody>
        )
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
            <ListRolePageWrapper>
                <Typography variant="h6" gutterBottom>
                    Lista de cargos
                </Typography>
                <Table aria-label="simple table">
                    {this.showRoles()}
                </Table>
                <Dialog
                    open={this.state.dialogStatus}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>{"Você tem certeza que deseja remover esse cargo?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Nome do cargo: {this.props.getRole[this.state.indexRoleToRemove]}
                            {
                            this.props.getEmployee.filter(employee=>{
                                return employee.role === this.props.getRole[this.state.indexRoleToRemove]}).length > 0 
                                    ?<DialogContentText>Atenção: Cargo ligado a funcionário</DialogContentText>
                                    :false
                            }
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={this.handleClose}
                            color="primary"
                        >
                            Não
                        </Button>
                        <Button
                            onClick={() => {
                                this.props.removeRole(this.state.indexRoleToRemove)
                                this.handleClose()
                            }}
                            color="primary" autoFocus
                        >
                            Sim
                        </Button>
                    </DialogActions>
                </Dialog>
                {this.props.getRole.length===0?<DialogContentText>Não há cargos cadastrados</DialogContentText> : false}
            </ListRolePageWrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        getEmployee: state.employee,
        getRole: state.role
    }
}

const mapDispatchToProps = dispatch => ({
    removeRole: (index) => dispatch(removeRole(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListRolePage);