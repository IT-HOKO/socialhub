import React, {useState} from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Sidebar from './Sidebar'

const SidebarLink = styled(Link)`
    display: flex;
    color: #e1e9fc:
    justify-content: space-between;
    align-items: center;
    passing: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;

    &:hover {
        background: #252831;
        border-left: 4px solid #632ce4;
        cursor: pointer;
    }
`;

const SidebarLabel =styled.span`
margin-left: 16px;
`;

const DropdownLink = styled(Link)`
    background: #414757;
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;

    &:hover {
        background: #632ce4;
        cursor: pointer;
    }
`;

const Submenu = ({item}) =>{
    const [subnav, setSubnav] = useState(false)
    const showSubnav = () => setSubnav(!subnav)
    return(
        <>
        {/* Füllt Sidebar mit Content aus SideBarData */}
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                {/* Wenn SubNav in SidebarData vorhanden, Pfeil anzeigen/ausblenden*/}
                <div>
                    {item.subNav && subnav 
                    ? item.iconOpened 
                    : item.subNav 
                    ? item.iconClosed 
                    : null}
                </div>
            </SidebarLink>
            {subnav && item.subNav.map((item, index) => {
                return(
                    <DropdownLink to={item.path} key={index}>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                    </DropdownLink>
                )
            })}
        </>
    );
};

export default Submenu