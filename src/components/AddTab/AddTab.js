import { Box, Grid, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';
import './index.css'
import popularIcon from '../../assests/icon/popular.png'
import newsIcon from '../../assests/icon/news.png'
import shoppingIcon from '../../assests/icon/shopping.png'
import sportsIcon from '../../assests/icon/sports.png'
import techIcon from '../../assests/icon/tech.png'
import finance from '../../assests/icon/finance.png'
import amazonIcon from '../../assests/icon/amazonIcon.jpg'
import twIcon from '../../assests/icon/tw-logo.png'
import AddTabItem from '../AddTabItem/AddTabItem';


const childrenTabsData = [
    {
        title: 'Phổ biến',
        icon: popularIcon,
        data: [
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: "https://www.amazon.com/?&_encoding=UTF8&tag=electron0adb0-20&linkCode=ur2&linkId=e302e26c3d59939c7740e91c7fa4a67f&camp=1789&creative=9325"
            },
            {
                name: "Twitter",
                image: twIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
        ]
    },
    {
        title: 'Tin tức',
        icon: newsIcon,
        data: [
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
        ]
    },
    {
        title: 'Mua sắm',
        icon: shoppingIcon,
        data: [
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
        ]
    },
    {
        title: 'Thể thao và du lịch',
        icon: sportsIcon,
        data: [
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
        ]
    },
    {
        title: 'Công nghệ',
        icon: techIcon,
        data: [
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
        ]
    },
    {
        title: 'Tài chính',
        icon: finance,
        data: [
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
        ]
    },
    {
        title: 'Hahalolo Eco System',
        icon: popularIcon,
        data: [
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
            {
                name: "Amazon",
                image: amazonIcon,
                desc: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
                linkTo: ''
            },
        ]
    },
]

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Grid
            sx={{ width: '100%', }}
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </Grid>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function AddTab() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Grid sx={{ height: "100%" }}>
            <Box
                sx={{ flexGrow: 1, display: 'flex', height: "100%" }}
            >
                <Tabs
                    className='add__tabs'
                    orientation="vertical"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider', width: '200px', height: '100%', textAlign: 'left' }}
                >
                    {
                        childrenTabsData.map((item, index) => {
                            return (
                                <Tab key={index} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', textAlign: 'left' }} icon={<Box className='item__icon' component={"img"} src={item.icon} alt="add icon" sx={{ width: "16px", marginRight: '5px' }} />} label={<Typography sx={{ wordBreak: 'keep-all', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.title}</Typography>} {...a11yProps(index)} />
                            )
                        })
                    }
                </Tabs>
                <Grid sx={{ backgroundColor: 'rgb(245, 245, 245)', width: '100%', height: '100%', overflow: 'scroll', paddingBottom: '40px' }}>
                    {
                        childrenTabsData.map((item, index) => {
                            return (
                                <TabPanel key={index} value={value} index={index} sx={{ width: '100%' }}>
                                    {
                                        item.data && item.data.map((item, index) => {
                                            return (
                                                <Box key={index}>
                                                    <AddTabItem itemData={item} />
                                                </Box>
                                            )
                                        })
                                    }
                                </TabPanel>
                            )
                        })
                    }
                </Grid>
            </Box>
        </Grid>
    )
}
