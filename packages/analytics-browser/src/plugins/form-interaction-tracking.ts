import { BrowserClient, Event, EnrichmentPlugin } from '@amplitude/analytics-types';
import {
  DEFAULT_FORM_START_EVENT,
  DEFAULT_FORM_SUBMIT_EVENT,
  FORM_ID,
  FORM_NAME,
  FORM_DESTINATION,
} from '../constants';
import { BrowserConfig } from '../config';

export const formInteractionTracking = (): EnrichmentPlugin => {
  const name = '@amplitude/plugin-form-interaction-tracking-browser';
  const type = 'enrichment';
  const setup = async (config: BrowserConfig, amplitude: BrowserClient) => {
    /* istanbul ignore if */
    if (!amplitude) {
      // TODO: Add required minimum version of @amplitude/analytics-browser
      config.loggerProvider.warn(
        'Form interaction tracking requires a later version of @amplitude/analytics-browser. Form interaction events are not tracked.',
      );
      return;
    }

    const addFormInteractionListener = (form: HTMLFormElement) => {
      let hasFormChanged = false;

      form.addEventListener(
        'change',
        () => {
          if (!hasFormChanged) {
            amplitude.track(DEFAULT_FORM_START_EVENT, {
              [FORM_ID]: form.id,
              [FORM_NAME]: form.name,
              [FORM_DESTINATION]: form.action,
            });
          }
          hasFormChanged = true;
        },
        {},
      );

      form.addEventListener('submit', () => {
        if (!hasFormChanged) {
          amplitude.track(DEFAULT_FORM_START_EVENT, {
            [FORM_ID]: form.id,
            [FORM_NAME]: form.name,
            [FORM_DESTINATION]: form.action,
          });
        }

        amplitude.track(DEFAULT_FORM_SUBMIT_EVENT, {
          [FORM_ID]: form.id,
          [FORM_NAME]: form.name,
          [FORM_DESTINATION]: form.action,
        });
        hasFormChanged = false;
      });
    };

    // Adds listener to existing anchor tags
    const forms = Array.from(document.getElementsByTagName('form'));
    forms.forEach(addFormInteractionListener);

    // Adds listener to anchor tags added after initial load
    /* istanbul ignore else */
    if (typeof MutationObserver !== 'undefined') {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeName === 'FORM') {
              addFormInteractionListener(node as HTMLFormElement);
            }
            if ('querySelectorAll' in node && typeof node.querySelectorAll === 'function') {
              Array.from(node.querySelectorAll('form') as HTMLFormElement[]).map(addFormInteractionListener);
            }
          });
        });
      });

      observer.observe(document.body, {
        subtree: true,
        childList: true,
      });
    }
  };
  const execute = async (event: Event) => event;

  return {
    name,
    type,
    setup,
    execute,
  };
};
