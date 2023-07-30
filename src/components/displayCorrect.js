import Video from './ComponentVideo';
import Article from './ComponentArticle';


function WithVideo() {
  const Component = (item) => {
    if (item.views < 100) {
      return (
        <New>
          <Video {...item}/>
        </New>
      )
    } else if (item.views > 1000) {
      return (
        <Popular>
          <Video {...item}/>
        </Popular>
      )
    } else {
      return (
        <Video {...item}/>
      )
    }
  }
  return Component
}
export const VideoManage = WithVideo()


function WithArticle() {
  const Component = (item) => {
    if (item.views < 100) {
      return (
        <New>
          <Article {...item}/>
        </New>
      )
    } else if (item.views > 1000) {
      return (
        <Popular>
          <Article {...item}/>
        </Popular>
      )
    } else {
      return (
        <Article {...item}/>
      )
    }
  }
  return Component
}
export const ArticleManage = WithArticle()

function New(props) {
    return (
      <div className="wrap-item wrap-item-new">
        <span className="label">New!</span>
        {props.children}
      </div>
    )
  };
  
  function Popular(props) {
    return (
      <div className="wrap-item wrap-item-popular">
        <span className="label">Popular!</span>
        {props.children}
      </div>
    )
  };
