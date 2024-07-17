import React from 'react';

// Utility function to render properties of a member
export const renderProperties = (properties: Record<string, any>) => {
  return Object.entries(properties).map(([key, value]) => {
    switch (value.type) {
      case 'title':
        return <h3 key={key} className="text-lg font-bold mb-2">{value.title?.[0]?.text?.content}</h3>;
      case 'rich_text':
        return value.rich_text?.length > 0 && (
          <p key={key} className="text-sm mb-1"><span className="font-semibold">{key}:</span> {value.rich_text?.[0]?.text?.content}</p>
        );
      case 'date':
        return (
          <p key={key} className="text-sm mb-1"><span className="font-semibold">{key}:</span> {value.date?.start}</p>
        );
      case 'url':
        return (
          <p key={key} className="text-sm mb-1"><span className="font-semibold">{key}:</span> <a href={value.url} className="text-blue-500">{value.url}</a></p>
        );
      case 'email':
        return (
          <p key={key} className="text-sm mb-1"><span className="font-semibold">{key}:</span> {value.email}</p>
        );
      case 'phone_number':
        return (
          <p key={key} className="text-sm mb-1"><span className="font-semibold">{key}:</span> {value.phone_number}</p>
        );
      case 'select':
        return value.select && (
          <p key={key} className="text-sm mb-1"><span className="font-semibold">{key}:</span> {value.select.name}</p>
        );
      case 'files':
        return value.files?.length > 0 && (
          <img key={key} src={value.files[0].file.url} alt="File" className="w-16 h-16" />
        );
      default:
        return (
          <p key={key} className="text-sm mb-1"><span className="font-semibold">{key}:</span> {JSON.stringify(value)}</p>
        );
    }
  });
};
