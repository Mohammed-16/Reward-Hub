import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '../store/store'
import { Provider } from 'react-redux'
// import { useEffect, useMemo } from 'react'
// import {
// 	GlowWalletAdapter,
// 	LedgerWalletAdapter,
// 	PhantomWalletAdapter,
// 	SlopeWalletAdapter,
// 	SolflareWalletAdapter,
// 	SolletExtensionWalletAdapter,
// 	SolletWalletAdapter,
// 	TorusWalletAdapter,
// } from '@solana/wallet-adapter-wallets'
// import {
// 	ConnectionProvider,
// 	useWallet,
// 	WalletProvider,
// } from '@solana/wallet-adapter-react'
// import { clusterApiUrl } from '@solana/web3.js'
// import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
// import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import Router from 'next/router'
import '@rainbow-me/rainbowkit/styles.css';
import {
	getDefaultWallets,
	RainbowKitProvider, darkTheme 
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, filecoinHyperspace } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { ConnectKitProvider,  getDefaultClient } from "connectkit";


function MyApp({ Component, pageProps }: AppProps) {

	const { chains, provider } = configureChains(
		[filecoinHyperspace],
		[
			alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
			publicProvider()
		]
	);

	const { connectors } = 
		getDefaultClient({
			appName: "RewardHub",
			chains,
		  });

	const wagmiClient = createClient({
		autoConnect: true,
		connectors,
		provider
	})

	return (
		<Provider store={store}>
		<WagmiConfig client={wagmiClient}>
			<ConnectKitProvider>
				<Component {...pageProps} />
			</ConnectKitProvider>
		</WagmiConfig>
		</Provider>
	)
}

export default MyApp
