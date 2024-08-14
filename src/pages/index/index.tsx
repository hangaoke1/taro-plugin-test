import Taro from '@tarojs/taro'
import { Component, PropsWithChildren } from 'react'
import { View, Text, Navigator } from '@tarojs/components'
import './index.less'

const myPluginInterface = Taro.requirePlugin('myPlugin')

export default class Index extends Component<PropsWithChildren> {
  componentDidMount () {
    myPluginInterface.sayHello()
    const answer = myPluginInterface.answer
    console.log('answer: ', answer)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>小程序插件开发测试!</Text>
        <Navigator url='plugin://myPlugin/list'>
          Go to pages/list!
        </Navigator>
        <Navigator url='plugin://myPlugin/chat'>
          Go to pages/chat!
        </Navigator>
      </View>
    )
  }
}
