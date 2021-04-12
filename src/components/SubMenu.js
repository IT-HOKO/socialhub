import React from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'
import {link} from 'react-router-dom'
import styled from 'styled-components'
import Sidebar from './sidebar'

const SidebarLink = styled(Link)`
    display: flex;
    color: #e1e9fc:
`;

const SidebarLabel =styled.span`
`;

const Submenu = () =>{
    return(
        <>
            <SidebarLink to={item.path}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
            </SidebarLink>
        </>
    )
}

export default Submenu