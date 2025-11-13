import Head from 'next/head'

export default function Home() {
  const downloadLinks = [
    {
      name: "RoCleaner для Windows",
      url: "https://drive.google.com/drive/folders/1Uef_ua2UZogn9zlNfn_zJCiOajrVzB-y?usp=sharing",
      icon: "windows"
    }
  ]

  const Icon = ({ name, size = 24 }) => {
    const icons = {
      windows: (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
        </svg>
      ),
      security: (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
        </svg>
      ),
      speed: (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.38 8.57l-1.23 1.85a8 8 0 01-.22 7.58H5.07A8 8 0 0115.58 6.85l1.85-1.23A10 10 0 003.35 19a2 2 0 001.72 1h13.85a2 2 0 001.74-1 10 10 0 00-.27-10.44zm-9.79 6.84a2 2 0 002.83 0l5.66-8.49-8.49 5.66a2 2 0 000 2.83z"/>
        </svg>
      ),
      target: (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2zm0 18a8 8 0 01-8-8 8 8 0 018-8 8 8 0 018 8 8 8 0 01-8 8zm4-8a4 4 0 01-4 4 4 4 0 01-4-4 4 4 0 014-4 4 4 0 014 4zm-2 0a2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2 2 2 0 012 2z"/>
        </svg>
      ),
      download: (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
        </svg>
      )
    }

    return icons[name] || null
  }

  return (
    <>
      <Head>
        <title>RoCleaner - Управление друзьями Roblox</title>
        <meta name="description" content="Бесплатное приложение для управления друзьями в Roblox" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="container">
        <div className="background-animation">
          <div className="gradient-ball ball-1"></div>
          <div className="gradient-ball ball-2"></div>
          <div className="gradient-ball ball-3"></div>
        </div>

        <header className="header">
          <div className="header-content">
            <h1 className="title-glitch">RoCleaner</h1>
            <p className="subtitle">Умное управление друзьями в Roblox</p>
          </div>
        </header>

        <main className="main">
          <section className="hero">
            <div className="hero-content">
              <div className="hero-text">
                <h2 className="hero-title">
                  Скачайте RoCleaner бесплатно
                </h2>
                <p className="hero-description">Простой и безопасный способ управления вашим списком друзей в Roblox</p>
              </div>
              
              <div className="features">
                <div className="feature-card glass-effect">
                  <div className="feature-icon-wrapper">
                    <Icon name="security" size={32} />
                  </div>
                  <h3>Безопасно</h3>
                  <p>Не требует пароля от аккаунта</p>
                </div>
                <div className="feature-card glass-effect">
                  <div className="feature-icon-wrapper">
                    <Icon name="speed" size={32} />
                  </div>
                  <h3>Быстро</h3>
                  <p>Массовое управление друзьями</p>
                </div>
                <div className="feature-card glass-effect">
                  <div className="feature-icon-wrapper">
                    <Icon name="target" size={32} />
                  </div>
                  <h3>Точно</h3>
                  <p>Гибкая система исключений</p>
                </div>
              </div>
            </div>
          </section>

          <section className="download-section">
            <div className="download-card glass-effect">
              <h2 className="download-title">Скачать RoCleaner</h2>
              <div className="download-links">
                {downloadLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url}
                    className="download-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="button-icon">
                      <Icon name={link.icon} size={24} />
                    </span>
                    <span className="button-text">{link.name}</span>
                    <span className="button-arrow">→</span>
                  </a>
                ))}
              </div>
              <p className="download-note">
                Откроется Google Drive. Нажмите "Скачать" в правом верхнем углу.
              </p>
            </div>
          </section>

          <section className="instructions">
            <h2 className="section-title">Как использовать</h2>
            <div className="steps-grid">
              <div className="step-card glass-effect">
                <div className="step-number">01</div>
                <h3>Скачайте приложение</h3>
                <p>Загрузите RoCleaner для Windows</p>
              </div>
              <div className="step-card glass-effect">
                <div className="step-number">02</div>
                <h3>Запустите программу</h3>
                <p>Откройте RoCleaner и следуйте инструкциям</p>
              </div>
              <div className="step-card glass-effect">
                <div className="step-number">03</div>
                <h3>Настройте исключения</h3>
                <p>Добавьте друзей в список исключений</p>
              </div>
              <div className="step-card glass-effect">
                <div className="step-number">04</div>
                <h3>Запустите очистку</h3>
                <p>Начните процесс и дождитесь завершения</p>
              </div>
            </div>
          </section>

          <section className="faq">
            <h2 className="section-title">Частые вопросы</h2>
            <div className="faq-content">
              <div className="faq-grid">
                <div className="faq-card glass-effect">
                  <h3>Безопасно ли это?</h3>
                  <p>Да! Приложение использует только cookie для авторизации и не требует пароль от вашего аккаунта.</p>
                </div>
                <div className="faq-card glass-effect">
                  <h3>На каких системах работает?</h3>
                  <p>RoCleaner работает на Windows. Поддержка других систем в разработке.</p>
                </div>
                <div className="faq-card glass-effect">
                  <h3>Это бесплатно?</h3>
                    <div className="faq-gif">
                      <img 
                      src="https://media1.tenor.com/m/J4KBZSb6CMcAAAAd/%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE.gif" 
                      alt="Бесплатно" 
                      className="free-gif"
                      />
                    </div>
                  <p>Да, приложение полностью бесплатное и без скрытых платежей.</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="footer-content">
            <p>© 2025 RoCleaner. Не аффилирован с Roblox Corporation.</p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #2d1b69 100%);
          color: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .background-animation {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .gradient-ball {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.3;
          animation: float 6s ease-in-out infinite;
        }

        .ball-1 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, #667eea 0%, transparent 70%);
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .ball-2 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, #764ba2 0%, transparent 70%);
          top: 60%;
          right: 10%;
          animation-delay: 2s;
        }

        .ball-3 {
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, #f093fb 0%, transparent 70%);
          bottom: 10%;
          left: 20%;
          animation-delay: 4s;
        }

        .header {
          position: relative;
          z-index: 1;
          padding: 4rem 1rem 2rem;
          text-align: center;
        }

        .header-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .title-glitch {
          font-size: 4rem;
          font-weight: 900;
          margin: 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: glitch 3s infinite;
        }

        .subtitle {
          font-size: 1.4rem;
          opacity: 0.8;
          margin: 1rem 0 0 0;
          font-weight: 300;
        }

        .main {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem 4rem;
        }

        .hero {
          padding: 4rem 0;
          text-align: center;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
          background: linear-gradient(135deg, #ffffff 0%, #a8a8a8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 1.3rem;
          opacity: 0.8;
          max-width: 600px;
          margin: 0 auto 3rem;
          line-height: 1.6;
        }

        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 4rem;
        }

        .feature-card {
          padding: 2.5rem 2rem;
          border-radius: 20px;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-5px);
        }

        .feature-icon-wrapper {
          width: 80px;
          height: 80px;
          margin: 0 auto 1.5rem;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .feature-card h3 {
          font-size: 1.4rem;
          margin: 0 0 1rem 0;
          font-weight: 600;
        }

        .feature-card p {
          margin: 0;
          opacity: 0.7;
          line-height: 1.5;
        }

        .download-section {
          padding: 4rem 0;
        }

        .download-card {
          padding: 3rem;
          border-radius: 25px;
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .download-title {
          font-size: 2.5rem;
          margin: 0 0 2rem 0;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .download-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .download-button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.2rem 2rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          border-radius: 15px;
          color: white;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        }

        .download-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(102, 126, 234, 0.4);
        }

        .button-icon {
          display: flex;
          align-items: center;
        }

        .button-text {
          flex: 1;
          text-align: center;
        }

        .button-arrow {
          font-size: 1.2rem;
        }

        .download-note {
          opacity: 0.7;
          font-size: 0.9rem;
          margin: 0;
        }

        .instructions {
          padding: 4rem 0;
        }

        .section-title {
          font-size: 2.5rem;
          text-align: center;
          margin: 0 0 3rem 0;
          font-weight: 700;
          background: linear-gradient(135deg, #ffffff 0%, #a8a8a8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .step-card {
          padding: 2.5rem 2rem;
          border-radius: 20px;
          text-align: center;
          transition: transform 0.3s ease;
        }

        .step-card:hover {
          transform: translateY(-5px);
        }

        .step-number {
          font-size: 3rem;
          font-weight: 900;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 0 1rem 0;
          opacity: 0.8;
        }

        .step-card h3 {
          font-size: 1.3rem;
          margin: 0 0 1rem 0;
          font-weight: 600;
        }

        .step-card p {
          margin: 0;
          opacity: 0.7;
          line-height: 1.5;
        }

        .faq {
          padding: 4rem 0;
        }

        .faq-content {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 3rem;
          align-items: start;
        }

        .faq-gif {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .free-gif {
          max-width: 100%;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .faq-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .faq-card {
          padding: 2rem;
          border-radius: 15px;
          transition: transform 0.3s ease;
        }

        .faq-card:hover {
          transform: translateX(5px);
        }

        .faq-card h3 {
          font-size: 1.2rem;
          margin: 0 0 1rem 0;
          font-weight: 600;
          color: #667eea;
        }

        .faq-card p {
          margin: 0;
          opacity: 0.8;
          line-height: 1.6;
        }

        .footer {
          position: relative;
          z-index: 1;
          padding: 2rem 1rem;
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          margin-top: 4rem;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer p {
          margin: 0;
          opacity: 0.6;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes glitch {
          0%, 100% {
            transform: translate(0);
          }
          5% {
            transform: translate(-2px, 2px);
          }
          10% {
            transform: translate(-2px, -2px);
          }
          15% {
            transform: translate(2px, 2px);
          }
          20% {
            transform: translate(2px, -2px);
          }
          50% {
            transform: translate(0);
          }
        }

        @media (max-width: 768px) {
          .title-glitch {
            font-size: 2.5rem;
          }
          
          .hero-title {
            font-size: 2rem;
          }
          
          .features {
            grid-template-columns: 1fr;
          }
          
          .steps-grid {
            grid-template-columns: 1fr;
          }
          
          .faq-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .download-card {
            padding: 2rem 1.5rem;
          }
          
          .feature-card, .step-card, .faq-card {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        
        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          line-height: 1.6;
          background: #0f0f0f;
          color: #ffffff;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  )
}
