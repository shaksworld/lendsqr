import React from 'react';
import Briefcase from '../Assets/briefcase.svg';
import DropArrow from '../Assets/downArrow.svg';
import Home from '../Assets/home.svg';
import User from '../Assets/users.svg';
import Group from '../Assets/groups.svg';
import MoneySack from '../Assets/moneySack.svg';
import Handshake from '../Assets/handshake.svg';
import PiggyBank from '../Assets/piggy-bank.svg';
import Hand from '../Assets/hand-sack.svg';
import WhiteList from '../Assets/white-list.svg';
import Karma from '../Assets/karma.svg';
import '../styles/Sidebar.scss'

const sidebar = () => {
    return <div className='side-bar-main'>
        <div className='side-bar-briefcase'>
            <img src={Briefcase} alt="briefcase" />
            <h4>Switch Organization</h4>
            <img src={DropArrow} alt="drop arrow" />
        </div>
        <div className='side-bar-menu'>
            <div className='side-bar-menu-item'>
                <img src={Home} alt="home" />
                <h4>Dashboard</h4>
            </div>
        </div>
        <div className='side-bar-menu'>
            <div className='side-bar-menu-item'>
                <h4>CUSTOMERS</h4>
                <div className='side-bar-user'>
                    <img src={User} alt="user" />
                    <h4>Users</h4>
                </div>
                <div className='side-bar-group'>
                    <img src={Group} alt="group" />
                    <h4>Guarators</h4>
                </div>
                <div className='side-bar-loan'>
                    <img src={MoneySack} alt="money sack" />
                    <h4>Loans</h4>
                </div>
                <div className='side-bar-transaction'>
                    <img src={Handshake} alt="handshake" />
                    <h4>Decision Model</h4>
                </div>
                <div className='side-bar-savings'>
                    <img src={PiggyBank} alt="piggy bank" />
                    <h4>Savings</h4>
                </div>
                <div className='side-bar-loan-request'>
                    <img src={Hand} alt="hand" />
                    <h4>Loan Requests</h4>
                </div>
                <div className='side-bar-whitelist'>
                    <img src={WhiteList} alt="white list" />
                    <h4>Whitelist</h4>
                </div>
                <div className='side-bar-karma'>
                    <img src={Karma} alt="karma" />
                    <h4>Karma</h4>
                </div>
            </div>
        </div>
    </div>
}
 
export default sidebar;