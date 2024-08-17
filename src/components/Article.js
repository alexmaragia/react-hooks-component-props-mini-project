import React from 'react';

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const renderReadTime = () => {
    let indicator = "";
    if (minutes < 30) {
      indicator = "☕️".repeat(Math.ceil(minutes / 5));
    } else {
      indicator = "🍱".repeat(Math.ceil(minutes / 10));
    }
    return `${indicator} ${minutes} min read`;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} • {renderReadTime()}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
