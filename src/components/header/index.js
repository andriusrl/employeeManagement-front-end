import React,{useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from "react-redux"
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { push } from "connected-react-router";
import { routes } from '../../containers/Router'

function Headers(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    props.menuStatus === false ? false :
    <AppBar position="static">
      <Toolbar variant="regular">
        <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          <MenuIcon />
        </IconButton>
        <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={props.setSignupEmployeePageRoute}>Cadastrar funcionários</MenuItem>
        <MenuItem onClick={props.setListEmployeePageRoute}>Listar funcinários</MenuItem>
        <MenuItem onClick={props.setSignupRolePageRoute}>Cadastrar cargos</MenuItem>
        <MenuItem onClick={props.setListRolePageRoute}>Listar cargos</MenuItem>
      </Menu>
        <Typography color="inherit">
          Gerenciador de funcionários
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

const mapStateToProps = state => {
  return {
      menuStatus: state.menu.status
  }
}

const mapDispatchToProps = dispatch => ({
  setSignupEmployeePageRoute: () => dispatch(push(routes.signupEmployee)),
  setListEmployeePageRoute: () => dispatch(push(routes.listEmployee)),
  setSignupRolePageRoute: () => dispatch(push(routes.signupRole)),
  setListRolePageRoute: () => dispatch(push(routes.listRole))
})


export default connect(mapStateToProps, mapDispatchToProps)(Headers);
