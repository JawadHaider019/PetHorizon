/**
 * Pet Horizon Web - Lightweight GA4 Analytics Utility
 * Measurement ID: G-FHBNRZ7X6T
 * Safe for deferred loading; queues events in window.dataLayer if gtag is not yet initialized.
 */

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export type AnalyticsEvent =
  | {
      name: 'play_store_click';
      params: {
        button_location: string;
        page_path: string;
        platform: 'android';
      };
    }
  | {
      name: 'generate_lead';
      params: {
        form_name: string;
        page_path: string;
      };
    }
  | {
      name: 'calculator_completed';
      params: {
        calculator_type: 'pet_calorie' | 'pet_age';
        pet_type: 'dog' | 'cat';
      };
    };

export function trackEvent<E extends AnalyticsEvent>(name: E['name'], params: E['params']): void {
  if (typeof window === 'undefined') return;

  const currentPath = window.location.pathname;
  const eventPayload = {
    ...params,
    page_path: 'page_path' in params && params.page_path ? params.page_path : currentPath
  };

  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, eventPayload);
    } else {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(['event', name, eventPayload]);
    }
  } catch {
    // Fail silently in development or ad-blocker environments
  }
}

export function trackPlayStoreClick(buttonLocation: string): void {
  trackEvent('play_store_click', {
    button_location: buttonLocation,
    page_path: typeof window !== 'undefined' ? window.location.pathname : '/',
    platform: 'android'
  });
}

export function trackLeadGenerated(formName: string): void {
  trackEvent('generate_lead', {
    form_name: formName,
    page_path: typeof window !== 'undefined' ? window.location.pathname : '/'
  });
}

export function trackCalculatorCompleted(
  calculatorType: 'pet_calorie' | 'pet_age',
  petType: 'dog' | 'cat'
): void {
  trackEvent('calculator_completed', {
    calculator_type: calculatorType,
    pet_type: petType
  });
}
