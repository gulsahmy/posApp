import { Form, Input, Modal, Select, Button, Card } from "antd";

const CreateBill = ({ isModalOpen, setIsModalOpen }) => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Modal
      title="Fatura Oluştur"
      open={isModalOpen}
      footer={false}
      onCancel={() => setIsModalOpen(false)}
      
    >
      <Form layout={"vertical"} onFinish={onFinish}>
        <Form.Item label="Müşteri Adı" name={"customerName"} rules={[{ required: true }]}>
          <Input placeholder="Müşteri Adı Giriniz" />
        </Form.Item>
        <Form.Item label="Tel No" name={"phoneNumber"} rules={[{ required: true }]}>
          <Input placeholder="Telefon No Giriniz" maxLength={11}/>
        </Form.Item>
        <Form.Item label="Ödeme Yöntemi" name={"paymentMode"} rules={[{ required: true }]}>
          <Select placeholder="Ödeme Yöntemi Seçiniz">
            <Select.Option value="Nakit">Nakit</Select.Option>
            <Select.Option value="Kredi Kartı">Kredi Kartı</Select.Option>
          </Select>
        </Form.Item>

        <Card>
          <div className="flex justify-between">
            <span>Ara Toplam</span>
            <span>549.00₺</span>
          </div>
          <div className="flex justify-between my-2">
            <span>KDV Toplam %8</span>
            <span className="text-red-700">+43.92₺</span>
          </div>
          <div className="flex justify-between">
            <b>Toplam</b>
            <b>592.92₺</b>
          </div>
          <div className="flex justify-end">
            <Button
              className="mt-4"
              size="large"
              type="primary"
              onClick={() => setIsModalOpen(true)}
            >
              Sipariş Oluştur
            </Button>
          </div>
        </Card>
      </Form>
    </Modal>
  );
};

export default CreateBill;
