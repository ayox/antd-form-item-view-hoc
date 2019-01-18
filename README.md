# antd-form-item-view-hoc
A very simple HOC for AntD Form.Item to enable displaying only text without the component. It is useful when you want a view mode of your form.

## Usage 

Here is an example of using this HOC with AntD Form.Item 

```javascript
import React from "react";
import ReactDOM from "react-dom";
import withFormItemView from "form-item-view-hoc";
import { Form, Input, Switch } from "antd";

const CustomFormItem = withFormItemView(Form.Item);

function MyForm(props) {
  const { getFieldDecorator } = props.form;
  return (
    <Form>
      <Form.Item label="Read-Only">
        {getFieldDecorator("switch", { valuePropName: "checked" })(<Switch />)}
      </Form.Item>

      <CustomFormItem
        label="Name"
        readOnly={props.form.getFieldValue("switch")}
      >
        {getFieldDecorator("name")(<Input placeholder="Name" />)}
      </CustomFormItem>
    </Form>
  );
}

export default Form.create()(MyForm);

```

## Demo 
You can check this codesandbox [here](https://codesandbox.io/s/l7lp20zxkl)


## Props 

You need to pass these props 


| Prop        | Type           |Desc  |
| ------------- |:-------------:| -----:|
| readOnly    | bool | a value to make the form item read-only |
|display    | string      |   it's optional and it can overrides the value of form item and display it.  |
