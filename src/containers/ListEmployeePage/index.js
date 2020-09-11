import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { removeEmployee } from "../../actions/employee";
import moment from 'moment'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const SelectCityPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

class ListEmployeePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dialogStatus: false,
            indexEmployeeToRemove: 0
        }
    }

    removeEmployee = (index) => {
        this.setState({
            indexEmployeeToRemove: index,
            dialogStatus: true
        })
        
    }

    showEmployees = () => {
        return (
            <TableBody>
                {
                    this.props.getEmployee.map((employee, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell>
                                    <Typography variant="subtitle2">
                                        {employee.name} {employee.lastName}
                                    </Typography>
                                    <Typography variant="body2">
                                        Nasc: {moment(employee.birth).format('DD/MM/YYYY')} Salário: {employee.salary}
                                    </Typography>
                                </TableCell>
                                <TableCell align="right"><Button variant="contained" color="secondary" onClick={() => { this.removeEmployee(index) }} >Remover</Button></TableCell>
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
        console.log("Onde da erro")
        console.log(this.props?.getEmployee[this.state.indexEmployeeToRemove]?.name)
        return (
            <SelectCityPageWrapper>
                <Typography variant="h6" gutterBottom>
                    Lista de funcionários
                </Typography>
                <Table aria-label="simple table">
                    {this.showEmployees()}
                </Table>
                <Dialog
                    open={this.state.dialogStatus}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>{"Você tem certeza que deseja remover esse funcionário?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Nome do funcinário: {this.props?.getEmployee[this.state.indexEmployeeToRemove]?.name}
                            {` `}
                            {this.props.getEmployee[this.state.indexEmployeeToRemove]?.lastName}
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
                                this.props.removeEmployee(this.state.indexEmployeeToRemove)
                                this.handleClose()
                            }}
                            color="primary" autoFocus
                        >
                            Sim
                        </Button>
                    </DialogActions>
                </Dialog>
                {this.props.getEmployee.length===0?<DialogContentText>Não há funcionários cadastrados</DialogContentText> : false}
            </SelectCityPageWrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        getEmployee: state.employee
    }
}

const mapDispatchToProps = dispatch => ({
    removeEmployee: (index) => dispatch(removeEmployee(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListEmployeePage);