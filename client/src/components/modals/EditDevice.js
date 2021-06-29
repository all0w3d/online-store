import React, { useContext, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { fetchAllDevices } from "../../http/deviceAPI";
import EditDeviceItem from "./EditDeviceItem";

const EditDevice = ({ show, onHide }) => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    fetchAllDevices().then((data) => {
      setDevices(data.rows);
    });
  }, []);

  return (
    <Modal show={show} onHide={onHide}  className='edit__modal'>
     <Modal.Header closeButton style={{position: 'absolute', right: '0', border: '0'}}></Modal.Header>
      {devices.map((i) => (
        <EditDeviceItem
          key={i.id}
          name={i.name}
          price={i.price}
          img={i.img}
          id={i.id}
        />
      ))}
      
    </Modal>
  );
};

export default EditDevice;
