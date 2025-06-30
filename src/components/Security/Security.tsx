import React from 'react';
import './Security.css';
// @ts-ignore
import securityIcon from '../../img/icons/key.png';
// @ts-ignore
import laptopIcon from '../../img/icons/laptop.png';

interface SecurityProps {
  language: 'ru' | 'en';
}

const Security: React.FC<SecurityProps> = ({ language }) => {
  const content = {
    ru: {
      title: 'Безопасность и надежность сервиса',
      subtitle: 'При выборе онлайн-сервиса для создания DeepNude изображений отдавайте предпочтение тем, которые предлагают надежные меры безопасности и защиты.',
      description: 'Наш сервис использует передовые технологии искусственного интеллекта для обеспечения исключительного редактирования изображений без хранения ваших изображений или личных данных.',
      additionalText: 'Это означает, что вы можете редактировать со спокойной душой, зная, что ваша конфиденциальность защищена. Ваши изображения обрабатываются в режиме реального времени, а затем сразу же удаляются, не оставляя никаких следов вашей работы. Такой подход обеспечивает максимальную безопасность и исключает риск утечки данных или несанкционированного доступа.',
      features: [
        'Локальная обработка изображений',
        'Отсутствие хранения данных',
        'Шифрование всех передач',
        'Анонимность пользователей'
      ]
    },
    en: {
      title: 'Security and Service Reliability',
      subtitle: 'When choosing an online service for creating DeepNude images, give preference to those that offer reliable security and protection measures.',
      description: 'Our service uses advanced artificial intelligence technologies to provide exceptional image editing without storing your images or personal data.',
      additionalText: 'This means you can edit with peace of mind, knowing that your privacy is protected. Your images are processed in real time and then immediately deleted, leaving no traces of your work. This approach ensures maximum security and eliminates the risk of data leaks or unauthorized access.',
      features: [
        'Local image processing',
        'No data storage',
        'Encryption of all transfers',
        'User anonymity'
      ]
    }
  };

  const t = content[language];

  return (
    <section className="security-reliability-section section">
      <div className="container">
        <div className="security-reliability-content">
          <div className="security-reliability-text-content">
            <h2 className="security-reliability-title neon-text">{t.title}</h2>
            <p className="security-reliability-subtitle">{t.subtitle}</p>
            <p className="security-reliability-description">{t.description}</p>
            <p className="security-reliability-additional">{t.additionalText}</p>
            
            <div className="security-reliability-features">
              {t.features.map((feature, index) => (
                <div key={index} className="security-reliability-feature">
                  <img src={securityIcon} alt="Security" className="security-reliability-feature-icon" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="security-reliability-visual">
            <div className="security-reliability-illustration">
              <img src={laptopIcon} alt="Secure laptop" className="security-reliability-laptop-icon" />
              <div className="security-reliability-particles">
                <div className="security-reliability-particle"></div>
                <div className="security-reliability-particle"></div>
                <div className="security-reliability-particle"></div>
                <div className="security-reliability-particle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;