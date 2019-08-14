import React from 'react';
import withPage from '../../hoc/withPage';

const Show = props => {
  const { show, showPage, showIndex } = props;
  const renderIndex = showPage.map(number => (
    <React.Fragment key={number}>
      <button onClick={() => showIndex(number)} type="submit">
        {number}
      </button>
    </React.Fragment>
  ));
  const renderNews = show.map(item => (
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

  if (show.length === 0) {
    return <div className="news-loading" />;
  }
  return (
    <div className="news-container">
      <table>
        <tbody>{renderNews}</tbody>
      </table>
      <div className="news-index">{renderIndex}</div>
    </div>
  );
};

export default withPage(Show);
