// Form submission handler with API integration
export function initFormHandler() {
  const forms = document.querySelectorAll('#leadForm');
  
  forms.forEach((formElement) => {
    const form = formElement as HTMLFormElement;
    if ((form as any).dataset?.initialized) return;
    (form as any).dataset = { initialized: 'true' };

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formElement = e.target as HTMLFormElement;
      const submitButton = formElement.querySelector('button[type="submit"]') as HTMLButtonElement;
      const honeypot = (formElement.querySelector('[name="__hp"]') as HTMLInputElement)?.value;

      // Honeypot check
      if (honeypot) {
        window.location.hash = '/dziekujemy';
        return;
      }

      // Disable submit button
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Wysyłanie...';
      }

      // Collect form data
      const formData = new FormData(formElement);
      
      // Add technical fields
      formData.append('__ts', Date.now().toString());
      formData.append('utm_source', sessionStorage.getItem('utm_source') || '');
      formData.append('utm_medium', sessionStorage.getItem('utm_medium') || '');
      formData.append('utm_campaign', sessionStorage.getItem('utm_campaign') || '');
      formData.append('utm_term', sessionStorage.getItem('utm_term') || '');
      formData.append('utm_content', sessionStorage.getItem('utm_content') || '');
      formData.append('gclid', sessionStorage.getItem('gclid') || '');
      formData.append('fbclid', sessionStorage.getItem('fbclid') || '');
      formData.append('referrer', sessionStorage.getItem('referrer') || '');
      formData.append('path', window.location.pathname + window.location.hash);

      try {
        const response = await fetch('/api/lead.php', {
          method: 'POST',
          body: formData,
          headers: {
            'X-Requested-With': 'fetch'
          }
        });

        const result = await response.json();

        if (result.ok) {
          // Success - redirect to thank you page
          window.location.hash = '/dziekujemy';
        } else {
          // Error from server
          showError(formElement, result.error || 'Wystąpił błąd. Spróbuj ponownie.');
          if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = 'Wyślij zapytanie';
          }
        }
      } catch (error) {
        // Network error
        showError(formElement, 'Nie udało się wysłać formularza. Sprawdź połączenie i spróbuj ponownie.');
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = 'Wyślij zapytanie';
        }
      }
    });
  });
}

function showError(form: HTMLFormElement, message: string) {
  let errorDiv = form.querySelector('.form-error') as HTMLDivElement;
  
  if (!errorDiv) {
    errorDiv = document.createElement('div');
    errorDiv.className = 'form-error';
    errorDiv.setAttribute('role', 'alert');
    errorDiv.setAttribute('aria-live', 'polite');
    form.insertBefore(errorDiv, form.querySelector('button[type="submit"]'));
  }

  errorDiv.textContent = message;
  errorDiv.style.cssText = `
    background: rgba(239, 68, 68, 0.1);
    border: 1px solid rgba(239, 68, 68, 0.3);
    color: #ef4444;
    padding: 1rem;
    border-radius: 12px;
    margin-bottom: 1rem;
    text-align: center;
  `;

  setTimeout(() => {
    errorDiv.remove();
  }, 5000);
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFormHandler);
} else {
  initFormHandler();
}

// Re-initialize on hash change (for SPA navigation)
window.addEventListener('hashchange', () => {
  setTimeout(initFormHandler, 100);
});
