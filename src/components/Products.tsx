import { Typography, Row, Col, Card } from 'antd'
import { useState, useEffect } from 'react'

const { Title, Paragraph } = Typography

const products = [
  {
    name: '虾仁韭菜鸡蛋水饺',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/55f994e7a6c9446af9437812f4149ca5-pEbFKIvYhUqhtly4j3kGIjpVoR32eU.jpg',
    desc: '鲜嫩虾仁搭配韭菜鸡蛋，口感鲜美，营养丰富',
  },
  {
    name: '鲜肉芹菜水饺',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bb2c38515054a9fa505cda526a772beb-ZNrfLOEc6ZgitZZP7CG0KXfVO89RU4.jpg',
    desc: '精选鲜肉搭配脆嫩芹菜，清香可口，老少皆宜',
  },
  {
    name: '西葫芦鸡蛋水饺',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e723b1608d7da901483bde51f5c1bec7-DgshvYwQF0jvaxO8Kb9eLVcwakY3aj.jpg',
    desc: '新鲜西葫芦与鸡蛋完美结合，清爽不腻',
  },
  {
    name: '手工现包拼盘',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3e12b9b1c1b582142784e5867f85c49e-oMRnhQKgQjMnapOoflhJ7gUDKsNhcb.jpg',
    desc: '多种口味一次满足，手工现包，新鲜美味',
  },
]

function Products() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section style={{ padding: isMobile ? '60px 16px' : '100px 50px', background: '#fef9f3' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: isMobile ? 40 : 60 }}>
          <Title level={2} style={{ color: '#333', marginBottom: 16, fontSize: isMobile ? 24 : 32 }}>
            <span className="section-title">招牌产品</span>
          </Title>
          <Paragraph style={{ color: '#666', fontSize: isMobile ? 14 : 18 }}>
            精选食材，匠心制作，每一口都是好味道
          </Paragraph>
        </div>
        
        <Row gutter={[isMobile ? 16 : 30, isMobile ? 16 : 30]}>
          {products.map((product, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <Card
                className="product-card"
                hoverable
                cover={
                  <div style={{ 
                    height: isMobile ? 180 : 260, 
                    overflow: 'hidden',
                    background: '#f5f5f5',
                  }}>
                    <img
                      alt={product.name}
                      src={product.image}
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease',
                      }}
                    />
                  </div>
                }
                style={{
                  borderRadius: 16,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                }}
                styles={{ body: { padding: isMobile ? 16 : 24 } }}
              >
                <Title level={4} style={{ color: '#333', marginBottom: 8, fontSize: isMobile ? 14 : 16 }}>
                  {product.name}
                </Title>
                <Paragraph style={{ color: '#666', marginBottom: 0, fontSize: isMobile ? 12 : 14 }}>
                  {product.desc}
                </Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  )
}

export default Products
