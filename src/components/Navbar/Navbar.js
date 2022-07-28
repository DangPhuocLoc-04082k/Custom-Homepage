import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types';
import { Box, ButtonBase, Grid, Tab, Tabs } from '@mui/material';
import AddTab from '../AddTab/AddTab';
import addIcon from '../../assests/icon/add.png'
import settingIcon from '../../assests/icon/settings.png'
import closeIcon from '../../assests/icon/close.png'

import './index.css'
import { StoreContext } from '../../context/StoreProvider/StoreProvider';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Box
            sx={{ height: "100%" }}
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ padding: '20px 0', height: '100%' }}>
                    {children}
                </Box>
            )}
        </Box>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Navbar() {

    const { isNavVisible, setIsNavVisible } = useContext(StoreContext)
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Grid className={isNavVisible ? 'navbar' : 'navbar__hidden'} sx={{ width: '600px', height: '100vh', position: 'fixed', right: 0, top: 0, backgroundColor: '#fff', transition: '.5s ease-in-out' }}>
            <Box sx={{ position: 'relative' }}>
                <ButtonBase onClick={() => setIsNavVisible(!isNavVisible)} sx={{ position: 'absolute', left: '10px', top: '10px', zIndex: 10 }}>
                    <Box component={"img"} src={closeIcon} alt="close icon" sx={{ width: '28px', height: '28px', filter: 'invert(0.5)' }} />
                </ButtonBase>
            </Box>
            <Box className='tabs' sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{ width: "100%", justifyContent: 'space-around' }}>
                    <Tab icon={<Box component={"img"} src={addIcon} alt="add icon" sx={{ width: "24px" }} />} label="Thêm" {...a11yProps(0)} />
                    <Tab icon={<Box component={"img"} src={settingIcon} alt="setting icon" sx={{ width: "24px" }} />} label="Cài đặt" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <AddTab />
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
        </Grid>
    )
}
