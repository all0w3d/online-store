import React, { useContext, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { fetchDevices } from "../../http/deviceAPI";
import EditDeviceItem from "./EditDeviceItem";

const EditDevice = ({ show, onHide }) => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    fetchDevices().then((data) => {
      setDevices(data.rows);
    });
  }, []);

  return (
    <Modal show={show} onHide={onHide} centered>

      {devices.map((i) => (
        <EditDeviceItem key={i.id} name={i.name} price={i.price} img={i.img}/>
      ))}
    </Modal>
  );
};

export default EditDevice;
