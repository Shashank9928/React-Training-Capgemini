import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import LiquorIcon from '@material-ui/icons/LocalBar';
import { Button, MenuItem } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Modal from "@material-ui/core/Modal";
import { Box } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import DATA from "../Mainbody/Data.json";
import { ButtonGroup } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "50%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
};
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));
export default function Navigation(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const classes = useStyles();
    function closeDialog() {
        setOpen(false);
    }
    return (
        <div>
            <AppBar position="static">
                <div className='container-fluid' >
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton}
                            color="inherit"
                            aria-label="menu">
                            <LiquorIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            TupperWare
                        </Typography>
                        {/* Cart Icon Start */}
                        <div className='cartIcon' >
                            <MenuItem>
                                <Button
                                    onClick={handleOpen}
                                    aria-label="Cart"
                                    color="inherit"
                                >
                                    <Badge badgeContent={props.cartItemsCount} color="error">
                                        <ShoppingCartIcon />
                                    </Badge>
                                </Button>
                            </MenuItem>
                        </div>
                        {/* Cart Icon End */}

                    </Toolbar>
                </div>
            </AppBar>
            {/* Cart Modal Start */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="row closeModel">
                        <IconButton aria-label="close" onClick={closeDialog}>
                            <CloseIcon color="error" />
                        </IconButton>
                    </div>
                    <div className="clear"></div>
                    <div class="card">
                        <div class="row text-center">
                            <div class="col-md-12 cart">
                                <div class="title">
                                    <div class="row">
                                        <div class="col">
                                            <h4><b>Shopping Cart</b></h4>
                                        </div>
                                        <div class="col align-self-center text-right text-muted">{props.cartIteams.length} items</div>
                                    </div>
                                </div>

                                <div class="border-top border-bottom">
                                    {
                                        props.cartIteams.map((item) => {
                                            let i = 0;
                                            for (i; i < DATA.length; i++) {
                                                if (item.id === DATA[i].id) {
                                                    break;
                                                }
                                            }
                                            console.log(DATA[i].name);
                                            return (
                                                <div class="row align-items-center">
                                                    <div class="col-md-2"><img class="img-fluid" src={DATA[i].image} alt={DATA[i].name} /></div>
                                                    <div class="col-md-4">
                                                        <div class="row text-muted">{DATA[i].name}</div>
                                                        <div class="row">{DATA[i].description}</div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <ButtonGroup variant="text" aria-label="outlined primary button group">
                                                            <Button value={item.id} onClick={(e) => props.recuceCount(e.currentTarget.value)}>-</Button>
                                                            <Button disabled={true} >{item.count}</Button>
                                                            <Button value={item.id} onClick={(e) => props.increaseCount(e.currentTarget.value)}>+</Button>
                                                        </ButtonGroup>

                                                    </div>
                                                    <div class="col-md-3">&euro; {DATA[i].price} <IconButton
                                                        value={item.id} onClick={(e) => props.removeItem(e.currentTarget.value)}
                                                    >
                                                        <DeleteIcon />
                                                    </IconButton> </div>
                                                </div>
                                            );
                                        })
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
            {/* Cart Modal End */}
        </div>
    );
}
