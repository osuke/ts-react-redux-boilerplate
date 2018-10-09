import * as React from 'react'
import styled from 'styled-components'

interface IProps {
  name: string
  updateName (name: string): void
}

const Name = styled.div``

export default class Home extends React.Component<IProps> {
  componentDidMount () {
    this.props.updateName('hoge')
  }

  render () {
    return (
      <Name>{this.props.name}</Name>
    )
  }
}
