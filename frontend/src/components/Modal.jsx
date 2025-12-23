import React, { useEffect, useCallback, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Send, Check, AlertCircle } from 'lucide-react';

// Validation patterns
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TELEGRAM_NUMERIC_PATTERN = /^\d+$/;

const Modal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    telegram: '',
    email: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const modalRef = useRef(null);
  const firstInputRef = useRef(null);

  // Focus trap
  useEffect(() => {
    if (isOpen && firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const validateForm = useCallback(() => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t('modal.errors.nameRequired');
    } else if (formData.name.trim().length < 2) {
      newErrors.name = t('modal.errors.nameMinLength');
    }

    if (!formData.telegram.trim()) {
      newErrors.telegram = t('modal.errors.telegramRequired');
    } else if (!formData.telegram.startsWith('@') && !TELEGRAM_NUMERIC_PATTERN.test(formData.telegram)) {
      newErrors.telegram = t('modal.errors.telegramInvalid');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('modal.errors.emailRequired');
    } else if (!EMAIL_PATTERN.test(formData.email)) {
      newErrors.email = t('modal.errors.emailInvalid');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData, t]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Call the Vercel serverless function
      const response = await fetch('/api/submit-demo-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit demo request');
      }

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after delay and redirect to trading platform
      setTimeout(() => {
        // Open trading platform in new tab
        window.open('https://tradingceo.me', '_blank', 'noopener,noreferrer');
        
        setFormData({ name: '', telegram: '', email: '' });
        setIsSubmitted(false);
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Error submitting demo request:', error);
      setIsSubmitting(false);
      setErrors({ submit: error.message || 'Failed to submit request. Please try again.' });
    }
  };

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', damping: 25, stiffness: 300 },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: { duration: 0.2 },
    },
  };

  const inputVariants = {
    focus: { scale: 1.02, boxShadow: '0 0 0 2px rgba(16, 185, 129, 0.5)' },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial="hidden"
          animate="visible"
          exit="hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            className="absolute inset-0 bg-midnight-950/80 backdrop-blur-md"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            ref={modalRef}
            variants={modalVariants}
            className="relative w-full max-w-md bg-gradient-to-br from-midnight-900/95 to-midnight-950/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl shadow-accent-emerald/10 overflow-hidden"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-emerald/5 via-transparent to-highlight-magenta/5 pointer-events-none" />

            {/* Header */}
            <div className="relative px-6 pt-6 pb-4 border-b border-white/10">
              <h2
                id="modal-title"
                className="text-2xl font-bold gradient-text"
              >
                {t('modal.title')}
              </h2>
              <p className="mt-1 text-sm text-gray-400">
                {t('modal.subtitle')}
              </p>
              <motion.button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="relative p-6 space-y-5">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.2 }}
                    className="w-16 h-16 mx-auto mb-4 bg-accent-emerald/20 rounded-full flex items-center justify-center"
                  >
                    <Check className="w-8 h-8 text-accent-emerald" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white">
                    {t('modal.submitted')}
                  </h3>
                  <p className="mt-2 text-gray-400">
                    {t('modal.submittedMessage')}
                  </p>
                </motion.div>
              ) : (
                <>
                  {/* General submission error */}
                  {errors.submit && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg"
                    >
                      <p className="text-sm text-red-400 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        {errors.submit}
                      </p>
                    </motion.div>
                  )}

                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      {t('modal.fullName')}
                    </label>
                    <motion.div
                      className="relative"
                      whileFocus="focus"
                    >
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <motion.input
                        ref={firstInputRef}
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange('name')}
                        variants={inputVariants}
                        whileFocus="focus"
                        className={`w-full pl-10 pr-4 py-3 bg-midnight-900/50 border ${
                          errors.name ? 'border-red-500' : 'border-white/10'
                        } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-emerald transition-colors`}
                        placeholder={t('modal.namePlaceholder')}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        aria-invalid={!!errors.name}
                      />
                    </motion.div>
                    {errors.name && (
                      <motion.p
                        id="name-error"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-sm text-red-400 flex items-center gap-1"
                        role="alert"
                      >
                        <AlertCircle className="w-4 h-4" />
                        {errors.name}
                      </motion.p>
                    )}
                  </div>

                  {/* Telegram Field */}
                  <div>
                    <label
                      htmlFor="telegram"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      {t('modal.telegramId')}
                    </label>
                    <motion.div className="relative">
                      <Send className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <motion.input
                        id="telegram"
                        type="text"
                        value={formData.telegram}
                        onChange={handleChange('telegram')}
                        variants={inputVariants}
                        whileFocus="focus"
                        className={`w-full pl-10 pr-4 py-3 bg-midnight-900/50 border ${
                          errors.telegram ? 'border-red-500' : 'border-white/10'
                        } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-emerald transition-colors`}
                        placeholder={t('modal.telegramPlaceholder')}
                        aria-describedby={errors.telegram ? 'telegram-error' : undefined}
                        aria-invalid={!!errors.telegram}
                      />
                    </motion.div>
                    {errors.telegram && (
                      <motion.p
                        id="telegram-error"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-sm text-red-400 flex items-center gap-1"
                        role="alert"
                      >
                        <AlertCircle className="w-4 h-4" />
                        {errors.telegram}
                      </motion.p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      {t('modal.emailAddress')}
                    </label>
                    <motion.div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <motion.input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange('email')}
                        variants={inputVariants}
                        whileFocus="focus"
                        className={`w-full pl-10 pr-4 py-3 bg-midnight-900/50 border ${
                          errors.email ? 'border-red-500' : 'border-white/10'
                        } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-emerald transition-colors`}
                        placeholder={t('modal.emailPlaceholder')}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        aria-invalid={!!errors.email}
                      />
                    </motion.div>
                    {errors.email && (
                      <motion.p
                        id="email-error"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-sm text-red-400 flex items-center gap-1"
                        role="alert"
                      >
                        <AlertCircle className="w-4 h-4" />
                        {errors.email}
                      </motion.p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 bg-gradient-to-r from-accent-emerald to-accent-cyan text-white font-semibold rounded-lg shadow-lg shadow-accent-emerald/25 hover:shadow-accent-emerald/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <motion.span
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        />
                        {t('modal.submitting')}
                      </span>
                    ) : (
                      t('modal.submit')
                    )}
                  </motion.button>

                  <p className="text-xs text-gray-500 text-center">
                    {t('modal.termsNotice')}
                  </p>
                </>
              )}
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
