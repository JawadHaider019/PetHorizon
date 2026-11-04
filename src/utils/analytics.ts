/**
 * Pet Horizon Web - Lightweight GA4 Analytics Utility
 * Measurement ID: G-FHBNRZ7X6T
 * Safe for deferred loading; queues events in window.dataLayer if gtag is not yet initialized.
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
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
        completion_method?: 'save_sync' | 'explicit_calculate';
      };
    };

export function trackEvent<E extends AnalyticsEvent>(name: E['name'], params: E['params']): boolean {
  if (typeof window === 'undefined') return false;

  const currentPath = window.location.pathname;
  const eventPayload = {
    ...params,
    page_path: 'page_path' in params && params.page_path ? params.page_path : currentPath
  };

  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, eventPayload);
      return true;
    } else {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer?.push(arguments);
      };
      window.gtag('event', name, eventPayload);
      return true;
    }
  } catch {
    // Fail safely in development or ad-blocker environments
    return false;
  }
}

export function trackPlayStoreClick(buttonLocation: string): boolean {
  return trackEvent('play_store_click', {
    button_location: buttonLocation,
    page_path: typeof window !== 'undefined' ? window.location.pathname : '/',
    platform: 'android'
  });
}

export function trackLeadGenerated(formName: string): boolean {
  return trackEvent('generate_lead', {
    form_name: formName,
    page_path: typeof window !== 'undefined' ? window.location.pathname : '/'
  });
}

export function trackCalculatorCompleted(
  calculatorType: 'pet_calorie' | 'pet_age',
  petType: 'dog' | 'cat',
  completionMethod: 'save_sync' | 'explicit_calculate' = 'save_sync'
): boolean {
  return trackEvent('calculator_completed', {
    calculator_type: calculatorType,
    pet_type: petType,
    completion_method: completionMethod
  });
}

