import React from 'react';
import { splitNewline } from '../utils/helpers';

const Paragraphs = props => {
  let paragraphs = splitNewline(props.paragraphs);
  return (
    <React.Fragment>
      {paragraphs.map((p, idx) => {
        return (
          <React.Fragment>
            {/\S/.test(p) && <p>{p}</p>}
            {idx < paragraphs.length - 1 && <br />}
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

export default Paragraphs;
