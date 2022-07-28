import { Box, ButtonBase, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import earthIcon from '../../assests/icon/earth-icon.png'
import './index.css'

export default function AddTabItem({ itemData }) {
    return (
        <Grid sx={{ width: '100%', backgroundColor: '#fff', padding: '56px 15px 16px 15px', marginBottom: '30px', position: 'relative', borderRadius: '7px' }}>
            <Grid sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'absolute', top: '-10px', left: 0, padding: '0 20px' }}>
                <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <Box sx={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: "center", overflow: 'hidden' }}>
                        <Box component={"img"} src={itemData.image} alt={itemData.name} sx={{ width: '55px', borderRadius: '50%' }} />
                    </Box>
                    <Typography component={"p"} >{itemData.name}</Typography>
                </Grid>
                <Link href={itemData.linkTo}>
                    <Box component={"img"} src={earthIcon} alt="link to" sx={{ width: '28px', height: '28px', filter: 'invert(0.5)', }} />
                </Link>
            </Grid>
            <Grid sx={{ marginBottom: "10px" }}>
                <Typography className='item__desc' component={"p"}>{itemData.desc}</Typography>
            </Grid>
            <Grid sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <ButtonBase sx={{ padding: '10px 30px', border: '1px solid #ebebeb', fontSize: '20px', borderRadius: '7px' }}>Thêm</ButtonBase>
            </Grid>
        </Grid>
    )
}
