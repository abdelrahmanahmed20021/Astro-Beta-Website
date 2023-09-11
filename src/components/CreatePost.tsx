import "sweetalert2/src/sweetalert2.scss";

import React, { useState } from "react";

import { MdTitle } from "react-icons/md";
import Swal from "sweetalert2/dist/sweetalert2.js";

import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
  useDisclosure,
} from "@nextui-org/react";

import { createPostApi } from "../utils/createPost";

export default function CreatePost() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [loader, setLoader] = useState(false);

  const message = (
    title: string,
    body: string,
    type: string,
    position: string
  ) => {
    Swal.fire({
      title: title,
      text: body,
      icon: type,
      type: type,
      position: position,
      showConfirmButton: false,
      timer: 1200,
    });
  };

  const createPost = async () => {
    if (!description) {
      message("Warning !", "Please Enter Description", "warning", "top-left");
      return;
    }
    if (!title) {
      message("Warning !", "Please Enter Title", "warning", "top-left");
      return;
    }
    setLoader(true);
    const res = await createPostApi(title, description).then((res) => {
      setDescription("");
      setTitle("");
      setLoader(false);
      message("Post created successfully", "Done", "success", "top-left");
      return res;
    });

    console.log(res);
  };
  return (
    <>
      <Button onPress={onOpen} className="bg-gray-900 text-white">
        Create Post
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="3xl"
        placement={"center"}
        isDismissable={false}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Create Post
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  value={title}
                  onValueChange={setTitle}
                  endContent={
                    <MdTitle className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Title"
                  placeholder="Enter post title"
                  variant="bordered"
                  color="primary"
                />
                <Textarea
                  variant="flat"
                  label="Description"
                  labelPlacement="outside"
                  placeholder="Enter your description"
                  value={description}
                  onValueChange={setDescription}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button isLoading={loader} onClick={createPost} color="primary">
                  Create
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
