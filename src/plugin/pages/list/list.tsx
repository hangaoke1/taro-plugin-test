import { Button, Input, View } from "@tarojs/components";
import Form, { useForm, Field } from "rc-field-form";

import '@/tailwind.less'

const IndexPage = () => {
  const [form] = useForm();

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      console.log(values);
    });
  }

  return (
    <View>
      <View className='text-red-500'>i am index page 234234234234</View>
      <Form component='View' form={form}>
        <Field name='username'>
          <Input placeholder='Username' />
        </Field>
        <Field name='password'>
          <Input placeholder='Password' />
        </Field>
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </View>
  );
};

export default IndexPage;
