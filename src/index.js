import { Grid, Box, Typography, ButtonBase } from '@mui/material';
import React from 'react';
import hahaloloIcon from './assests/Hahalolo_icon.png'
import halomeIcon from './assests/Halome_icon.png'
import './index.css'
const { render } = require("react-dom");
import backgroundImage from './assests/background.jpg'
import gridIcon from './assests/icon/grid-dots.svg'
import menuIcon from './assests/icon/menu.png'

function Index() {

    return (
        <Grid sx={{ width: '100vw', height: '100vh', backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', position: 'relative' }}>
            <Grid>
                <ButtonBase className='nav__icon' sx={{ width: '40px', height: '40px', position: 'absolute', right: '10px', top: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', backgroundColor: 'rgba(0, 0, 0, 0.2)', transition: '.3s ease-in-out' }}>
                    <Box component={"img"} src={menuIcon} alt="menu icon" sx={{ width: '20px', height: '20px', filter: 'invert(1)' }} />
                </ButtonBase>
            </Grid>
        </Grid>
    )
}

render(<Index />, document.getElementById("root"));