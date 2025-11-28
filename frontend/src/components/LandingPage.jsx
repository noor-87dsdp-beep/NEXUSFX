import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  Rocket,
  Shield,
  Activity,
  BarChart3,
  Lock,
  Zap,
  Check,
  Globe,
  Layers,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Users,
  TrendingUp,
  Clock,
  Headphones,
} from 'lucide-react';
import Navbar from './Navbar';
import Modal from './Modal';
import TickerTape from './TickerTape';
import TiltCard from './TiltCard';

const LandingPage = () => {
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
      icon: <Zap className="w-8 h-8" />,
      title: 'Lightning Fast Execution',
      description: 'Sub-millisecond trade execution with enterprise-grade infrastructure.',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Bank-Grade Security',
      description: 'Multi-layer encryption and secure cold storage for all assets.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Real-Time Analytics',
      description: 'Advanced charting and market analysis tools powered by AI.',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Smart Trading Bots',
      description: 'Automated strategies with customizable risk parameters.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Market Access',
      description: 'Trade Forex, Crypto, Commodities & Indices 24/7.',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Regulatory Compliance',
      description: 'Fully licensed and compliant with international regulations.',
      gradient: 'from-rose-500 to-red-500',
    },
  ];

  const steps = [
    {
      step: 1,
      title: 'Create Account',
      description: 'Sign up in minutes with our streamlined KYC process.',
      icon: <Users className="w-6 h-6" />,
    },
    {
      step: 2,
      title: 'Fund Your Wallet',
      description: 'Deposit via crypto, bank transfer, or card.',
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      step: 3,
      title: 'Start Trading',
      description: 'Access global markets and start building wealth.',
      icon: <Rocket className="w-6 h-6" />,
    },
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for individual traders',
      features: [
        'Up to 10 trading pairs',
        'Basic analytics dashboard',
        'Email support',
        'Mobile app access',
        '1% trading fee',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'For serious traders & small brokerages',
      features: [
        'Unlimited trading pairs',
        'Advanced analytics & AI insights',
        'Priority 24/7 support',
        'API access',
        '0.5% trading fee',
        'Custom integrations',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Full white-label brokerage solution',
      features: [
        'Everything in Professional',
        'White-label platform',
        'Dedicated account manager',
        'Custom liquidity pools',
        'Volume-based pricing',
        'SLA guarantee',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const faqs = [
    {
      question: 'How quickly can I get started?',
      answer:
        'You can create an account and start trading within 24 hours. Our streamlined KYC process ensures fast verification while maintaining regulatory compliance.',
    },
    {
      question: 'What markets can I access?',
      answer:
        'NEXUS FX provides access to major Forex pairs, cryptocurrencies, commodities (Gold, Silver, Oil), and global stock indices. Trade 24/7 with deep liquidity.',
    },
    {
      question: 'Is my money safe?',
      answer:
        'Absolutely. We use bank-grade encryption, cold storage for digital assets, and maintain segregated client accounts. We\'re fully licensed and regulated.',
    },
    {
      question: 'Do you offer white-label solutions?',
      answer:
        'Yes! Our Enterprise plan includes a fully customizable white-label platform. Launch your own brokerage with our technology stack and liquidity.',
    },
    {
      question: 'What support options are available?',
      answer:
        'We offer 24/7 support via live chat, email, and phone for Professional and Enterprise clients. Starter plans include email support during business hours.',
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
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)`,
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm text-gray-300">
                Trusted by 10,000+ traders worldwide
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              <span className="text-white">The Future of</span>
              <br />
              <span className="gradient-text">Forex Brokerage</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 mb-10"
            >
              Launch your fully licensed brokerage or trade with institutional-grade
              tools. Lightning-fast execution, bank-grade security, and 24/7 global
              market access.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.button
                onClick={openModal}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all flex items-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Brokerage
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.a
                href="#features"
                onClick={(e) => scrollToSection(e, '#features')}
                className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Features
                <ChevronDown className="w-5 h-5" />
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {[
                { value: '$2.5B+', label: 'Daily Volume' },
                { value: '99.99%', label: 'Uptime' },
                { value: '<10ms', label: 'Execution' },
                { value: '50+', label: 'Countries' },
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
          <ChevronDown className="w-6 h-6 text-gray-500" />
        </motion.div>
      </section>

      {/* Ticker Tape */}
      <TickerTape />

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
              <span className="text-white">Enterprise-Grade</span>{' '}
              <span className="gradient-text">Trading Features</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="max-w-2xl mx-auto text-gray-400 text-lg"
            >
              Everything you need to trade like the institutions or launch your own
              brokerage.
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
                  <div className="h-full p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-green-500/30 transition-colors group">
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
      <section id="how-it-works" className="py-24 px-4 bg-black/30">
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
              <span className="text-white">Get Started in</span>{' '}
              <span className="gradient-text">3 Simple Steps</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="max-w-2xl mx-auto text-gray-400 text-lg"
            >
              Join thousands of traders who have already discovered the NEXUS FX
              advantage.
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
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg shadow-green-500/30">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-green-500/50 to-transparent" />
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
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Demo Access
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
              <span className="text-white">Simple, Transparent</span>{' '}
              <span className="gradient-text">Pricing</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="max-w-2xl mx-auto text-gray-400 text-lg"
            >
              Choose the plan that fits your trading needs. All plans include our
              core platform features.
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
                        ? 'bg-gradient-to-br from-green-500/10 to-cyan-500/10 border-green-500/50'
                        : 'bg-white/5 border-white/10'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-green-500 to-cyan-500 text-white text-sm font-semibold rounded-full">
                        Most Popular
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
                          <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <motion.button
                      onClick={openModal}
                      className={`w-full py-3 rounded-xl font-semibold transition-all ${
                        plan.popular
                          ? 'bg-gradient-to-r from-green-500 to-cyan-500 text-white shadow-lg shadow-green-500/25'
                          : 'bg-white/10 text-white hover:bg-white/20'
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
      <section id="faq" className="py-24 px-4 bg-black/30">
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
              <span className="text-white">Frequently Asked</span>{' '}
              <span className="gradient-text">Questions</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-gray-400 text-lg"
            >
              Got questions? We&apos;ve got answers.
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
                className="border border-white/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left bg-white/5 hover:bg-white/10 transition-colors"
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-medium text-white">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-green-400 flex-shrink-0" />
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
                  <p className="px-6 py-4 text-gray-400 bg-black/20">
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
            className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-green-500/10 via-cyan-500/5 to-purple-500/10 border border-white/10 overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />

            <div className="relative z-10 text-center">
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6"
              >
                <Clock className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-300">
                  Limited spots available
                </span>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              >
                <span className="text-white">Ready to Transform</span>
                <br />
                <span className="gradient-text">Your Trading Journey?</span>
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="max-w-xl mx-auto text-gray-400 text-lg mb-8"
              >
                Join thousands of traders and brokerages who trust NEXUS FX for
                their success. Start your free trial today.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <motion.button
                  onClick={openModal}
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all flex items-center gap-2 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Demo Access
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <div className="flex items-center gap-2 text-gray-400">
                  <Headphones className="w-5 h-5" />
                  <span>24/7 Support Available</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-green-400" />
              <span className="font-bold text-xl">
                <span className="gradient-text">NEXUS</span>
                <span className="text-white">FX</span>
              </span>
            </div>

            <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <a href="#features" onClick={(e) => scrollToSection(e, '#features')} className="hover:text-green-400 transition-colors">
                Features
              </a>
              <a href="#pricing" onClick={(e) => scrollToSection(e, '#pricing')} className="hover:text-green-400 transition-colors">
                Pricing
              </a>
              <a href="#faq" onClick={(e) => scrollToSection(e, '#faq')} className="hover:text-green-400 transition-colors">
                FAQ
              </a>
              <span className="hover:text-green-400 transition-colors cursor-pointer">
                Privacy Policy
              </span>
              <span className="hover:text-green-400 transition-colors cursor-pointer">
                Terms of Service
              </span>
            </nav>

            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} NEXUS FX. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
