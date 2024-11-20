// src/components/BlogList/utils.js
export const formatDate = (dateString) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  // Add any additional utility functions here as needed
  export const truncateText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength).trim() + '...';
  };
  
  export const sanitizeHtml = (html) => {
    // Basic HTML sanitization if needed
    return html
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '');
  };