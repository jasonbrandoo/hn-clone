import React from 'react';
import { NavLink } from 'react-router-dom';
import withPage from '../../hoc/withPage';

const Ask = props => {
  const { ask, askPage, askIndex } = props;
  const renderIndex = askPage.map(number => (
    <React.Fragment key={number}>
      <button onClick={() => askIndex(number)} type="submit">
        {number}
      </button>
    </React.Fragment>
  ));
  const renderAsk = ask.map(item => (
    <React.Fragment key={item.id}>
      <tr>
        <td>
          <div className="ask-header">
            <p>
              <NavLink to={`/ask/${item.id}`}>{item.title}</NavLink>
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
    return <div className="news-loading" />;
  }
  return (
    <div className="news-container">
      <table>
        <tbody>{renderAsk}</tbody>
      </table>
      <div className="news-index">{renderIndex}</div>
    </div>
  );
};

export default withPage(Ask);
