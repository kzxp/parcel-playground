import React from 'react'
import { ThemeProvider } from 'styled-components'
import Layout from './components/Layout'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import Grid from './playgrounds/Grid'

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={{}}>
        <Layout>
          <Header>Header thingy</Header>
          <Main>
            <Grid />
          </Main>
          <Footer>Footer thingy</Footer>
        </Layout>
      </ThemeProvider>
    )
  }
}

export default App
