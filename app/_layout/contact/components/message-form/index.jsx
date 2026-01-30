'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import { AlertCircle, Check } from 'lucide-react';

import { MagneticButton } from '@/components';

import {
  Divider,
  FormContainer,
  FormGroup,
  FormSection,
  FormTitle,
  FormWrapper,
  Input,
  InputWrapper,
  Label,
  StatusMessage,
  SubmitGroup,
  TextArea,
} from './index.styled';

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const inputVariants = {
  focus: {
    boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
    borderColor: 'currentColor',
  },
};

export function MessageForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSuccess(false), 4000);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <Divider />
        <FormTitle>Send us a message</FormTitle>

        <FormWrapper>
          <form onSubmit={handleSubmit}>
            <FormSection>
              <motion.div
                custom={0}
                variants={formVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <FormGroup>
                  <Label htmlFor="name">Full Name</Label>
                  <InputWrapper
                    animate={focusedField === 'name' ? inputVariants.focus : {}}
                  >
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="John Doe"
                      required
                      disabled={loading}
                    />
                  </InputWrapper>
                </FormGroup>
              </motion.div>

              <motion.div
                custom={1}
                variants={formVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <FormGroup>
                  <Label htmlFor="email">Email Address</Label>
                  <InputWrapper
                    animate={focusedField === 'email' ? inputVariants.focus : {}}
                  >
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="john@example.com"
                      required
                      disabled={loading}
                    />
                  </InputWrapper>
                </FormGroup>
              </motion.div>

              <motion.div
                custom={2}
                variants={formVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <FormGroup>
                  <Label htmlFor="message">Your Message</Label>
                  <InputWrapper
                    animate={focusedField === 'message' ? inputVariants.focus : {}}
                  >
                    <TextArea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Tell us about your project..."
                      rows="6"
                      required
                      disabled={loading}
                    />
                  </InputWrapper>
                </FormGroup>
              </motion.div>
            </FormSection>

            <SubmitGroup>
              <motion.div
                custom={3}
                variants={formVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <MagneticButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={loading}
                  className={loading ? 'opacity-60' : ''}
                >
                  <span className='flex items-center gap-2'>
                    {loading ? 'Sending...' : 'Send Message'}
                  </span>
                </MagneticButton>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: success ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {success && (
                  <StatusMessage success>
                    <Check size={18} />
                    <span>Message sent successfully! We&apos;ll be in touch soon.</span>
                  </StatusMessage>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: error ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {error && (
                  <StatusMessage error>
                    <AlertCircle size={18} />
                    <span>{error}</span>
                  </StatusMessage>
                )}
              </motion.div>
            </SubmitGroup>
          </form>
        </FormWrapper>
      </motion.div>
    </FormContainer>
  );
}
