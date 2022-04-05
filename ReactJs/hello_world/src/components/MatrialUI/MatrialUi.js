import React from "react";
import Button from "@material-ui/core/Button";
import ImageAspectRatio from "@material-ui/icons/ImageAspectRatio";
import InboxSharp from "@material-ui/icons/InboxSharp";
import Mail from "@material-ui/icons/Mail";
import PhoneCallback from "@material-ui/icons/PhoneCallback";
import WorkOffOutlined from "@material-ui/icons/WorkOffOutlined";

function MaterialDesign() {
  return (
    <div className="container">
      <h3>Matrial UI Demo</h3>
      <div className="row">
        <Button
          variant="contained"
          color="primary"
          endIcon={<ImageAspectRatio color="secondary" />}
        >
          Primary
        </Button>

        <br />

        <Button variant="outlined" color="primary" endIcon={<InboxSharp />}>
          Inbox
        </Button>
        <br />

        <Button variant="outlined" endIcon={<Mail />}>
          Mail
        </Button>
        <br />

        <Button
          variant="outlined"
          color="secondary"
          endIcon={<PhoneCallback />}
        >
          PhoneCallback
        </Button>
        <br />

        <Button variant="outlined" color="secondary" endIcon={<WorkOffOutlined />}>
        WorkOffOutlined
        </Button>
      </div>
    </div>
  );
}

export default MaterialDesign;
