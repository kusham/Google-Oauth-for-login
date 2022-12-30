import React from "react";
import { Modal, useMantineTheme } from "@mantine/core";
import Form from "./Form";

const FormModal = ({ openModal, setOpenModal }) => {
  const theme = useMantineTheme();
  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      //   overflow="inside"
      transition="scale"
      transitionDuration={1600}
      transitionTimingFunction="ease"
      overlayOpacity={0.55}
      overlayBlur={3}
      size="45%"
      opened={openModal.signIn || openModal.signUp}
      onClose={() => {
        setOpenModal({ signUp: false, signIn: false });
        // setRender((prev) => !prev);
      }}
    >
      <div style={{ height: openModal.signUp ? "480px": "450px"  }}>
        <Form openModal={openModal}/>
      </div>
    </Modal>
  );
};

export default FormModal;
