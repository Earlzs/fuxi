import { Typography, Row, Col } from 'antd'
import { PlayCircleOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'

const { Title, Paragraph } = Typography

function Videos() {
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
            <span className="section-title">现场直击</span>
          </Title>
          <Paragraph style={{ color: '#666', fontSize: isMobile ? 14 : 18 }}>
            馅料现调 · 颗颗现包 · 新鲜看得见
          </Paragraph>
        </div>
        
        <Row gutter={[isMobile ? 16 : 30, isMobile ? 16 : 30]}>
          <Col xs={24} md={12}>
            <div className="video-container">
              <video
                controls
                poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a079253424ffe1e11b4b6872a15d03b9-gMr1xU72fU8CzWMZGdG6iLChA3erco.jpg"
                style={{ 
                  width: '100%', 
                  height: isMobile ? 220 : 350,
                  objectFit: 'cover',
                  background: '#000',
                }}
              >
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4%E6%9C%8830%E6%97%A5%283%29-7BI34vhDx1WsB8VAC12IeT3FTjtlRs.mp4" type="video/mp4" />
                您的浏览器不支持视频播放
              </video>
              <div style={{
                padding: isMobile ? 12 : 20,
                background: 'linear-gradient(135deg, #c41e3a 0%, #8b0000 100%)',
              }}>
                <Title level={4} style={{ color: '#fff', marginBottom: 4, fontSize: isMobile ? 14 : 16 }}>
                  现场制作过程
                </Title>
                <Paragraph style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 0, fontSize: isMobile ? 12 : 14 }}>
                  每一颗水饺都经过精心制作
                </Paragraph>
              </div>
            </div>
          </Col>
          
          <Col xs={24} md={12}>
            <div className="video-container">
              <video
                controls
                poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/32d7cec1f1d0bf982935909ba4b80c3e-EWhmIUapFuQWwLtxj4ctIJIo80pXET.jpg"
                style={{ 
                  width: '100%', 
                  height: isMobile ? 220 : 350,
                  objectFit: 'cover',
                  background: '#000',
                }}
              >
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4%E6%9C%8830%E6%97%A5%282%29-63gFWxSAvjsy4q6LFuMpauDfmQ4cG0.mp4" type="video/mp4" />
                您的浏览器不支持视频播放
              </video>
              <div style={{
                padding: isMobile ? 12 : 20,
                background: 'linear-gradient(135deg, #c41e3a 0%, #8b0000 100%)',
              }}>
                <Title level={4} style={{ color: '#fff', marginBottom: 4, fontSize: isMobile ? 14 : 16 }}>
                  鲜美食材展示
                </Title>
                <Paragraph style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 0, fontSize: isMobile ? 12 : 14 }}>
                  新鲜虾仁，饱满多汁
                </Paragraph>
              </div>
            </div>
          </Col>
        </Row>
        
        {/* Additional Images */}
        <Row gutter={[isMobile ? 16 : 30, isMobile ? 16 : 30]} style={{ marginTop: isMobile ? 20 : 30 }}>
          <Col xs={24} md={8}>
            <div style={{ 
              borderRadius: 16, 
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            }}>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a079253424ffe1e11b4b6872a15d03b9-gMr1xU72fU8CzWMZGdG6iLChA3erco.jpg"
                alt="现场制作"
                style={{ width: '100%', height: isMobile ? 180 : 250, objectFit: 'cover' }}
              />
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div style={{ 
              borderRadius: 16, 
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            }}>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3faa1784d3862cb66cb790ddcd0138eb-nHQ26TzQWwUB4Ct0lQcoypUplJh97T.jpg"
                alt="门店展示"
                style={{ width: '100%', height: isMobile ? 180 : 250, objectFit: 'cover' }}
              />
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div style={{ 
              borderRadius: 16, 
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            }}>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/32d7cec1f1d0bf982935909ba4b80c3e-EWhmIUapFuQWwLtxj4ctIJIo80pXET.jpg"
                alt="美味水饺"
                style={{ width: '100%', height: isMobile ? 180 : 250, objectFit: 'cover' }}
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default Videos
