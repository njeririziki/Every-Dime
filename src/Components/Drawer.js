import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import {makeStyles,useTheme} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Hidden from '@material-ui/core/Hidden'

const useStyles= makeStyles(theme =>({
drawer:{
    [theme.breakpoints.up('sm')] :{
        width:300,
        flexShrink:0
    }
}

}))

const AllDrawer = () => {
    const [open,setOpen] = React.useState(false)
    const classes = useStyles();
    const theme = useTheme();
    const drawer=(
        <div>
            
                <List>
                    <ListItem
                    button>
                   User Profile
                    </ListItem>
                </List>
            
        </div>
    )
    return ( 
        <div 
        className={classes.drawer}>
          <nav className={classes.drawer} aria-label="mailbox folders">
       
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={()=>setOpen(true)}
            onClose={()=>setOpen(!open)}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
 
        </div>
        
     );
}
 
export default AllDrawer;