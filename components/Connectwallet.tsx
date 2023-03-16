import React from 'react'
import { ethers } from 'ethers'
import { useState, useEffect } from 'react';
import styles from '../styles/ConnectBtn.module.css'
import Router from 'next/router'
import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";


const Connectwallet = () => {

    const { address, isConnecting, isDisconnected } = useAccount();
    useEffect(() => {
        if (address) {
            Router.push('/reward')
        }
    }, [address]);

    return (
        <div>
            <ConnectKitButton />
        </div>
    )
}

export default Connectwallet