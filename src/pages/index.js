import React from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'
import Hero from '../components/hero'
import Education from '../components/education'
import Gallery from '../components/gallery'
import Films from '../components/films'
import About from '../components/about'
import Contact from '../components/contact'
import Layout from '../components/layout'

import WaveRight from '../images/wave_right.png'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
 

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title={siteTitle} />
        <Hero/>
        <About />
 <Education />

 <section class="page-section section-bg blog" id="blog" >
 <div className="container">
      <div class=" section-heading mt-5 " data-wow-delay="0ms" data-wow-duration="1000ms" >
					<h4 class="mrb-15 text-gray "> Recent News</h4>
          <hr className="divider mb-4" />
				
         
					<p>Recent news on projects, special guests and upcoming events.</p>
          </div>
				</div>
      <div className="container-cards">
    
    
         {posts.map(({ node }) => {
           return (
             
               <ArticlePreview article={node} />
            
           )
         })}
  
</div>

    </section>
         <Gallery />
         
<Contact />
  
</div>
        
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
