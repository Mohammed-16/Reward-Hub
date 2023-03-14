import React from 'react'
import { ethers } from 'ethers'
import { useState, useEffect } from 'react';
import styles from '../styles/ConnectBtn.module.css'
import Router from 'next/router'
import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";


const Connectwallet = () => {
    

    // const [walletAddress, setWalletAddress] = useState("");
    const { address, isConnecting, isDisconnected } = useAccount();
    useEffect(() => {
        if (address) {
            Router.push('/reward')
        }
    }, [address]);

    // const connectWallet = async () => {
    //     if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
    //         try {
    //             /* MetaMask is installed */
    //             const accounts = await window.ethereum.request({
    //                 method: "eth_requestAccounts",
    //             });
    //             setWalletAddress(accounts[0]);
    //             console.log(accounts[0]);
               
    //         } catch (err) {
    //             console.error(err.message);
    //         }
    //     } else {
    //         /* MetaMask is not installed */
    //         console.log("Please install MetaMask");
    //     }
    // };

    

    // const getCurrentWalletConnected = async () => {
    //     if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
    //         try {
    //             const accounts = await window.ethereum.request({
    //                 method: "eth_accounts",
    //             });
    //             if (accounts.length > 0) {
    //                 setWalletAddress(accounts[0]);
    //                 console.log(accounts[0]);
    //             } else {
    //                 console.log("Connect to MetaMask using the Connect button");
    //             }
    //         } catch (err) {
    //             console.error(err.message);
    //         }
    //     } else {
    //         /* MetaMask is not installed */
    //         console.log("Please install MetaMask");
    //     }
    // };

    // const addWalletListener = async () => {
    //     if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
    //         window.ethereum.on("accountsChanged", (accounts) => {
    //             setWalletAddress(accounts[0]);
    //             console.log(accounts[0]);
    //         });
    //     } else {
    //         /* MetaMask is not installed */
    //         setWalletAddress("");
    //         console.log("Please install MetaMask");
    //     }
    // };

    return (
        <div>
            {/* <button className={styles.btn} type="button"
                onClick={connectWallet}>
                <span className="is-link has-text-weight-bold">
                    {walletAddress && walletAddress.length > 0
                        ? `${walletAddress.substring(
                            0,
                            6
                        )}...${walletAddress.substring(38)}`
                        : "Connect Wallet"}
                </span>
            </button> */}
            <ConnectKitButton/>
        </div>
    )
}

export default Connectwallet