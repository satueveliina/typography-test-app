import * as React from 'react'

import styled from '@emotion/styled'

import Container from '../../components/Container'
import Page from '../../components/Page'

const H1 = styled.h1`
  padding-bottom: 2rem;
`

const IndexPage = () => (
  <Page>
    <Container>
      <main>
        <section>
          <H1>Thank you</H1>
          <p>
            You made it to the end. There are no more pictures. Thank you for helping me (and science)!
            <br />
            <br />- Satu
          </p>
        </section>
      </main>
    </Container>
  </Page>
)

export default IndexPage
