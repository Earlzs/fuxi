import { Layout, Typography, Row, Col, Space, Divider } from 'antd'
import { EnvironmentOutlined, PhoneOutlined, MailOutlined, WechatOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'

const { Footer: AntFooter } = Layout
const { Title, Paragraph, Text } = Typography

function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <AntFooter style={{ background: '#1a1a1a', padding: isMobile ? '40px 16px 20px' : '60px 50px 30px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Row gutter={[isMobile ? 20 : 40, isMobile ? 20 : 40]}>
          <Col xs={24} md={8}>
            <Title level={4} style={{ color: '#fff', marginBottom: 16, fontSize: isMobile ? 16 : 18 }}>
              福熙虾仁水饺
            </Title>
            <Paragraph style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, fontSize: isMobile ? 12 : 14 }}>
              深耕水饺赛道的专业餐饮品牌，在河北邯郸拥有成熟直营门店与稳定的口碑沉淀。
              坚持「新鲜现制」的核心原则，让每一位食客都能吃到地道、实在的好味道。
            </Paragraph>
          </Col>
          
          <Col xs={24} md={8}>
            <Title level={4} style={{ color: '#fff', marginBottom: 16, fontSize: isMobile ? 16 : 18 }}>
              联系我们
            </Title>
            <Space direction="vertical" size={isMobile ? 8 : 12}>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: isMobile ? 12 : 14 }}>
                <PhoneOutlined style={{ marginRight: 8, color: '#c41e3a' }} />
                加盟热线: 400-XXX-XXXX
              </div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: isMobile ? 12 : 14 }}>
                <MailOutlined style={{ marginRight: 8, color: '#c41e3a' }} />
                邮箱: contact@fuxidumplings.com
              </div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: isMobile ? 12 : 14 }}>
                <EnvironmentOutlined style={{ marginRight: 8, color: '#c41e3a' }} />
                地址: 河北省邯郸市
              </div>
            </Space>
          </Col>
          
          <Col xs={24} md={8}>
            <Title level={4} style={{ color: '#fff', marginBottom: 16, fontSize: isMobile ? 16 : 18 }}>
              关注我们
            </Title>
            <Paragraph style={{ color: 'rgba(255,255,255,0.7)', fontSize: isMobile ? 12 : 14 }}>
              <WechatOutlined style={{ marginRight: 8, color: '#c41e3a', fontSize: isMobile ? 18 : 24 }} />
              扫码关注公众号，获取最新优惠
            </Paragraph>
            <div style={{
              width: isMobile ? 100 : 120,
              height: isMobile ? 100 : 120,
              background: '#fff',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#999',
              fontSize: isMobile ? 11 : 12,
            }}>
              公众号二维码
            </div>
          </Col>
        </Row>
        
        <Divider style={{ borderColor: 'rgba(255,255,255,0.1)', margin: isMobile ? '24px 0 16px' : '40px 0 20px' }} />
        
        <div style={{ textAlign: 'center' }}>
          <Text style={{ color: 'rgba(255,255,255,0.5)', fontSize: isMobile ? 11 : 12 }}>
            © 2024 福熙虾仁水饺 版权所有 | 企事业单位团餐场景口碑标杆
          </Text>
        </div>
      </div>
    </AntFooter>
  )
}

export default Footer
