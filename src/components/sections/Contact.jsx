import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Mail, MapPin, Send, CheckCircle, Clock, Copy, Check, MessageCircle, AlertCircle } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { LinkedinIcon } from '../ui/CustomIcons';

export const Contact = () => {
  const { email, location, socials } = portfolioData.personalInfo;

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copied, setCopied] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Field validation handler
  const validateField = (name, value) => {
    let errorMsg = '';
    if (!value.trim()) {
      errorMsg = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    } else if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        errorMsg = 'Please enter a valid email address';
      }
    }
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    return errorMsg === '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error while typing if any
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    const isNameValid = validateField('name', formData.name);
    const isEmailValid = validateField('email', formData.email);
    const isSubjectValid = validateField('subject', formData.subject);
    const isMessageValid = validateField('message', formData.message);

    if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
      setIsSubmitting(true);
      setSubmitError('');
      
      const web3Key = portfolioData.personalInfo.web3formsKey;
      if (web3Key && web3Key !== 'YOUR_WEB3FORMS_ACCESS_KEY' && web3Key.trim() !== '') {
        // Send using Web3Forms
        fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: web3Key,
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            from_name: 'Portfolio Contact Form'
          })
        })
        .then((response) => response.json())
        .then((data) => {
          setIsSubmitting(false);
          if (data.success) {
            setIsSuccess(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
          } else {
            setSubmitError(data.message || 'Something went wrong. Please try again.');
          }
        })
        .catch(() => {
          setIsSubmitting(false);
          setSubmitError('Failed to send message. Please check your internet connection.');
        });
      } else {
        // Fallback: Mailto link opening
        setIsSubmitting(false);
        const mailtoUri = `mailto:${email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
          `Hi Pratik,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}`
        )}`;
        window.location.href = mailtoUri;
        
        // Show success state on UI too for completion
        setIsSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Contact Me
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mb-6" />
          <p className="max-w-xl mx-auto text-sm text-slate-500 dark:text-slate-400">
            Have a project in mind, want to collaborate, or simply say hello? Shoot me a message!
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact Details (Left Column) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Card hoverEffect={true} className="p-8 flex flex-col justify-between h-full">
              
              <div className="flex flex-col gap-8">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white border-b border-slate-200/50 dark:border-slate-800/40 pb-4">
                  Let's Connect
                </h3>
                
                {/* Email details card */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl text-indigo-600 dark:text-indigo-400">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-sm font-semibold text-slate-400 dark:text-slate-500 mb-1">
                      EMAIL ME
                    </h4>
                    <div className="flex items-center gap-2 flex-wrap">
                      <a 
                        href={`mailto:${email}`}
                        className="text-base font-medium text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors break-all"
                      >
                        {email}
                      </a>
                      <button
                        onClick={handleCopyEmail}
                        type="button"
                        className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                        title="Copy email"
                      >
                        {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Location Card */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl text-indigo-600 dark:text-indigo-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 dark:text-slate-500 mb-1">
                      LOCATION
                    </h4>
                    <span className="text-base font-medium text-slate-700 dark:text-slate-200">
                      {location}
                    </span>
                  </div>
                </div>

                {/* Availability Info */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl text-indigo-600 dark:text-indigo-400">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 dark:text-slate-500 mb-1">
                      AVAILABILITY
                    </h4>
                    <span className="text-base font-medium text-slate-700 dark:text-slate-200">
                      24/7 Available
                    </span>
                  </div>
                </div>

                {/* LinkedIn Card */}
                {socials?.linkedin && (
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl text-indigo-600 dark:text-indigo-400">
                      <LinkedinIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-400 dark:text-slate-500 mb-1">
                        LINKEDIN
                      </h4>
                      <a 
                        href={socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-medium text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>
                )}

                {/* WhatsApp Chat Card */}
                {socials?.whatsapp && socials.whatsapp !== 'https://wa.me/91XXXXXXXXXX' && (
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl text-indigo-600 dark:text-indigo-400">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-400 dark:text-slate-500 mb-1">
                        WHATSAPP CHAT
                      </h4>
                      <a 
                        href={socials.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-medium text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        Chat Directly
                      </a>
                    </div>
                  </div>
                )}
              </div>


            </Card>
          </div>

          {/* Interactive Form Card (Right Column) */}
          <div className="lg:col-span-7">
            <Card hoverEffect={false} className="p-8 h-full flex flex-col justify-center">
              
              {isSuccess ? (
                /* Interactive Success message State */
                <div className="text-center py-12 px-4 flex flex-col items-center justify-center animate-fade-in-up">
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-full mb-6 text-emerald-500">
                    <CheckCircle className="w-16 h-16 animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed mb-6">
                    Thank you so much! I have received your email request and will review it and reply within 24 hours.
                  </p>
                  <Button 
                    size="sm"
                    onClick={() => setIsSuccess(false)}
                    className="rounded-xl px-6"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                /* Standard Form State */
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white border-b border-slate-200/50 dark:border-slate-800/40 pb-4 mb-2">
                    Send a Message
                  </h3>
                  
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full bg-slate-100/50 dark:bg-slate-900/40 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all text-slate-800 dark:text-slate-200 ${
                        errors.name 
                          ? 'border-rose-500/50 focus:ring-rose-500/30' 
                          : 'border-slate-200 dark:border-slate-800/50 focus:border-indigo-500/60'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && <span className="text-[11px] text-rose-500 font-medium pl-1">{errors.name}</span>}
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full bg-slate-100/50 dark:bg-slate-900/40 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all text-slate-800 dark:text-slate-200 ${
                        errors.email 
                          ? 'border-rose-500/50 focus:ring-rose-500/30' 
                          : 'border-slate-200 dark:border-slate-800/50 focus:border-indigo-500/60'
                      }`}
                      placeholder="john.doe@example.com"
                    />
                    {errors.email && <span className="text-[11px] text-rose-500 font-medium pl-1">{errors.email}</span>}
                  </div>

                  {/* Subject field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full bg-slate-100/50 dark:bg-slate-900/40 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all text-slate-800 dark:text-slate-200 ${
                        errors.subject 
                          ? 'border-rose-500/50 focus:ring-rose-500/30' 
                          : 'border-slate-200 dark:border-slate-800/50 focus:border-indigo-500/60'
                      }`}
                      placeholder="Partnership, Consulting, Hire, etc."
                    />
                    {errors.subject && <span className="text-[11px] text-rose-500 font-medium pl-1">{errors.subject}</span>}
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full bg-slate-100/50 dark:bg-slate-900/40 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all text-slate-800 dark:text-slate-200 resize-none ${
                        errors.message 
                          ? 'border-rose-500/50 focus:ring-rose-500/30' 
                          : 'border-slate-200 dark:border-slate-800/50 focus:border-indigo-500/60'
                      }`}
                      placeholder="Hi Pratik, I would love to talk about our upcoming application architecture..."
                    />
                    {errors.message && <span className="text-[11px] text-rose-500 font-medium pl-1">{errors.message}</span>}
                  </div>

                  {/* Error Alert Box */}
                  {submitError && (
                    <div className="flex items-center gap-2 bg-rose-50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-400 p-4 rounded-xl text-xs font-semibold border border-rose-200/50 dark:border-rose-950/40 animate-fade-in-up">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    rightIcon={<Send className="w-4.5 h-4.5" />}
                    className="mt-2 py-3.5 rounded-xl font-bold shadow-lg shadow-indigo-500/20"
                  >
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </Button>
                </form>
              )}

            </Card>
          </div>

        </div>

      </div>
    </section>
  );
};
