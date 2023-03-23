import { useEffect, useState } from 'react';

const CommentSpace = () => {
  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const api = 'https://api.api-ninjas.com/v1/quotes?category=computers';

    fetch(api, {
      method: 'GET',
      headers: { 'X-Api-Key': '5rSLL0PBtzOlg6xJuFAEhQ==vlclyWMZ4F1RHVtv' },
      contentType: 'application/json',
    })
      .then((response) => {
        if (!response.ok) {
          setError(true);
        }
        return response.json();
      })
      .then((data) => {
        setQuote(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="quotes">
        <p className="author">Loading quotes...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="quotes">
        <p className="author">
          Sorry, an error occurred:
          {error.message}
        </p>
      </div>
    );
  }

  if (quote === []) {
    return null;
  }
  return (
    <div className="quotes">
      {
        quote.map((x) => <p key={0}>{x.quote}</p>)
      }
      {
        quote.map((x) => (
          <p className="author" key={0}>
            -&nbsp;
            {x.author}
          </p>
        ))
      }
    </div>
  );
};

export default CommentSpace;
