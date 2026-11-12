import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle2, ExternalLink, Loader2, Mail, MessageCircle, RotateCcw } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import Card from '../common/Card';
import PrimaryButton from '../common/PrimaryButton';
import { BUSINESS_INFO } from '../../data/businessInfo';
import { ENQUIRY_SERVICE_OPTIONS, enquirySchema } from '../../schemas/enquirySchema';
import { buildEnquiryMailtoHref, buildEnquiryWhatsAppHref } from '../../utils/contact';

/**
 * Validated customer enquiry form that prepares a pre-filled WhatsApp message (no backend).
 */
export default function EnquiryForm() {
  const [submittedState, setSubmittedState] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      serviceType: '',
      message: '',
    },
  });

  const onSubmit = async (values) => {
    // Brief pause so users clearly perceive the preparing state before handoff
    await new Promise((resolve) => setTimeout(resolve, 250));

    const whatsappHref = buildEnquiryWhatsAppHref(values);
    const mailtoHref = buildEnquiryMailtoHref(values);

    const openedWindow = window.open(whatsappHref, '_blank', 'noopener,noreferrer');

    setSubmittedState({
      customerName: values.fullName,
      whatsappHref,
      mailtoHref,
    });

    if (openedWindow) {
      toast.success('Enquiry prepared! Opening WhatsApp to send your message.');
    } else {
      toast.success('Enquiry ready! Click "Open WhatsApp" below to send your message.');
    }

    reset();
  };

  const onInvalid = () => {
    toast.error('Please check the highlighted form fields and try again.');
  };

  return (
    <Card padding="lg" className="relative overflow-hidden border-t-2 border-t-navy-800">
      <div>
        <h3 className="font-display text-xl font-bold text-ink">Send an Enquiry</h3>
        <p className="mt-1 text-sm text-ink-secondary">
          Fill in your details below to start a pre-filled WhatsApp chat directly with{' '}
          {BUSINESS_INFO.ownerName}.
        </p>
      </div>

      {submittedState && (
        <div
          role="status"
          aria-live="polite"
          className="mt-5 rounded-xl border border-navy-800/20 bg-surface-light p-4"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-navy-800" aria-hidden="true" />
            <div className="flex-1">
              <p className="text-sm font-bold text-navy-900">
                Thank you, {submittedState.customerName}. Your WhatsApp message is ready.
              </p>
              <p className="mt-1 text-xs leading-relaxed text-ink-secondary">
                If WhatsApp did not open automatically, use the button below or send your enquiry
                via email.
              </p>

              <div className="mt-3 flex flex-wrap gap-2.5">
                <PrimaryButton
                  href={submittedState.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="sm"
                >
                  <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Open WhatsApp</span>
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </PrimaryButton>

                <PrimaryButton href={submittedState.mailtoHref} variant="outline" size="sm">
                  <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Send via Email</span>
                </PrimaryButton>

                <button
                  type="button"
                  onClick={() => setSubmittedState(null)}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-ink-secondary hover:text-navy-900 cursor-pointer"
                >
                  <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Dismiss</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <form
        noValidate
        aria-label="Customer enquiry form"
        onSubmit={handleSubmit(onSubmit, onInvalid)}
        className="mt-6 space-y-4"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Full Name */}
          <div>
            <label htmlFor="enquiry-fullName" className="mb-1.5 block text-xs font-semibold text-ink">
              Full Name <span className="text-lic-red" aria-hidden="true">*</span>
            </label>
            <input
              id="enquiry-fullName"
              type="text"
              autoComplete="name"
              placeholder="e.g. Subhajit Banerjee"
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? 'error-fullName' : undefined}
              className={`input-field ${errors.fullName ? 'input-field-error' : ''}`}
              {...register('fullName')}
            />
            {errors.fullName && (
              <p id="error-fullName" role="alert" className="mt-1.5 text-xs font-medium text-lic-red">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="enquiry-phone" className="mb-1.5 block text-xs font-semibold text-ink">
              Phone Number <span className="text-lic-red" aria-hidden="true">*</span>
            </label>
            <input
              id="enquiry-phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="10-digit mobile number"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? 'error-phone' : undefined}
              className={`input-field ${errors.phone ? 'input-field-error' : ''}`}
              {...register('phone')}
            />
            {errors.phone && (
              <p id="error-phone" role="alert" className="mt-1.5 text-xs font-medium text-lic-red">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {/* Email Address (optional) */}
          <div>
            <label htmlFor="enquiry-email" className="mb-1.5 block text-xs font-semibold text-ink">
              Email Address <span className="font-normal text-ink-muted">(optional)</span>
            </label>
            <input
              id="enquiry-email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'error-email' : undefined}
              className={`input-field ${errors.email ? 'input-field-error' : ''}`}
              {...register('email')}
            />
            {errors.email && (
              <p id="error-email" role="alert" className="mt-1.5 text-xs font-medium text-lic-red">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Service Interested In */}
          <div>
            <label htmlFor="enquiry-service" className="mb-1.5 block text-xs font-semibold text-ink">
              Service Interested In <span className="text-lic-red" aria-hidden="true">*</span>
            </label>
            <select
              id="enquiry-service"
              aria-invalid={Boolean(errors.serviceType)}
              aria-describedby={errors.serviceType ? 'error-service' : undefined}
              className={`input-field ${errors.serviceType ? 'input-field-error' : ''}`}
              {...register('serviceType')}
            >
              <option value="">Select a service...</option>
              {ENQUIRY_SERVICE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.serviceType && (
              <p id="error-service" role="alert" className="mt-1.5 text-xs font-medium text-lic-red">
                {errors.serviceType.message}
              </p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="enquiry-message" className="mb-1.5 block text-xs font-semibold text-ink">
            Message <span className="text-lic-red" aria-hidden="true">*</span>
          </label>
          <textarea
            id="enquiry-message"
            rows={4}
            placeholder="Share your policy question, guidance request, or preferred time to speak..."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'error-message' : undefined}
            className={`input-field resize-y ${errors.message ? 'input-field-error' : ''}`}
            {...register('message')}
          />
          {errors.message && (
            <p id="error-message" role="alert" className="mt-1.5 text-xs font-medium text-lic-red">
              {errors.message.message}
            </p>
          )}
        </div>

        <div className="pt-2">
          <PrimaryButton
            type="submit"
            variant="primary"
            size="lg"
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                <span>Preparing WhatsApp Message...</span>
              </>
            ) : (
              <>
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>Send Enquiry on WhatsApp</span>
              </>
            )}
          </PrimaryButton>

          <p className="mt-3 text-center text-xs text-ink-secondary">
            Submitting opens WhatsApp ({BUSINESS_INFO.contact.primaryPhoneDisplay}) with your
            pre-filled enquiry details. No data is stored on a server.
          </p>
        </div>
      </form>
    </Card>
  );
}
