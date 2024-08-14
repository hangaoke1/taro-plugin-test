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
        <Text className='text-red-500'>Hello world!</Text>
        <View className='w-[370px] bg-red-500 h-4'></View>
        <View className='w-[370px] bg-blue-500 h-[16px]'></View>
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
