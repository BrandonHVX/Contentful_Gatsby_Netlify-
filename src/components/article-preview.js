import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ article }) => (



  <div class="card">
        <div class="card-header">
        <Img alt="" fluid={article.heroImage.fluid} />
        </div>
        <div class="card-body">
          <span class="tag ">Technology</span>
          <h4>
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </h4>
          <p>
          <div
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
          </p>
          <div class="user">
          {article.tags &&
      article.tags.map(tag => (
        <p className={styles.tag} key={tag}>
          {tag}
        </p>
      ))}
          </div></div>
        </div>
        
)
