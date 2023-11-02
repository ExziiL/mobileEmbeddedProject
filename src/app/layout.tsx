import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const APP_NAME = 'Robo Waiter';
const APP_DEFAULT_TITLE = 'Robo Waiter';
const APP_TITLE_TEMPLATE = '%s | PWA App';
const APP_DESCRIPTION = 'Robo Waiter Description!';

export const metadata: Metadata = {
	applicationName: APP_NAME,
	title: {
		default: APP_DEFAULT_TITLE,
		template: APP_TITLE_TEMPLATE,
	},
	description: APP_DESCRIPTION,
	manifest: '/manifest.json',
	themeColor: '#ffffff',
	appleWebApp: {
		capable: true,
		statusBarStyle: 'default',
		title: APP_DEFAULT_TITLE,
		// startUpImage: [],
	},
	viewport: 'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',
	icons: {
		icon: '/icons/icon-512x512.png',
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				{/* <Navbar /> */}
				<main>{children}</main>
				{/* <Footer /> */}
			</body>
		</html>
	);
}
