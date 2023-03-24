import React from "react";
import { createContext, useContext } from "react";
import { Button, Col, Form, Input, Row } from "antd";
import { useMemo } from "react";
import { Children } from "react";
const { TextArea } = Input;
const MyFormItemContext = createContext([]);
function toArr(str) {
  return Array.isArray(str) ? str : [str];
}
const MyFormItemGroup = ({ prefix, children }) => {
  const prefixPath = useContext(MyFormItemContext);
  const concatPath = useMemo(
    () => [...prefixPath, ...toArr(prefix)],
    [prefixPath, prefix]
  );
  return (
    <MyFormItemContext.Provider value={concatPath}>
      {children}
    </MyFormItemContext.Provider>
  );
};
const MyFormItem = ({ name, ...Children }) => {
  const prefixPath = useContext(MyFormItemContext);
  const concatName =
    name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return <Form.Item name={concatName} {...Children} />;
};
const Contact = () => {
  const onFinish = (value) => {
    console.log(value);
  };
  return (
    <div id="Contact" className="w-full py-[60px]">
      <div className="myContainer">
        <div className="flex-col justify-center items-center">
          <div className="flex-col text-center">
            <p className=" text-[50px] max-[790px]:text-[30px] font-bold dark:text-lightBlue_1  max-w-[400px] leading-tight m-auto">
              Get In Touch
            </p>
            <p className="text-[16px] text-darkBlue_2 dark:text-lightBlue_1 mb-[15px] max-w-[400px] m-auto">
              We would love to hear from you{" "}
            </p>
          </div>

          <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
            <MyFormItemGroup prefix={["user"]}>
              <MyFormItem name="Name" label="Name">
                <Input />
              </MyFormItem>
              <MyFormItemGroup prefix={["Email"]}>
                <Row gutter={[16, 24]}>
                  <Col className="gutter-row" xs={24} md={12}>
                    <MyFormItem name="email" label="email">
                      <Input />
                    </MyFormItem>
                  </Col>
                  <Col className="gutter-row" xs={24} md={12}>
                    <MyFormItem name="Subject" label="Subject">
                      <Input />
                    </MyFormItem>
                  </Col>
                </Row>
              </MyFormItemGroup>
              <MyFormItem name="Message" label="Maseege">
                <TextArea rows={6} />
              </MyFormItem>
            </MyFormItemGroup>

            <Button type="default" htmlType="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
