import React from "react"

export const navigationContext = React.createContext()

/*
export class NavigationProvider extends React.Component {
  state = {
    navigation: [],
  }

  componentDidMount() {
    this.setState({
      navigation: this.props.data.allMarkdownRemark.distinct,
    })
  }
  render() {
    const { children, data } = this.props
    return (
      <navigationContext.Provider
        value={{
          ...this.state,
        }}
      >
        {children}
      </navigationContext.Provider>
    )
  }
}
export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          distinct(field: frontmatter___category)
        }
      }
    `}
    render={data => <NavigationProvider data={data} {...props} />}
  />
)
*/
