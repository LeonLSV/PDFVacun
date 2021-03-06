import React, { useState, useRef, useCallback, useEffect } from "react";
import MyDocument from "../Document";
import { Input, Button, Form, Upload, Select, Row } from "antd";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import * as QrCode from "qrcode.react";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

const Home = () => {
  const [status, finished] = useState(false);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [id_64, setID] = useState("");
  const [test_64, setTest] = useState("");
  const [qr_64, setQr_64] = useState("");
  const imageRef = useRef(null);

  const [qr, setQr] = useState({
    nombre: "",
  });
  const onChangeURL = (event) => {
    setQr(event.target.value);
  };

  const { Option } = Select;

  function handleChangeGener(value) {}
  function handleChangeTest(value) {}

  useCallback(() => {
    console.log(imageRef);
  }, [imageRef]);

  useEffect(() => {
    let foo = prompt("Ingrese contraseña");
    console.log(foo);
  }, []);
  const loadData = () => {
    if (status && data && id_64) {
      return (
        <div>
          <PDFViewer style={{ width: "100%", height: 450 }}>
            <MyDocument
              date={data.date}
              pacient={data.pacient}
              folio={data.folio}
              age={data.age}
              birth_date={data.birth_date}
              gender={data.gender}
              test_result={data.test_result}
              observations={data.observations}
              id_64={id_64}
              test_64={test_64}
              qr_64={qr_64}
            />
          </PDFViewer>
          <PDFDownloadLink
            style={{ fontSize: 15, fontWeight: "bold " }}
            document={
              <MyDocument
                date={data.date}
                pacient={data.pacient}
                folio={data.folio}
                age={data.age}
                birth_date={data.birth_date}
                gender={data.gender}
                test_result={data.test_result}
                observations={data.observations}
                id_64={id_64}
                test_64={test_64}
                qr_64={qr_64}
              />
            }
            fileName="somename.pdf">
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Download now!"
            }
          </PDFDownloadLink>
        </div>
      );
    }
  };

  // const getFileData = ({ blob, url, loading, error }) => {};

  const onFinish = (values) => {
    getImage();
    setData({
      date: values.date,
      pacient: values.pacient,
      folio: values.folio,
      age: values.age,
      birth_date: values.birth_date,
      gender: values.gender,
      test_result: values.test_result,
      observations: values.observations,
    });
    finished(true);
    console.log("Success:", data);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);

      let url = URL.createObjectURL(info.file.originFileObj);
      console.log(url);
      getBase64(info.file.originFileObj, (id_64) => {
        setID(id_64);
        setLoading(false);
      });
    }
  };

  const handleTestChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      let url = URL.createObjectURL(info.file.originFileObj);
      console.log(url);
      getBase64(info.file.originFileObj, (test_64) => {
        setTest(test_64);
        setLoading(false);
      });
    }
  };

  const getImage = () => {
    let canvas = document.getElementById("qrCode");

    if (canvas !== null) {
      let dataURL = canvas.toDataURL();
      setQr_64(dataURL);
    }
  };
  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
          Completa los campos del paciente:
        </h1>
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            margin: "0 auto",
          }}
          className="pdf-form"
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}>
          <Form.Item
            style={{ fontWeight: "bold", width: "50%", margin: "20px auto" }}
            label="Fecha de Prueba"
            name="date"
            rules={[{ required: true, message: "Agrega una fecha" }]}>
            <Input
              style={{ display: "block" }}
              placeholder="2021/02/30"
              type="datetime-local"
            />
          </Form.Item>
          <Form.Item
            style={{ fontWeight: "bold", width: "50%", margin: "20px auto" }}
            label="Nombre Completo del Paciente"
            name="pacient"
            rules={[{ required: true, message: "Agrega el nombre completo" }]}>
            <Input style={{ display: "block" }} placeholder="Nombre" />
          </Form.Item>
          <Form.Item
            style={{ fontWeight: "bold", width: "50%", margin: "20px auto" }}
            label="Número de Folio"
            name="folio"
            rules={[{ required: true, message: "Agrega el número de Folio" }]}>
            <Input defaultValue="00010" style={{ display: "block" }} />
          </Form.Item>
          <Form.Item
            style={{ fontWeight: "bold", width: "50%", margin: "20px auto" }}
            label="Fecha Nacimiento del Paciente"
            name="birth_date"
            rules={[
              { required: true, message: "Agrega la fecha de nacimiento" },
            ]}>
            <Input
              type="date"
              placeholder="Fecha de nacimiento"
              style={{ display: "block" }}
            />
          </Form.Item>
          <Form.Item
            style={{ fontWeight: "bold", width: "50%", margin: "20px auto" }}
            label="Email"
            name="mail"
            rules={[{ required: true, message: "Agrega el Email" }]}>
            <Input
              type="email"
              placeholder="Email"
              style={{ display: "block" }}
            />
          </Form.Item>
          <Form.Item
            style={{ fontWeight: "bold", width: "50%", margin: "20px auto" }}
            label="Edad"
            name="age"
            rules={[{ required: true, message: "Agrega la edad" }]}>
            <Input placeholder="Edad" style={{ display: "block" }} />
          </Form.Item>
          <Form.Item
            style={{ fontWeight: "bold", width: "50%", margin: "20px auto" }}
            label="Género"
            name="gender"
            rules={[{ required: true, message: "Selecciona el género" }]}>
            <Select
              style={{ width: "100%", display: "block" }}
              onChange={handleChangeGener}>
              <Option value="Male / Masculino">Male / Masculino</Option>
              <Option value="Famele / Femenimo">Famele / Femenimo</Option>
              <Option value="Other / Otro">Other / Otro</Option>
            </Select>
          </Form.Item>

          <Form.Item
            style={{ fontWeight: "bold", width: "50%", margin: "20px auto" }}
            label="Resultado prueba"
            name="test_result"
            rules={[{ required: true, message: "Agrega el resultado" }]}>
            <Select
              style={{ width: "100%", display: "block" }}
              onChange={handleChangeTest}>
              <Option value="POSITIVE / POSITIVO">POSITIVE / POSITIVO</Option>
              <Option value="NEGATIVE / NEGATIVO">NEGATIVE / NEGATIVO</Option>
            </Select>
          </Form.Item>

          <Form.Item
            style={{ fontWeight: "bold", width: "50%", margin: "20px auto" }}
            label="Observaciones"
            name="observations">
            <Input placeholder="Observaciones" style={{ display: "block" }} />
          </Form.Item>
          <Form.Item
            style={{ fontWeight: "bold", width: "50%", margin: "20px auto" }}
            label="URL carpeta"
            name="nombre"
            rules={[{ required: true, message: "Agrega la URL del paciente" }]}>
            <Input
              placeholder="URL del paciente"
              onChange={onChangeURL}
              style={{ display: "block" }}
              type="text"
              name="nombre"
            />
          </Form.Item>
          <Row
            style={{ width: "50%", margin: "0 auto" }}
            justify="center"
            align="middle">
            <Form.Item
              label="Cargar identificación"
              style={{
                fontWeight: "bold",
                width: "50%",
                margin: "20px auto",
                display: "block",
              }}>
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                beforeUpload={() => console.log("uploading...")}
                onChange={handleChange}>
                {id_64 ? (
                  <img src={id_64} alt="avatar" style={{ width: "100%" }} />
                ) : (
                  <div>
                    {loading ? <LoadingOutlined /> : <PlusOutlined />}
                    <div style={{ marginTop: 8 }}>Cargar</div>
                  </div>
                )}
              </Upload>
            </Form.Item>
            <Form.Item
              label="Cargar prueba"
              style={{
                fontWeight: "bold",
                width: "50%",
                margin: "20px auto",
                display: "block",
              }}>
              <Upload
                name="test"
                listType="picture-card"
                className="test-uploader"
                showUploadList={false}
                beforeUpload={() => console.log("uploading...")}
                onChange={handleTestChange}>
                {id_64 ? (
                  <img src={test_64} alt="test" style={{ width: "100%" }} />
                ) : (
                  <div>
                    {loading ? <LoadingOutlined /> : <PlusOutlined />}
                    <div style={{ marginTop: 8 }}>Cargar</div>
                  </div>
                )}
              </Upload>
            </Form.Item>
          </Row>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Generar Certificado
            </Button>
          </Form.Item>
          <div
            style={{ fontWeight: "bold", width: "50%", margin: "20px auto" }}>
            <QrCode
              value={qr}
              style={{
                fontWeight: "bold",
                width: "10%",
                height: "10%",
                margin: "20px auto",
              }}
              id="qrCode"
            />
          </div>
        </Form>
      </div>

      {loadData()}
    </div>
  );
};

export default Home;
