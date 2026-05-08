import { Typography, Row, Col } from 'antd'
import { BankOutlined, RocketOutlined, TeamOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'

const { Title, Paragraph } = Typography

const partners = [
  { name: '京东总部', icon: <RocketOutlined style={{ fontSize: 40 }} /> },
  { name: '北汽研究院', icon: <BankOutlined style={{ fontSize: 40 }} /> },
  { name: '58同城总部', icon: <TeamOutlined style={{ fontSize: 40 }} /> },
]

function Partners() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section style={{ padding: isMobile ? '60px 16px' : '100px 50px', background: '#f8f9fa' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: isMobile ? 40 : 60 }}>
          <Title level={2} style={{ color: '#333', marginBottom: 16, fontSize: isMobile ? 24 : 32 }}>
            <span className="section-title">合作伙伴</span>
          </Title>
          <Paragraph style={{ color: '#666', fontSize: isMobile ? 14 : 18 }}>
            成功入驻多家知名企业食堂，深受互联网与国企员工的喜爱
          </Paragraph>
        </div>
        
        <Row gutter={[isMobile ? 16 : 40, isMobile ? 16 : 40]} justify="center">
          {partners.map((partner, index) => (
            <Col xs={24} sm={8} key={index}>
              <div
                style={{
                  textAlign: 'center',
                  padding: isMobile ? '24px 16px' : '40px 20px',
                  background: '#fff',
                  borderRadius: 16,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                className="partner-logo"
              >
                <div style={{ color: '#c41e3a', marginBottom: 16, fontSize: isMobile ? 32 : 40 }}>
                  {partner.icon}
                </div>
                <Title level={4} style={{ color: '#333', marginBottom: 0, fontSize: isMobile ? 14 : 16 }}>
                  {partner.name}
                </Title>
              </div>
            </Col>
          ))}
        </Row>
        
        {/* Store Image */}
        <div style={{ marginTop: isMobile ? 40 : 80, textAlign: 'center' }}>
          <div style={{ 
            borderRadius: 20, 
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
            display: 'inline-block',
            width: isMobile ? '100%' : 'auto',
          }}>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13412cc812ba63f43f5581c9d070faf5-5VNpAQ8isLIK9UrAJ3nCUBKlltWb1w.jpg"
              alt="福熙虾仁水饺门店"
              style={{ 
                width: '100%', 
                maxWidth: 900,
                height: 'auto',
                display: 'block',
              }}
            />
          </div>
          <Paragraph style={{ marginTop: 24, color: '#666', fontSize: isMobile ? 12 : 16 }}>
            福熙虾仁水饺 · 河北邯郸成熟直营门店
          </Paragraph>
        </div>
      </div>
    </section>
  )
}

export default Partners
