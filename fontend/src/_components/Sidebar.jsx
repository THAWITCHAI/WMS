

// function Sidebar() {
//     return (
//         <div className="sidebar" style={{ width: '200px', background: '#eee', padding: '1rem' }}>
//             <nav>
//                 <ul style={{ listStyle: 'none', padding: 0 }}>
//                     <li><Link to="/">รับสิค้าเข้าคลัง</Link></li>
//                     <li><Link to="/about">เบิกสินค้าออกคลัง</Link></li>
//                     <li><Link to="/contact">สินค้าบนคลัง</Link></li>
//                     <li>รายการเบิก-รับ สินค้า</li>
//                 </ul>
//             </nav>
//         </div>
//     );
// }
import { Link } from "react-router-dom";
import DvrIcon from '@mui/icons-material/Dvr';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export default function Sidebar() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>

                <ListItem>
                    <Link to="/admission" style={{ textDecoration: 'none', color: '#000' }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <DvrIcon />
                            </ListItemIcon>
                            <ListItemText primary={"รับสิค้าเข้าคลัง"} />
                        </ListItemButton>
                    </Link>
                </ListItem>

                <ListItem>
                    <Link to="/Receiveout" style={{ textDecoration: 'none', color: '#000' }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <DvrIcon />
                            </ListItemIcon>
                            <ListItemText primary={"เบิกสินค้าออกคลัง"} />
                        </ListItemButton>
                    </Link>
                </ListItem>

                <ListItem>
                    <Link to="/" style={{ textDecoration: 'none', color: '#000' }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <DvrIcon />
                            </ListItemIcon>
                            <ListItemText primary={"สินค้าทั้งหมด"} />
                        </ListItemButton>
                    </Link>
                </ListItem>

                <ListItem>
                    <Link to="/History" style={{ textDecoration: 'none', color: '#000' }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <DvrIcon />
                            </ListItemIcon>
                            <ListItemText primary={"รายการ รับ-เบิก"} />
                        </ListItemButton>
                    </Link>
                </ListItem>

            </List>
            <Divider />
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)}>
                OPEN MENU <KeyboardArrowRightIcon />
            </Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}
