import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
        translation: {
          "solutions": "Develop amazing solutions",
          "level": "A learning platform to reach your next level as a programmer",
          "button": "I want to apply",
          "logic": "Programming logic",
          "html": "Introduction to HTML",
          "css" : "Introduction to CSS",
          "first-comment" : "The platform is amazing, and the course methodology is accessible to both beginners and those who are already advanced in a technology.",
          "second-comment" : "With many practical exercises and the help of the Aprender community, I was able to pass a selection process.",
          "theory" : "Theory",
          "practice" : "Practice",
          "community" : "Community",
          "free" : "Free",
          "pro": "$ 4.00  month",
          "business": "$ 20.00  month",
          "access-courses" : "Access to free courses",
          "access-community" : "Access to the community",
          "feat-starter" : "Features of the Starter plan",
          "premium" : "Access to premium courses",
          "feat-pro" : "Features of the PRO plan",
          "support" : "Technical support",
          "trainings" : "Trainings",
          "developers" : "Join over 100,000 developers",
          "subscribe" : "Subscribe"
        }
      },
      pt: {
        translation: {
          "solutions": "Desenvolva soluções incríveis",
          "level": "Uma plataforma de aprendizado para alcançar seu próximo nível como programador(a)",
          "button": "Quero me candidatar",
          "logic": "Lógica de Programação",
          "html": "Introdução à HTML",
          "css" : "Introdução à CSS",
          "first-comment" : "A plataforma é incrível e a metodologia dos cursos são de alcance para quem está começando ou quem já está avançado em alguma tecnologia.",
          "second-comment" : "Com muitos exercícios práticos e a ajuda da  comunidade do Aprender, consegui passar em um processo seletivo",
          "theory" : "Teoria",
          "practice" : "Prática",
          "community" : "Comunidade",
          "free" : "Grátis",
          "pro": "R$ 20,00 mês",
          "business": "R$ 100,00 mês",
          "access-courses" : "Acesso à cursos gratuitos",
          "access-community" : "Acesso à comunidade",
          "feat-starter" : "Funcionalidades do Starter",
          "premium" : "Acesso à cursos premium",
          "feat-pro" : "Funcionalidades do PRO",
          "support" : "Suporte Técnico",
          "trainings" : "Treinamentos",
          "developers" : "Junte-se à mais de 100 mil desenvolvedores",
          "subscribe" : "Assinar"
        }
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;