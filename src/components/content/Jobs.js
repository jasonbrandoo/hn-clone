import React from 'react';
import './Content.css';

const Jobs = (props) => {
  const { jobs } = props;
  const renderNews = jobs.map(item => (
    <React.Fragment key={item.id}>
      <tr>
        <td>
          <div className="news-header">
            <p>
              <a className="news-title" href={item.url}>
                {item.title}
              </a>
              <span>
                <small>
                  <a href={item.url} className="news-url">
                    {item.type}
                  </a>
                </small>
              </span>
            </p>
          </div>
          <div className="news-body">
            <small>
              {item.time_ago}
            </small>
          </div>
        </td>
      </tr>
    </React.Fragment>
  ));

  if (jobs.length === 0) {
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
    </div>
  );
};

export default Jobs;
