import { useSWRMutation } from "@/api/useFetch";
import { Button, Form, Input, Modal } from "antd";
import { useState } from "react";

export const BlogUpload = () => {
  const [open, setOpen] = useState(false);

  const { data, error, isMutating, trigger } =
    useSWRMutation("/excerpt/upload");

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = (e: React.MouseEvent<HTMLElement>) => {
    trigger();
  };

  const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    setOpen(false);
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  type FieldType = {
    bookName?: string;
    content?: string;
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Upload
      </Button>
      <Modal
        title="Upload Excerpt"
        open={open}
        confirmLoading={isMutating}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="upload excerpt"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="bookName"
            name="bookName"
            rules={[{ required: true, message: "Please input your bookName!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="content"
            name="content"
            rules={[{ required: true, message: "Please input your content!" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
