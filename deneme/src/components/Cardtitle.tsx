import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";

import "../css/card.css";
import { useEffect, useState } from "react";
import axios from "axios";

import Dialog2 from "./Dialog2";

type deneme = {
  postNo: number;
  title: string;
  postId: number;
};

const Cardtitle = ({ postNo, title }: deneme) => {
  const [comments, setComments] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const data = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/comments?postId=${postNo}`
        );
        setComments(response.data);
      } catch (error) {
        console.error("hata");
      }
    };
    data();
  }, []);
  // (comments);

  const handleClick = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Card className="card">
      <CardActionArea>
        <CardContent>
          <Stack className="card-stack">
            <Typography className="id" fontWeight="bold">
              Post no.{postNo}
            </Typography>
            <Stack className="imgStack" direction={"row"}>
              <CardMedia
                className="cardImg"
                height="70"
                image="../../public/mor.jpg"
                component="img"
              />
              <Typography className="card-title">{title}</Typography>
            </Stack>
            <Button
              onClick={handleClick}
              className="cardBtn"
              variant="contained"
              color="secondary"
            >
              Yorumları Göster
            </Button>
            {isOpen && (
              <Dialog2
                postNo={postNo}
                comments={comments}
                isOpen={isOpen}
                onClose={handleClose}
              ></Dialog2>
            )}
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Cardtitle;
