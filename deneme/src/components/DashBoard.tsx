import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../css/dashboard.css";
import axios from "axios";
import Cardtitle from "./Cardtitle";
import { useNavigate } from "react-router-dom";
// import { green } from "@mui/material/colors";

type Objectt = {
  userId: number;
  id: number;
  title: string;
  body: string;
  postId: number;
};

const DashBoard = () => {
  const [posts, setPosts] = useState<Objectt[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
      } catch (error) {
        console.log(error, "error");
      }
    };
    data();
  }, []);
  const handleClick = () => {
    navigate("/");
  };
  return (
    <Box className="dash-wrapper">
      <Box className="header-top">
        <img
          style={{ margin: 10 }}
          height={50}
          width={50}
          src="../../public/goggle.jpg"
          alt=""
        />

        <Button
          onClick={handleClick}
          className="dash-btn"
          variant="contained"
          color="secondary"
          sx={{ padding: "5px 35px" }}
        >
          Çıkış
        </Button>
      </Box>
      <Box className="title-wrapper">
        <Typography component="span" className="title" variant="h4">
          Dashboard
        </Typography>
      </Box>
      <Stack direction="row" spacing={6} className="content-wrapper">
        <Stack className="content-left">
          <Stack alignItems="center">
            <Typography marginBottom={3} fontWeight="bold">
              Toplam Post Sayısı
            </Typography>
            <Typography className="circle">{posts.length}</Typography>
          </Stack>

          <Stack alignItems="center">
            <Typography marginBottom={4} fontWeight="bold">
              En çok post atan kullanıcı id:
            </Typography>
            <Stack
              alignItems="center"
              direction={"row"}
              justifyContent="center"
              spacing={3}
            >
              <img
                height={80}
                width={80}
                src="../../public/yeşilok.jpg"
                alt=""
              />
              <Typography
                color="green"
                fontWeight="bold"
                fontSize={50}
                className="imgnumber"
              >
                12
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Box className="shadow"></Box>

        <Stack direction="row" className="card-wrapper">
          {posts.map((post) => (
            <Cardtitle
              key={post.id}
              postNo={post.id}
              title={post.title}
              postId={post.userId}
            />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default DashBoard;
