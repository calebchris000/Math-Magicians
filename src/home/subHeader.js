import { useEffect, useState } from 'react';
import './home.css';

const SubHeader = (custom) => {
  const defaultText = 'Welcome To Our Page!';
  const { text } = custom;
  const [words, setWords] = useState(defaultText);
  useEffect(() => {
    if (text) {
      setWords(text);
    }
  }, [text]);
  return (
    <h2 className="subHeader">
      {words}
    </h2>

  );
};

export default SubHeader;
