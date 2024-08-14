import '@/tailwind.less'
import Button from "@/components/Button"
import { View } from "@tarojs/components"



type Props = {}

const chat = (props: Props) => {
  return (
    <View className='text-red-500'>
      <View>Chat</View>
      <Button></Button>
    </View>
  )
}

export default chat