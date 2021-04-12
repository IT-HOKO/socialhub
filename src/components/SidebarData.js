import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: 'Overview',
        path: '/overview',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Users',
                path: '/overview/users',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Revenue',
                path: '/overview/revenue',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    
        subNav: [
          {
            title: 'Reports',
            path: '/reports/reports1',
            icon: <IoIcons.IoIosPaper />,
            cName: 'sub-nav'
          },
          {
            title: 'Reports 2',
            path: '/reports/reports2',
            icon: <IoIcons.IoIosPaper />,
            cName: 'sub-nav'
          },
          {
            title: 'Reports 3',
            path: '/reports/reports3',
            icon: <IoIcons.IoIosPaper />
          }
        ]
      },
    {
        title: 'Telegram',
        path: '/telegram',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Messages',
                path: '/telegram/messages',
                icon: <IoIcons.IoIosBeer />,
            },
            {
                title: 'Ur mom',
                path: '/telegram/mom',
                icon: <IoIcons.IoIosBody />,
            },
        ]
    },
    {
        title: 'Dominiks Sex-Dungeon',
        path: '/dome/dungeon',
        icon: <FaIcons.FaCartPlus />
    }
]