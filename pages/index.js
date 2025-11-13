import Head from 'next/head'

export default function Home() {
  const downloadLinks = [
    {
      name: "RoCleaner (Windows)",
      url: "https://drive.google.com/uc?export=download&id=1Uef_ua2UZogn9zlNfn_zJCiOajrVzB-y",
      icon: "windows"
    },
    {
      name: "RoCleaner (MacOS)",
      url: "https://drive.google.com/uc?export=download&id=1Uef_ua2UZogn9zlNfn_zJCiOajrVzB-y", 
      icon: "mac"
    },
    {
      name: "RoCleaner (Linux)",
      url: "https://drive.google.com/uc?export=download&id=1Uef_ua2UZogn9zlNfn_zJCiOajrVzB-y",
      icon: "linux"
    }
  ]

  const Icon = ({ name, size = 24 }) => {
    const icons = {
      windows: (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
        </svg>
      ),
      mac: (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
      ),
      linux: (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-1.5 17.5c-2-1.5-3.5-4-3.5-6.5h2c0 1.5 1 3 2.5 3.5v3m7-3.5c0 2.5-1.5 5-3.5 6.5v-3c1.5-.5 2.5-2 2.5-3.5h1m-2-4c0-1.5-1-3-2.5-3.5v3c-1.5.5-2.5 2-2.5 3.5h-2c0-2.5 1.5-5 3.5-6.5v-3c-3 .5-5.5 3-5.5 6.5h2c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5h2c0-3.5-2.5-6-5.5-6.5v3c2 1 3.5 2.5 3.5 4.5h-2z"/>
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
      warning: (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
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
        <header className="header">
          <h1>RoCleaner</h1>
          <p className="subtitle">Умное управление друзьями в Roblox</p>
        </header>

        <main className="main">
          <section className="hero">
            <div className="hero-content">
              <h2>Скачайте RoCleaner бесплатно</h2>
              <p>Простой и безопасный способ управления вашим списком друзей в Roblox</p>
              
              <div className="features">
                <div className="feature">
                  <span className="feature-icon">
                    <Icon name="security" size={32} />
                  </span>
                  <h3>Безопасно</h3>
                  <p>Не требует пароля от аккаунта</p>
                </div>
                <div className="feature">
                  <span className="feature-icon">
                    <Icon name="speed" size={32} />
                  </span>
                  <h3>Быстро</h3>
                  <p>Массовое управление друзьями</p>
                </div>
                <div className="feature">
                  <span className="feature-icon">
                    <Icon name="target" size={32} />
                  </span>
                  <h3>Точно</h3>
                  <p>Гибкая система исключений</p>
                </div>
              </div>
            </div>
          </section>

          <section className="download-section">
            <h2>Скачать RoCleaner</h2>
            <div className="download-links">
              {downloadLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  className="download-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon">
                    <Icon name={link.icon} size={24} />
                  </span>
                  <span className="text">{link.name}</span>
                </a>
              ))}
            </div>
            <p className="note">
              <span className="warning-icon">
                <Icon name="warning" size={16} />
              </span>
              Файлы находятся на Google Drive. После перехода нажмите "Скачать" в правом верхнем углу.
            </p>
          </section>

          <section className="instructions">
            <h2>Как использовать</h2>
            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Скачайте приложение</h3>
                <p>Выберите версию для вашей операционной системы</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Запустите программу</h3>
                <p>Откройте RoCleaner и следуйте инструкциям в приложении</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Настройте исключения</h3>
                <p>Добавьте друзей которых хотите сохранить в список исключений</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>Запустите очистку</h3>
                <p>Нажмите кнопку очистки и дождитесь завершения процесса</p>
              </div>
            </div>
          </section>

          <section className="faq">
            <h2>Частые вопросы</h2>
            <div className="faq-item">
              <h3>Безопасно ли это?</h3>
              <p>Да! Приложение использует только cookie для авторизации и не требует пароль от вашего аккаунта. Исходный код открыт для проверки.</p>
            </div>
            <div className="faq-item">
              <h3>На каких системах работает?</h3>
              <p>RoCleaner работает на Windows, MacOS и Linux. Выберите подходящую версию для скачивания.</p>
            </div>
            <div className="faq-item">
              <h3>Это бесплатно?</h3>
              <p>Да, приложение полностью бесплатное и без скрытых платежей.</p>
            </div>
          </section>
        </main>

        <footer className="footer">
          <p>© 2025 RoCleaner. Не аффилирован с Roblox Corporation.</p>
        </footer>
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .header {
          text-align: center;
          padding: 2rem 1rem;
        }

        .header h1 {
          font-size: 3rem;
          margin: 0;
          font-weight: bold;
        }

        .subtitle {
          font-size: 1.2rem;
          opacity: 0.9;
          margin: 0.5rem 0 0 0;
        }

        .main {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .hero {
          text-align: center;
          padding: 3rem 0;
        }

        .hero h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .hero p {
          font-size: 1.2rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto 2rem;
        }

        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .feature {
          background: rgba(255, 255, 255, 0.1);
          padding: 2rem;
          border-radius: 15px;
          backdrop-filter: blur(10px);
        }

        .feature-icon {
          display: block;
          margin-bottom: 1rem;
        }

        .feature h3 {
          margin: 0 0 1rem 0;
          font-size: 1.3rem;
        }

        .feature p {
          margin: 0;
          opacity: 0.8;
        }

        .download-section {
          text-align: center;
          padding: 4rem 0;
          background: rgba(255, 255, 255, 0.05);
          margin: 2rem 0;
          border-radius: 20px;
        }

        .download-section h2 {
          font-size: 2rem;
          margin-bottom: 2rem;
        }

        .download-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-width: 400px;
          margin: 0 auto;
        }

        .download-button {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 2rem;
          background: rgba(255, 255, 255, 0.2);
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 10px;
          color: white;
          text-decoration: none;
          font-weight: bold;
          transition: all 0.3s ease;
        }

        .download-button:hover {
          background: rgba(255, 255, 255, 0.3);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-2px);
        }

        .note {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 2rem;
          opacity: 0.8;
          font-size: 0.9rem;
        }

        .warning-icon {
          display: flex;
          align-items: center;
        }

        .instructions {
          padding: 4rem 0;
        }

        .instructions h2 {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 3rem;
        }

        .steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .step {
          text-align: center;
          padding: 2rem;
        }

        .step-number {
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: bold;
          margin: 0 auto 1rem;
        }

        .step h3 {
          margin: 0 0 1rem 0;
          font-size: 1.3rem;
        }

        .step p {
          margin: 0;
          opacity: 0.8;
          line-height: 1.5;
        }

        .faq {
          padding: 4rem 0;
        }

        .faq h2 {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 3rem;
        }

        .faq-item {
          background: rgba(255, 255, 255, 0.05);
          padding: 2rem;
          border-radius: 15px;
          margin-bottom: 1.5rem;
        }

        .faq-item h3 {
          margin: 0 0 1rem 0;
          font-size: 1.2rem;
        }

        .faq-item p {
          margin: 0;
          opacity: 0.8;
          line-height: 1.6;
        }

        .footer {
          text-align: center;
          padding: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          margin-top: 4rem;
        }

        @media (max-width: 768px) {
          .header h1 {
            font-size: 2rem;
          }
          
          .hero h2 {
            font-size: 1.8rem;
          }
          
          .features {
            grid-template-columns: 1fr;
          }
          
          .steps {
            grid-template-columns: 1fr;
          }
          
          .download-links {
            max-width: 100%;
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
        }
      `}</style>
    </>
  )
}