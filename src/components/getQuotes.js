import { useEffect, useState } from 'react';

const CommentSpace = () => {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    const GetQuote = async () => {
      const api = 'https://api.api-ninjas.com/v1/quotes?category=computers';
      const request = await fetch(api, {
        method: 'GET',
        headers: { 'X-Api-Key': '5rSLL0PBtzOlg6xJuFAEhQ==vlclyWMZ4F1RHVtv' },
        contentType: 'application/json',
      });
      const response = await request.json();
      setQuote(response);
    };
    GetQuote();
  }, []);
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
