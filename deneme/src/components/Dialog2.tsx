import { Dialog, DialogTitle, IconButton, Stack } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "../css/Dialog.css";
import Dialogcards from "./Dialogcards";
type obj = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
type dialog = {
  postNo: number;
  comments: Array<obj>;
  isOpen: boolean;
  onClose: () => void;
};

const Dialog2 = ({ postNo, comments, isOpen, onClose }: dialog) => {
  const handleClose = () => {
    onClose();
  };
  return (
    <div>
      <Dialog
        component="div"
        fullWidth
        maxWidth="lg"
        className="dialogContainer custom-dialog"
        open={isOpen}
      >
        <Stack className="dialog-stack">
          {" "}
          <IconButton className="iconbtn" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          <DialogTitle
            marginBottom={3}
            textAlign="center"
            className="dialogTitle"
          >
            Post No:{postNo}'in Yorumları{" "}
          </DialogTitle>
        </Stack>
        {/* <IconButton className="iconbtn" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        <DialogTitle
          marginBottom={3}
          textAlign="center"
          className="dialogTitle"
        >
          Post No:{postNo}'in Yorumları{" "}
        </DialogTitle> */}

        <Stack className="stack-card" flexWrap="wrap" direction={"row"}>
          {comments.map((comment, index) => (
            <Dialogcards
              key={index}
              commentEmail={comment.email}
              commentBody={comment.body}
            />
          ))}
        </Stack>
      </Dialog>
    </div>
  );
};

export default Dialog2;
