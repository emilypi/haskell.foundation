import React from 'react'
import Grid from '@material-ui/core/Grid'
import Layout from '../components/Layout'
import Page from '../components/Page'
import AffiliatesPageQuery from '../queries/AffiliatesPageQuery'
import Markdown from '@input-output-hk/front-end-core-components/components/Markdown'

export default () => (
  <AffiliatesPageQuery
    render={(content) => (
      <Layout>
        <Page title={content.about_page_title}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Markdown source={content.about_page_content} />
            </Grid>
          </Grid>
        </Page>
      </Layout>
    )}
  />
)
