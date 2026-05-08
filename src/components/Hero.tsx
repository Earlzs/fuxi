import { Typography, Button, Space } from 'antd'
import { ArrowDownOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'

const { Title, Paragraph } = Typography

function Hero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #c41e3a 0%, #8b0000 100%)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingTop: 64,
      }}
    >
      {/* Background Image Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13412cc812ba63f43f5581c9d070faf5-5VNpAQ8isLIK9UrAJ3nCUBKlltWb1w.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
        }}
      />
      
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: isMobile ? '20px 16px' : '0 20px', maxWidth: 900 }}>
        <Title
          style={{
            color: '#fff',
            fontSize: isMobile ? 36 : 64,
            fontWeight: 800,
            marginBottom: isMobile ? 12 : 16,
            textShadow: '2px 4px 8px rgba(0,0,0,0.3)',
            lineHeight: 1.2,
          }}
        >
          福熙虾仁水饺
        </Title>
        
        <Title
          level={2}
          style={{
            color: '#ffd700',
            fontSize: isMobile ? 20 : 32,
            fontWeight: 600,
            marginBottom: isMobile ? 16 : 24,
            letterSpacing: isMobile ? 2 : 4,
          }}
        >
          虾仁超大 · 味道超好
        </Title>
        
        <Paragraph
          style={{
            color: 'rgba(255,255,255,0.9)',
            fontSize: isMobile ? 14 : 20,
            lineHeight: 1.8,
            maxWidth: 700,
            margin: `0 auto ${isMobile ? 24 : 40}px`,
          }}
        >
          深耕水饺赛道的专业餐饮品牌，坚持「新鲜现制」的核心原则，
          每日现调馅料、现包现煮，拒绝隔夜食材，让每一位食客都能吃到地道、实在的好味道。
        </Paragraph>
        
        <Space size={isMobile ? 'middle' : 'large'} direction={isMobile ? 'vertical' : 'horizontal'} style={{ width: isMobile ? '100%' : 'auto' }}>
          <Button
            type="primary"
            size={isMobile ? 'middle' : 'large'}
            style={{
              background: '#ffd700',
              borderColor: '#ffd700',
              color: '#8b0000',
              fontWeight: 'bold',
              height: isMobile ? 44 : 50,
              padding: isMobile ? '0 24px' : '0 40px',
              fontSize: isMobile ? 14 : 18,
              width: isMobile ? '100%' : 'auto',
            }}
          >
            了解加盟
          </Button>
          <Button
            size={isMobile ? 'middle' : 'large'}
            ghost
            style={{
              borderColor: '#fff',
              color: '#fff',
              height: isMobile ? 44 : 50,
              padding: isMobile ? '0 24px' : '0 40px',
              fontSize: isMobile ? 14 : 18,
              width: isMobile ? '100%' : 'auto',
            }}
          >
            品牌故事
          </Button>
        </Space>
        
        <div style={{ marginTop: isMobile ? 40 : 80 }}>
          <ArrowDownOutlined
            className="floating"
            style={{ fontSize: isMobile ? 24 : 32, color: '#fff', opacity: 0.7 }}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
