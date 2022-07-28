import { Box, ButtonBase, Grid, InputBase, Link, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Navbar from '../Navbar/Navbar'
import twIcon from '../../assests/icon/tw-logo.png'
import hhllIcon from '../../assests/icon/hahalolo-icon.png'
import helomeIcon from '../../assests/icon/halome.jpg'
import heyotourIcon from '../../assests/icon/Heyotour-Icon.png'
import heyotripIcon from '../../assests/icon/Heyotrip-Icon.png'
import bookmarkIcon from '../../assests/icon/bookmark.png'
import historyIcon from '../../assests/icon/history.png'
import downloadIcon from '../../assests/icon/download.png'
import settingIcon from '../../assests/icon/setting.png'
import shopeeIcon from '../../assests/icon/shopee-icon.png'
import lazadaIcon from '../../assests/icon/lazada-icon.png'
import amazonIcon from '../../assests/icon/amazonIcon.jpg'
import fbIcon from '../../assests/icon/fb-icon.png'
import bookingIcon from '../../assests/icon/booking-icon.png'
import tiIcon from '../../assests/icon/ti-icon.png'
import ytIcon from '../../assests/icon/youtube-icon.png'
import gameIcon from '../../assests/icon/game-icon.png'
import backgroundImage from '../../assests/background.jpg'
import menuIcon from '../../assests/icon/menu.png'
import ggIcon from '../../assests/icon/gg-icon.png'
import { StoreContext } from '../../context/StoreProvider/StoreProvider';
import "swiper/css";
import "swiper/css/pagination";
import './index.css'

const gridData = [
    {
        id: 1,
        icon: hhllIcon,
        title: 'Hahalolo',
        url: 'https://www.hahalolo.com/'
    },
    {
        id: 2,
        icon: helomeIcon,
        title: 'halome',
        url: 'https://halome.com/welcome'
    },
    {
        id: 3,
        icon: heyotourIcon,
        title: 'Heyotour',
        url: 'https://heyotrip.com/'
    },
    {
        id: 4,
        icon: heyotripIcon,
        title: 'Heyotrip',
        url: 'https://heyotrip.com/'
    },
    {
        id: 5,
        icon: bookmarkIcon,
        title: 'Bookmark',
    },
    {
        id: 6,
        icon: historyIcon,
        title: 'History',
    },
    {
        id: 7,
        icon: downloadIcon,
        title: 'Download',
    },
    {
        id: 8,
        icon: settingIcon,
        title: 'Setting',
    },
    // {
    //     id: 9,
    //     icon: tiIcon,
    //     title: 'Tiện ích',
    // },
    // {
    //     id: 10,
    //     icon: gameIcon,
    //     title: 'Games',
    // },
    // {
    //     id: 11,
    //     icon: '',
    //     title: 'Game',
    // },
    // {
    //     id: 12,
    //     icon: '',
    //     title: 'Gmail',
    // },
]

export default function Fullpage() {

    const { isNavVisible, setIsNavVisible } = useContext(StoreContext)

    return (
        <Grid sx={{ width: '100vw', height: '100vh', backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', position: 'relative' }}>
            <Grid>
                <ButtonBase onClick={() => setIsNavVisible(!isNavVisible)} className='nav__icon' sx={{ width: '40px', height: '40px', position: 'absolute', right: '10px', top: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', backgroundColor: 'rgba(0, 0, 0, 0.2)', transition: '.3s ease-in-out' }}>
                    <Box component={"img"} src={menuIcon} alt="menu icon" sx={{ width: '20px', height: '20px', filter: 'invert(1)' }} />
                </ButtonBase>
            </Grid>
            <Grid sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <Grid sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box sx={{ width: '30%', height: '55px', borderRadius: '50px', backgroundColor: '#fff', position: "relative", display: 'flex', alignItems: 'center', boxShadow: 'rgb(0 0 0 / 16%) 0px 2px 2px 0px, rgb(0 0 0 / 8%) 0px 0px 0px 1px' }}>
                        <Box component={"img"} src={ggIcon} alt="gg icon" sx={{ width: '32px', position: 'absolute', left: '10px', top: '11px' }} />
                        <InputBase placeholder='Nhập tìm kiếm' sx={{ marginLeft: '60px', fontSize: '20px', width: '100%', paddingRight: '30px' }} />
                    </Box>
                </Grid>
                <Swiper className="mySwiper" pagination={true} modules={[Pagination]}>
                    <SwiperSlide className='slide' >
                        <Grid container>
                            {
                                gridData.map((item, index) => {
                                    return (
                                        <Grid key={item.id} item xs={3} sx={{ width: '100%', height: '280px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                            <Link href={item.url} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', textDecoration: 'none' }} >
                                                <Box sx={{ width: '180px', height: '180px', backgroundImage: `url(${item.icon})`, backgroundSize: 'cover', borderRadius: '50%', overflow: 'hidden' }}></Box>
                                                <Typography component={"p"} sx={{ fontSize: '15px', color: '#fff', marginTop: '5px' }}>{item.title}</Typography>
                                            </Link>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </SwiperSlide>
                    <SwiperSlide className='slide' >
                        <Grid container>
                            {
                                gridData.map((item, index) => {
                                    return (
                                        <Grid key={item.id} item xs={3} sx={{ width: '100%', height: '280px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                            <Link href={item.url} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', textDecoration: 'none' }} >
                                                <Box sx={{ width: '180px', height: '180px', backgroundImage: `url(${item.icon})`, backgroundSize: 'cover', borderRadius: '50%', overflow: 'hidden' }}></Box>
                                                <Typography component={"p"} sx={{ fontSize: '15px', color: '#fff', marginTop: '5px' }}>{item.title}</Typography>
                                            </Link>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </SwiperSlide>
                </Swiper>
            </Grid>
            <Navbar />
        </Grid >
    )
}
