import React from 'react';
import withNews from '../hoc/withNews';
import './News.css';

const Newest = (props) => {
  const { news, newsPage, newestIndex } = props;
  const renderIndex = newsPage.map(number => (
    <button onClick={() => newestIndex(number)} type="submit">{number}</button>
  ));
  const renderNews = news.map((item, index) => (
    <React.Fragment key={item.id}>
      <tr>
        <th>
          <div className="news-number">
            {index += 1}
          </div>
        </th>
        <td>
          <div className="news-header">
            <p>
              <a className="news-title" href={item.url}>
                {item.title}
              </a>
              <span>
                <small>
                  <a href={item.url} className="news-url">
                    {item.domain}
                  </a>
                </small>
              </span>
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

  if (news.length === 0) {
    return (
      <div className="news-loading" />
    );
  } return (
    <div className="news-container">
      <table>
        <tbody>
          {renderNews}
        </tbody>
      </table>
      <div className="newest-index">
        {renderIndex}
      </div>
    </div>
  );
};

export default withNews(Newest);
