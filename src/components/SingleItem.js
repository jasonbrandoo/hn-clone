import React from 'react';
import './News.css';

const Newest = (props) => {
  const { item } = props;
  console.log(item);
  const renderItem = item.map((data) => {
    const listComment = data.comments.map(comment => (
      <React.Fragment key={comment.id}>
        <div className="comment-container">
          <p className="comment-info">
            {comment.user}
            {' '}
            {comment.time_ago}
          </p>
          <p className="comment-body" dangerouslySetInnerHTML={{ __html: comment.content }} />
        </div>
      </React.Fragment>
    ));
    return (
      <React.Fragment key={data.id}>
        <p className="item-body">{data.title}</p>
        <p className="item-info">
          {data.points}
          {' '}
          points
          {' '}
          {data.user}
          {' '}
          {data.time_ago}
        </p>
        <p className="item-body" dangerouslySetInnerHTML={{ __html: data.content }} />
        {listComment}
      </React.Fragment>
    );
  });

  if (item.length === 0) {
    return (
      <div className="news-loading" />
    );
  } return (
    <div className="news-container">
      {renderItem}
    </div>
  );
};

export default Newest;
