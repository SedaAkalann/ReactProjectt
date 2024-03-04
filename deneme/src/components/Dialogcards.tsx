import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import "../css/Dialog.css";

type card = {
  commentEmail: string;
  commentBody: string;
};

const Dialogcards = ({ commentEmail, commentBody }: card) => {
  return (
    <div>
      <Card className="cardContainer">
        <CardContent className="card-content">
          <Typography>
            <strong>Yazan:</strong>
            {commentEmail}
          </Typography>
          <Typography fontSize={20} textAlign="center" variant="h5">
            Yorum:
          </Typography>
          <Typography>{commentBody}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dialogcards;
