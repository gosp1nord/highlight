export function WithEstimateViews(WrappedComponent) {
  const Component = (item) => {
    if (item.views < 100) {
      return (
        <New>
          <WrappedComponent {...item}/>
        </New>
      )
    } else if (item.views > 1000) {
      return (
        <Popular>
          <WrappedComponent {...item}/>
        </Popular>
      )
    } else {
      return (
        <WrappedComponent {...item}/>
      )
    }
  }
  return Component
}

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
