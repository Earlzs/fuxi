import { ConfigProvider, Layout } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import Features from './components/Features'
import Videos from './components/Videos'
import Partners from './components/Partners'
import Footer from './components/Footer'

const { Content } = Layout

function App() {
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: '#c41e3a',
          borderRadius: 8,
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        },
      }}
    >
      <Layout style={{ minHeight: '100vh', background: '#fff' }}>
        <Header />
        <Content>
          <Hero />
          <Features />
          <Products />
          <Videos />
          <Partners />
        </Content>
        <Footer />
      </Layout>
    </ConfigProvider>
  )
}

export default App
