import { Layout, Menu, Button, Space, Drawer } from 'antd'
import { PhoneOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'

const { Header: AntHeader } = Layout

const menuItems = [
  { key: 'home', label: '首页' },
  { key: 'products', label: '产品中心' },
  { key: 'about', label: '品牌故事' },
  { key: 'partners', label: '合作伙伴' },
  { key: 'contact', label: '联系我们' },
]

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <AntHeader
        style={{
          position: 'fixed',
          top: 0,
          zIndex: 1000,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          padding: isMobile ? '0 16px' : '0 50px',
          height: isMobile ? 56 : 64,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/55f994e7a6c9446af9437812f4149ca5-pEbFKIvYhUqhtly4j3kGIjpVoR32eU.jpg"
            alt="福熙虾仁水饺 Logo"
            style={{ height: isMobile ? 40 : 50, objectFit: 'contain' }}
          />
          <span style={{ fontSize: isMobile ? 14 : 20, fontWeight: 'bold', color: '#c41e3a' }}>
            {isMobile ? '福熙水饺' : '福熙虾仁水饺'}
          </span>
        </div>

        {isMobile ? (
          <Button
            type="text"
            icon={<MenuOutlined style={{ fontSize: 20, color: '#c41e3a' }} />}
            onClick={() => setDrawerOpen(true)}
          />
        ) : (
          <>
            <Menu
              mode="horizontal"
              defaultSelectedKeys={['home']}
              items={menuItems}
              style={{
                flex: 1,
                justifyContent: 'center',
                border: 'none',
                background: 'transparent',
              }}
            />
            <Space size="small">
              <PhoneOutlined style={{ color: '#c41e3a', fontSize: 18 }} />
              <span style={{ color: '#333', fontWeight: 500, fontSize: 14 }}>400-XXX-XXXX</span>
            </Space>
          </>
        )}
      </AntHeader>

      <Drawer
        title="菜单"
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
      >
        <Menu
          mode="vertical"
          defaultSelectedKeys={['home']}
          items={menuItems}
          style={{ border: 'none' }}
          onClick={() => setDrawerOpen(false)}
        />
        <div style={{ marginTop: 20, paddingTop: 20, borderTop: '1px solid #f0f0f0' }}>
          <PhoneOutlined style={{ color: '#c41e3a', fontSize: 18, marginRight: 8 }} />
          <span style={{ color: '#333', fontWeight: 500 }}>400-XXX-XXXX</span>
        </div>
      </Drawer>
    </>
  )
}

export default Header
