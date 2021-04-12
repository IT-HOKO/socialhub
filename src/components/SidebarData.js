import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Benutzer',
                path: '/home/users',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'API-Token',
                path: '/home/apitoken',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title: 'Telegram',
        path: '/telegram/main',
        icon: <FaIcons.FaTelegram />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    
        subNav: [
          {
            title: 'Gesendet',
            path: '/telegram/send',
            icon: <IoIcons.IoIosPaper />,
            cName: 'sub-nav'
          },
          {
            title: 'Empfangen',
            path: '/telegram/received',
            icon: <IoIcons.IoIosPaper />,
            cName: 'sub-nav'
          },
          {
            title: 'Löschen',
            path: '/telegram/deleted',
            icon: <IoIcons.IoIosPaper />
          }
        ]
      },
    {
        title: 'Whatsapp',
        path: '/whatsapp',
        icon: <FaIcons.FaWhatsapp />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Gesendet',
                path: '/whatsapp/send',
                icon: <IoIcons.IoIosBeer />,
            },
            {
                title: 'Empfangen',
                path: '/whatsapp/received',
                icon: <IoIcons.IoIosBody />,
            },
        ]
    },
    {
        title: 'TikTok',
        path: '/tiktok',
        icon: <FaIcons.Fa500Px />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Gesendet',
                path: '/tiktok/send',
                icon: <IoIcons.IoIosBeer />,
            },
            {
                title: 'Empfangen',
                path: '/tiktok/received',
                icon: <IoIcons.IoIosBody />,
            },
        ]
    },
    {
        title: 'Instagram',
        path: '/insta/',
        icon: <FaIcons.FaCartPlus />
    }
]