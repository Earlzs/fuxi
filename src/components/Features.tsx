import { Typography, Row, Col } from 'antd'
import { SafetyCertificateOutlined, FireOutlined, StarOutlined, CheckCircleOutlined, HeartOutlined, TrophyOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'

const { Title, Paragraph } = Typography

const features = [
  {
    icon: <FireOutlined />,
    title: '新鲜现制',
    desc: '每日现调馅料，现包现煮，拒绝隔夜食材',
  },
  {
    icon: <StarOutlined />,
    title: '饱满虾仁',
    desc: '招牌虾仁水饺以饱满大颗的虾仁为特色',
  },
  {
    icon: <SafetyCertificateOutlined />,
    title: '严格品控',
    desc: '标准化出品，严格的品控管理体系',
  },
  {
    icon: <CheckCircleOutlined />,
    title: '高性价比',
    desc: '优质食材，亲民价格，物超所值',
  },
  {
    icon: <HeartOutlined />,
    title: '少油少盐',
    desc: '健康理念，少油少盐，更加健康',
  },
  {
    icon: <TrophyOutlined />,
    title: '口碑标杆',
    desc: '企事业单位团餐场景中的口碑标杆',
  },
]

function Features() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section style={{ padding: isMobile ? '60px 16px' : '100px 50px', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: isMobile ? 40 : 60 }}>
          <Title level={2} style={{ color: '#333', marginBottom: 16, fontSize: isMobile ? 24 : 32 }}>
            <span className="section-title">我们的优势</span>
          </Title>
          <Paragraph style={{ color: '#666', fontSize: isMobile ? 14 : 18 }}>
            深耕水饺赛道，专注品质与服务
          </Paragraph>
        </div>
        
        <Row gutter={[isMobile ? 20 : 40, isMobile ? 20 : 40]}>
          {features.map((feature, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <div style={{ textAlign: 'center', padding: isMobile ? 12 : 20 }}>
                <div className="feature-icon" style={{ width: isMobile ? 60 : 80, height: isMobile ? 60 : 80, fontSize: isMobile ? 24 : 32 }}>
                  {feature.icon}
                </div>
                <Title level={4} style={{ color: '#333', marginBottom: 8, fontSize: isMobile ? 14 : 16 }}>
                  {feature.title}
                </Title>
                <Paragraph style={{ color: '#666', fontSize: isMobile ? 12 : 16 }}>
                  {feature.desc}
                </Paragraph>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  )
}

export default Features
