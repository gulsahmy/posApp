import { Button, Input, Modal, Form, message, Select } from "antd";
//import { Select } from 'antd';

const Add = ({
  isAddModalOpen,
  setIsAddModalOpen,
  categories,
  setCategories,
  products,
  setProducts
}) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    try {
      fetch(process.env.REACT_APP_SERVER_URL + "/api/products/add-product", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      message.success("Ürün başarıyla eklendi.");
      form.resetFields();
      setProducts([
        ...products,
        {
          ...values,
          _id: Math.random(),
          price: Number(values.price),
        },
      ]);
      setIsAddModalOpen(false)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      title="Yeni Ürün Ekle"
      open={isAddModalOpen}
      onCancel={() => setIsAddModalOpen(false)}
      footer={false}
    >
      <Form layout="vertical" onFinish={onFinish} form={form}>
        <Form.Item
          name="title"
          label="Ürün Adı:"
          rules={[{ required: true, message: "Ürün Adı alanı zorunludur." }]}
        >
          <Input placeholder="Ürün adı giriniz" />
        </Form.Item>
        <Form.Item
          name="img"
          label="Ürün Görseli:"
          rules={[
            { required: true, message: "Ürün görseli alanı zorunludur." },
          ]}
        >
          <Input placeholder="Ürün görseli ekleyiniz" />
        </Form.Item>
        <Form.Item
          name="price"
          label="Ürün Fiyatı:"
          rules={[{ required: true, message: "Ürün fiyatı alanı zorunludur." }]}
        >
          <Input placeholder="Ürün fiyatı giriniz" />
        </Form.Item>
        <Form.Item
          name="category"
          label="Kategori Seç"
          rules={[{ required: true, message: "Kategori alanı boş geçilemez." }]}
        >
          <Select
            showSearch
            placeholder="Search to Select"
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.title ?? "")
                .toLowerCase()
                .localeCompare((optionB?.title ?? "").toLowerCase())
            }
            options={categories}
          />
        </Form.Item>
        <Form.Item className="flex justify-end mb-0">
          <Button type="primary" htmlType="submit">
            Oluştur
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Add;
