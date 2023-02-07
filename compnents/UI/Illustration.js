import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import styles from "./Illustration.module.css";

function Illustration(props) {
  return (
    <Box
      sx={{
        padding: 2,
        border: 1,
        borderRadius: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          borderRadius: "100%",
          overflow: "hidden",
          border: 8,
          display: "flex",
          maxWidth: 600,
        }}
      >
        <Image
          className={styles.image}
          alt={props.alt}
          src={props.img}
          width={600}
          height={600}
        ></Image>
      </Box>
    </Box>
  );
}

export default Illustration;
