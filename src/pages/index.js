import React from 'react'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Header from '../components/Header'
import Nav from '../components/Nav'
import WhatIsCC from '../components/sections/WhatIsCC';
import CourseContents from '../components/sections/CourseContents';
import Professors from '../components/sections/Professors';
import WhereIsCC from '../components/sections/WhereIsCC';
import Signin from '../components/sections/Signin';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <div>
        <Helmet title={this.props.data.site.siteMetadata.title} />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="what" className="main">
            <WhatIsCC />
          </section>

          <section id="contents" className="main special">
            <CourseContents />
          </section>

          <section id="professors" className="main">
            <Professors />
          </section>

          <section id="where" className="main">
            <WhereIsCC />
          </section>

          <section id="signin" className="main special">
            <Signin />
          </section>

        </div>

      </div>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object,
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
