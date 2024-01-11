import * as React from 'react'

const AboutTemplate = (contentfulPage) => {
  return (
    <main>
      <div style={{marginTop: '100px'}}>
      <h2>{contentfulPage.title}</h2>
      </div>
    </main>
  )
}

export default AboutTemplate;
