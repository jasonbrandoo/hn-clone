import React from 'react';
import { NavLink } from 'react-router-dom';
import withNews from '../hoc/withNews';
import './News.css';

const Ask = (props) => {
  const { ask, askPage, askIndex } = props;
  const renderIndex = askPage.map(number => (
    <button onClick={() => askIndex(number)} type="submit">{number}</button>
  ));
  const renderAsk = ask.map((item, index) => (
    <React.Fragment key={item.id}>
      <tr>
        <th>
          <div className="news-number">
            {index += 1}
          </div>
        </th>
        <td>
          <div className="ask-header">
            <p>
              <NavLink to={`/${item.id}`}>
                {item.title}
              </NavLink>
            </p>
          </div>
          <div className="news-body">
            <small>
              {item.time_ago}
              {' '}
              |
              {' '}
            </small>
            <small>
              {item.user}
              {' '}
              |
              {' '}
            </small>
            <small>
              {item.points}
              {' '}
              Points
            </small>
          </div>
        </td>
      </tr>
    </React.Fragment>
  ));

  if (ask.length === 0) {
    return (
      <div className="news-loading" />
    );
  } return (
    <div className="news-container">
      <table>
        <tbody>
          {renderAsk}
        </tbody>
      </table>
      <div className="news-index">
        {renderIndex}
      </div>
    </div>
  );
};

export default withNews(Ask);
