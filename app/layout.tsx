import './globals.css';
import '@/node_modules/react-modal-video/scss/modal-video.scss';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';


export const metadata = {
  title: 'Pitchle Mobile App',
  description: 'A best experience for mobile app',
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <div className={"bg-gradient-to-r from-[#034023] to-[#021c11] lg:bg-none"}>
        <Navbar />
        {children}
        <Footer />
      </div>
      </body>
    </html>
  )
}
