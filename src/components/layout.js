import React from 'react'

class Layout extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          height: '100%',
        }}
      >
        {this.props.children}
      </div>
    )
  }
}

export default Layout
