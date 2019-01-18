import React, {Fragment} from 'react'

const withFormItemView = WrappedComponent => props => {
  return (
    <WrappedComponent {...props}>
      {React.Children.map(props.children, child => {
        if (props.readOnly === true)
          return <span>{child.props.value || props.display}</span>
        return <Fragment>{child}</Fragment>
      })}
    </WrappedComponent>
  )
}

export default withFormItemView
