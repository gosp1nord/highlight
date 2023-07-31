import React, { useState } from 'react';
import { WithEstimateViews } from './displayCorrect';
import Video from './ComponentVideo';
import Article from './ComponentArticle';


function List(props) {
  let EstimateViews;
  return props.list.map(item => {
    switch (item.type) {
      case 'video':
        EstimateViews = WithEstimateViews(Video)
        return (
          <EstimateViews {...item} />
        );

      case 'article':
        EstimateViews = WithEstimateViews(Article)
        return (
          <EstimateViews {...item} />
        );
    }
  });
};

export default function AppArticles() {
  const [list, setList] = useState([
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      views: 50
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      views: 12
    },
    {
      type: 'article',
      title: 'Невероятные события в неизвестном поселке...',
      views: 175
    },
    {
      type: 'article',
      title: 'Секретные данные были раскрыты!',
      views: 1532
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      views: 4253
    },
    {
      type: 'article',
      title: 'Кот Бегемот обладает невероятной...',
      views: 12,
    },
  ]);

  return (
    <List list={list} />
  );
}
