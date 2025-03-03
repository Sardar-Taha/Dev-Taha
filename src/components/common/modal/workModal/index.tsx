import React, { useState } from "react";
import { Modal } from "antd";
import {
  ModalWrapper,
  OurWorkProjectButton,
  SwiperWrapper,
  WorkModalContainer,
} from "./element";
import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { OurWorkImgOne } from "assets";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCoverflow,
} from "swiper";
import "swiper/swiper-bundle.min.css";
import { Image } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);

const WorkModal = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalWrapper>
      <OurWorkProjectButton
        onClick={showModal}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 1 }}
      >
        View Project Image Gallery <BsArrowRight className="arrow-icon" />
      </OurWorkProjectButton>

      <AnimatePresence>
        {isModalOpen && (
          <Modal
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            centered
            width={"90vw"}
          >
            <WorkModalContainer
              style={{ overflow: "hidden" }}
              initial={{ scaleY: 0, minHeight: 0 }}
              animate={{ scaleY: 1, minHeight: "500px" }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              key={"container"}
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ y: 0, opacity: 0, transition: { duration: 0.4 } }}
              >
                <SwiperWrapper
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <Swiper
                    grabCursor={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    navigation={true}
                    pagination={true}
                    className="mySwiper"
                  >
                    {item?.images.map((x) => (
                      <SwiperSlide>
                        <Image fluid src={x} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </SwiperWrapper>
              </motion.div>
            </WorkModalContainer>
          </Modal>
        )}
      </AnimatePresence>
    </ModalWrapper>
  );
};

export default WorkModal;
