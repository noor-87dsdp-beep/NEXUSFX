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
  Target,
  Lightbulb,
  Award,
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
      icon: <Layers className="w-8 h-8" />,
      title: 'B-Book Dealing Desk',
      description: '"God Mode" order intervention, manage PnL, set spreads, and custom slippage controls.',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Real-Time Price Feeds',
      description: 'Live FX, Gold, and Indices pricing across 50+ assets with instant updates.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Complete Admin Panel',
      description: 'Full control over risk management, orders, and client management in one dashboard.',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'CRM & KYC Integration',
      description: 'Manage leads, documents, verification workflows, and assign agents seamlessly.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Crypto Deposits & Withdrawals',
      description: 'USDT/ERC20 and TRC20 integration directly to your wallet. No code required.',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'White-Label Ready',
      description: 'Full SaaS integration with your own branding, logo, and colors. Launch instantly.',
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
      name: 'Pay-As-You-Go',
      price: '$299',
      period: '/month',
      description: 'Perfect for getting started',
      features: [
        'Full B-Book dealing desk',
        'Real-time price feeds (50+ assets)',
        'Basic admin panel',
        'Email support',
        'Crypto deposit/withdrawal',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'For growing brokerages',
      features: [
        'Everything in Pay-As-You-Go',
        'Complete CRM & KYC system',
        'Custom risk engine',
        'Priority 24/7 support',
        'White-label branding',
        'Full trade audit trails',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Lifetime',
      price: 'One-Time',
      period: '',
      description: 'Full ownership, no recurring fees',
      features: [
        'Everything in Professional',
        'Dedicated server setup',
        'Custom price/fee logic',
        'Operator overrides',
        'Priority updates forever',
        'No monthly payments',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const faqs = [
    {
      question: 'What is included when I purchase NEXUS FX?',
      answer:
        'You get the complete institutional-grade white label Forex brokerage solution including B-Book dealing desk, real-time price feeds for 50+ assets, complete admin panel, CRM & KYC integration, crypto deposit/withdrawal, and full reporting tools.',
    },
    {
      question: 'Do I need developers or technical knowledge?',
      answer:
        'No code required! We handle updates, security, and hosting for you. Focus on sales and growing your business - you don\'t need developers, servers, or DevOps expertise.',
    },
    {
      question: 'What markets and assets can my clients trade?',
      answer:
        'NEXUS FX provides access to major Forex pairs, Gold, Indices, and more across 50+ assets. All with real-time price feeds and lightning-fast execution.',
    },
    {
      question: 'How does the white-label solution work?',
      answer:
        'Our Enterprise and Lifetime plans include full SaaS/white-label integration ready for your own branding, logo, and colors. Backend integration with admin controls, custom risk engine, and operator overrides are all included.',
    },
    {
      question: 'What crypto payment options are supported?',
      answer:
        'We support USDT deposits and withdrawals via ERC20 and TRC20 networks directly to your wallet. No additional payment processor required.',
    },
    {
      question: 'What is the difference between monthly and Lifetime plans?',
      answer:
        'Monthly plans offer flexibility with ongoing updates and support. The Lifetime plan is a one-time payment with full ownership, priority updates forever, dedicated server setup, and no recurring monthly fees.',
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
              The all-in-one white label brokerage solution. B-Book dealing desk,
              real-time price feeds, CRM & KYC, crypto payments - everything included.
              No code required.
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

      {/* Mission Section */}
      <section id="mission" className="py-24 px-4 bg-black/30">
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6"
            >
              <Target className="w-4 h-4 text-green-400" />
              <span className="text-sm text-gray-300">Our Mission</span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            >
              <span className="text-white">Empowering You to Become a</span>{' '}
              <span className="gradient-text">Platform Operator</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-gray-400 text-lg mb-8"
            >
              NEXUS FX is a <strong className="text-white">trading platform software provider</strong>, 
              not a trading service. We provide the complete infrastructure for you to launch and operate 
              your own Forex brokerage—transforming you from a market participant into a market maker.
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
                <div className="h-full p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-center">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white mb-4">
                    <Lightbulb className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    What We Provide
                  </h3>
                  <p className="text-gray-400">
                    A complete, institutional-grade white-label brokerage platform. 
                    Everything you need to run your own trading business—dealing desk, 
                    price feeds, CRM, KYC, and payment processing.
                  </p>
                </div>
              </TiltCard>
            </motion.div>

            {/* Mission Card 2 */}
            <motion.div variants={fadeInUp}>
              <TiltCard intensity={8}>
                <div className="h-full p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-center">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white mb-4">
                    <Target className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Our Core Mission
                  </h3>
                  <p className="text-gray-400">
                    To democratize access to professional trading infrastructure. 
                    We believe anyone should be able to launch their own brokerage 
                    without needing technical expertise or massive capital.
                  </p>
                </div>
              </TiltCard>
            </motion.div>

            {/* Mission Card 3 */}
            <motion.div variants={fadeInUp}>
              <TiltCard intensity={8}>
                <div className="h-full p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-center">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white mb-4">
                    <Award className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Your Transformation
                  </h3>
                  <p className="text-gray-400">
                    Stop being just a trader. With NEXUS FX, become a platform operator 
                    with full control over your brokerage business, your clients, 
                    and your revenue streams.
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
              <span className="text-white">Everything Included in</span>{' '}
              <span className="gradient-text">Your Brokerage</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="max-w-2xl mx-auto text-gray-400 text-lg"
            >
              Get instant access to the full institutional-grade white label solution.
              No code required.
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
              Got questions? We've got answers.
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
              <a href="#mission" onClick={(e) => scrollToSection(e, '#mission')} className="hover:text-green-400 transition-colors">
                Mission
              </a>
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
