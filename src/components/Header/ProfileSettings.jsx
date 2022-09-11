import React from "react";
import { Box, Button, Link, Stack } from "@mui/material";
import { BsGlobe } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { flexCenter } from "../../Themes/commonStyles";

const ProfileSettings = () => {
  return (
    <Box sx={flexCenter}>
      <Link href="#">Become A Host</Link>

      <Stack>
        <Button>
          <BsGlobe size={20} />
        </Button>
        <Button sx={{ borderRadius: 10, border: "1px solif #ddd" }}>
          <Stack>
            <AiOutlineMenu size={20} />
            <FaRegUserCircle size={20} />
          </Stack>
        </Button>
      </Stack>
    </Box>
  );
};

export default ProfileSettings;
