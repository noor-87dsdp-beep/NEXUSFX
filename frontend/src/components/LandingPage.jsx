import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Rocket,
  Shield,
  Activity,
  BarChart3,
  Layers,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Users,
  TrendingUp,
  Clock,
  Headphones,
  Target,
  Lightbulb,
  Award,
  Globe,
  Check,
  Zap,
} from 'lucide-react';
import Navbar from './Navbar';
import Modal from './Modal';
import TickerTape from './TickerTape';
import TiltCard from './TiltCard';

const LandingPage = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  const scrollToSection = useCallback((e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  }, []);

  const features = [
    {
      icon: <Layers className="w-8 h-8" />,
      title: t('features.bBookDealingDesk.title'),
      description: t('features.bBookDealingDesk.description'),
      gradient: 'from-premium-gold to-premium-amber',
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: t('features.realTimePriceFeeds.title'),
      description: t('features.realTimePriceFeeds.description'),
      gradient: 'from-accent-emerald to-accent-teal',
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: t('features.completeAdminPanel.title'),
      description: t('features.completeAdminPanel.description'),
      gradient: 'from-accent-cyan to-blue-500',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t('features.crmKycIntegration.title'),
      description: t('features.crmKycIntegration.description'),
      gradient: 'from-highlight-magenta to-highlight-pink',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: t('features.cryptoDeposits.title'),
      description: t('features.cryptoDeposits.description'),
      gradient: 'from-highlight-purple to-highlight-magenta',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t('features.whiteLabelReady.title'),
      description: t('features.whiteLabelReady.description'),
      gradient: 'from-accent-emerald to-accent-cyan',
    },
  ];

  const steps = [
    {
      step: 1,
      title: t('howItWorks.step1.title'),
      description: t('howItWorks.step1.description'),
      icon: <Users className="w-6 h-6" />,
    },
    {
      step: 2,
      title: t('howItWorks.step2.title'),
      description: t('howItWorks.step2.description'),
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      step: 3,
      title: t('howItWorks.step3.title'),
      description: t('howItWorks.step3.description'),
      icon: <Rocket className="w-6 h-6" />,
    },
  ];

  const pricing = [
    {
      name: t('pricing.payAsYouGo.name'),
      price: t('pricing.payAsYouGo.price'),
      period: t('pricing.payAsYouGo.period'),
      description: t('pricing.payAsYouGo.description'),
      features: [
        t('pricing.payAsYouGo.features.1'),
        t('pricing.payAsYouGo.features.2'),
        t('pricing.payAsYouGo.features.3'),
        t('pricing.payAsYouGo.features.4'),
        t('pricing.payAsYouGo.features.5'),
      ],
      cta: t('pricing.payAsYouGo.cta'),
      popular: false,
    },
    {
      name: t('pricing.professional.name'),
      price: t('pricing.professional.price'),
      period: t('pricing.professional.period'),
      description: t('pricing.professional.description'),
      features: [
        t('pricing.professional.features.1'),
        t('pricing.professional.features.2'),
        t('pricing.professional.features.3'),
        t('pricing.professional.features.4'),
        t('pricing.professional.features.5'),
        t('pricing.professional.features.6'),
      ],
      cta: t('pricing.professional.cta'),
      popular: true,
    },
    {
      name: t('pricing.lifetime.name'),
      price: t('pricing.lifetime.price'),
      period: t('pricing.lifetime.period'),
      description: t('pricing.lifetime.description'),
      features: [
        t('pricing.lifetime.features.1'),
        t('pricing.lifetime.features.2'),
        t('pricing.lifetime.features.3'),
        t('pricing.lifetime.features.4'),
        t('pricing.lifetime.features.5'),
        t('pricing.lifetime.features.6'),
      ],
      cta: t('pricing.lifetime.cta'),
      popular: false,
    },
  ];

  const faqs = [
    {
      question: t('faq.q1.question'),
      answer: t('faq.q1.answer'),
    },
    {
      question: t('faq.q2.question'),
      answer: t('faq.q2.answer'),
    },
    {
      question: t('faq.q3.question'),
      answer: t('faq.q3.answer'),
    },
    {
      question: t('faq.q4.question'),
      answer: t('faq.q4.answer'),
    },
    {
      question: t('faq.q5.question'),
      answer: t('faq.q5.answer'),
    },
    {
      question: t('faq.q6.question'),
      answer: t('faq.q6.answer'),
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <div className="min-h-screen">
      <Navbar onOpenModal={openModal} />
      <Modal isOpen={isModalOpen} onClose={closeModal} />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center pt-20 pb-8 px-4 overflow-hidden"
      >
        {/* Background elements - Premium deep blue with emerald/cyan/magenta glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-emerald/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-highlight-magenta/10 rounded-full blur-3xl" />
          <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-highlight-purple/15 rounded-full blur-3xl" />
        </div>

        {/* Grid pattern overlay - Updated with emerald tint */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 bg-midnight-900/50 backdrop-blur-sm border border-accent-emerald/20 rounded-full mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-emerald"></span>
              </span>
              <span className="text-sm text-gray-300">
                {t('hero.trustedBy')}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              <span className="text-white">{t('hero.theFutureOf')}</span>
              <br />
              <span className="gradient-text">{t('hero.forexBrokerage')}</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 mb-10"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.button
                onClick={openModal}
                className="px-8 py-4 bg-gradient-to-r from-accent-emerald to-accent-cyan text-white font-semibold rounded-xl shadow-lg shadow-accent-emerald/25 hover:shadow-accent-emerald/40 transition-all flex items-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero.startYourBrokerage')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.a
                href="#features"
                onClick={(e) => scrollToSection(e, '#features')}
                className="px-8 py-4 bg-midnight-900/50 backdrop-blur-sm border border-white/10 text-white font-semibold rounded-xl hover:bg-midnight-800/50 hover:border-accent-cyan/30 transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero.exploreFeatures')}
                <ChevronDown className="w-5 h-5" />
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {[
                { value: '$2.5B+', label: t('hero.dailyVolume') },
                { value: '99.99%', label: t('hero.uptime') },
                { value: '<10ms', label: t('hero.execution') },
                { value: '50+', label: t('hero.countries') },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-accent-cyan" />
        </motion.div>
      </section>

      {/* Ticker Tape */}
      <TickerTape />

      {/* Mission Section */}
      <section id="mission" className="py-24 px-4 bg-midnight-950/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 bg-midnight-900/50 backdrop-blur-sm border border-accent-emerald/20 rounded-full mb-6"
            >
              <Target className="w-4 h-4 text-accent-emerald" />
              <span className="text-sm text-gray-300">{t('mission.badge')}</span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            >
              <span className="text-white">{t('mission.title1')}</span>{' '}
              <span className="gradient-text">{t('mission.title2')}</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-gray-400 text-lg mb-8"
            >
              {t('mission.description')}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Mission Card 1 */}
            <motion.div variants={fadeInUp}>
              <TiltCard intensity={8}>
                <div className="h-full p-6 glass-card rounded-2xl text-center card-hover">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-accent-emerald to-accent-teal flex items-center justify-center text-white mb-4">
                    <Lightbulb className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {t('mission.whatWeProvide.title')}
                  </h3>
                  <p className="text-gray-400">
                    {t('mission.whatWeProvide.description')}
                  </p>
                </div>
              </TiltCard>
            </motion.div>

            {/* Mission Card 2 */}
            <motion.div variants={fadeInUp}>
              <TiltCard intensity={8}>
                <div className="h-full p-6 glass-card rounded-2xl text-center card-hover">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-accent-cyan to-blue-500 flex items-center justify-center text-white mb-4">
                    <Target className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {t('mission.ourCoreMission.title')}
                  </h3>
                  <p className="text-gray-400">
                    {t('mission.ourCoreMission.description')}
                  </p>
                </div>
              </TiltCard>
            </motion.div>

            {/* Mission Card 3 */}
            <motion.div variants={fadeInUp}>
              <TiltCard intensity={8}>
                <div className="h-full p-6 glass-card rounded-2xl text-center card-hover">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-highlight-magenta to-highlight-pink flex items-center justify-center text-white mb-4">
                    <Award className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {t('mission.yourTransformation.title')}
                  </h3>
                  <p className="text-gray-400">
                    {t('mission.yourTransformation.description')}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              <span className="text-white">{t('features.title1')}</span>{' '}
              <span className="gradient-text">{t('features.title2')}</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="max-w-2xl mx-auto text-gray-400 text-lg"
            >
              {t('features.description')}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <TiltCard intensity={10}>
                  <div className="h-full p-6 glass-card rounded-2xl hover:border-accent-emerald/30 transition-colors group card-hover">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 px-4 bg-midnight-950/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              <span className="text-white">{t('howItWorks.title1')}</span>{' '}
              <span className="gradient-text">{t('howItWorks.title2')}</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="max-w-2xl mx-auto text-gray-400 text-lg"
            >
              {t('howItWorks.description')}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative text-center"
              >
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-emerald to-accent-cyan flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg shadow-accent-emerald/30">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-accent-emerald/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-12 text-center"
          >
            <motion.button
              onClick={openModal}
              className="px-8 py-4 bg-gradient-to-r from-accent-emerald to-accent-cyan text-white font-semibold rounded-xl shadow-lg shadow-accent-emerald/25 hover:shadow-accent-emerald/40 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('nav.getDemoAccess')}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              <span className="text-white">{t('pricing.title1')}</span>{' '}
              <span className="gradient-text">{t('pricing.title2')}</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="max-w-2xl mx-auto text-gray-400 text-lg"
            >
              {t('pricing.description')}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {pricing.map((plan, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <TiltCard intensity={8}>
                  <div
                    className={`relative h-full p-8 rounded-2xl border ${
                      plan.popular
                        ? 'bg-gradient-to-br from-accent-emerald/10 to-accent-cyan/10 border-accent-emerald/50'
                        : 'glass-card'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-accent-emerald to-accent-cyan text-white text-sm font-semibold rounded-full">
                        {t('pricing.mostPopular')}
                      </div>
                    )}

                    <div className="text-center mb-8">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4">
                        {plan.description}
                      </p>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-4xl font-bold gradient-text">
                          {plan.price}
                        </span>
                        <span className="text-gray-400">{plan.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-accent-emerald flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <motion.button
                      onClick={openModal}
                      className={`w-full py-3 rounded-xl font-semibold transition-all ${
                        plan.popular
                          ? 'bg-gradient-to-r from-accent-emerald to-accent-cyan text-white shadow-lg shadow-accent-emerald/25'
                          : 'bg-midnight-800/50 text-white hover:bg-midnight-700/50 border border-white/10'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {plan.cta}
                    </motion.button>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-4 bg-midnight-950/50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              <span className="text-white">{t('faq.title1')}</span>{' '}
              <span className="gradient-text">{t('faq.title2')}</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-gray-400 text-lg"
            >
              {t('faq.description')}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="border border-white/10 rounded-xl overflow-hidden glass-card"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left bg-midnight-900/30 hover:bg-midnight-800/30 transition-colors"
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-medium text-white">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-accent-emerald flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                <motion.div
                  id={`faq-answer-${index}`}
                  initial={false}
                  animate={{
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 py-4 text-gray-400 bg-midnight-950/50">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-accent-emerald/10 via-accent-cyan/5 to-highlight-magenta/10 border border-white/10 overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent-emerald/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-highlight-magenta/15 rounded-full blur-3xl" />

            <div className="relative z-10 text-center">
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-4 py-2 bg-midnight-900/50 backdrop-blur-sm border border-accent-emerald/20 rounded-full mb-6"
              >
                <Clock className="w-4 h-4 text-accent-emerald" />
                <span className="text-sm text-gray-300">
                  {t('cta.badge')}
                </span>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              >
                <span className="text-white">{t('cta.title1')}</span>
                <br />
                <span className="gradient-text">{t('cta.title2')}</span>
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="max-w-xl mx-auto text-gray-400 text-lg mb-8"
              >
                {t('cta.description')}
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <motion.button
                  onClick={openModal}
                  className="px-8 py-4 bg-gradient-to-r from-accent-emerald to-accent-cyan text-white font-semibold rounded-xl shadow-lg shadow-accent-emerald/25 hover:shadow-accent-emerald/40 transition-all flex items-center gap-2 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('nav.getDemoAccess')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <div className="flex items-center gap-2 text-gray-400">
                  <Headphones className="w-5 h-5 text-accent-cyan" />
                  <span>{t('cta.supportAvailable')}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10 bg-midnight-950/80">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-accent-cyan" />
              <span className="font-bold text-xl">
                <span className="gradient-text">Nexus FX</span>
                <span className="text-highlight-magenta ml-1 text-sm">Demo</span>
              </span>
            </div>

            <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <a href="#mission" onClick={(e) => scrollToSection(e, '#mission')} className="hover:text-accent-emerald transition-colors">
                {t('footer.mission')}
              </a>
              <a href="#features" onClick={(e) => scrollToSection(e, '#features')} className="hover:text-accent-emerald transition-colors">
                {t('footer.features')}
              </a>
              <a href="#pricing" onClick={(e) => scrollToSection(e, '#pricing')} className="hover:text-accent-emerald transition-colors">
                {t('footer.pricing')}
              </a>
              <a href="#faq" onClick={(e) => scrollToSection(e, '#faq')} className="hover:text-accent-emerald transition-colors">
                {t('footer.faq')}
              </a>
              <span className="hover:text-accent-emerald transition-colors cursor-pointer">
                {t('footer.privacyPolicy')}
              </span>
              <span className="hover:text-accent-emerald transition-colors cursor-pointer">
                {t('footer.termsOfService')}
              </span>
            </nav>

            <p className="text-sm text-gray-500">
              {t('footer.copyright', { year: new Date().getFullYear() })}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
