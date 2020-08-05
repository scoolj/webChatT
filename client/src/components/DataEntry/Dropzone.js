import React, { Component } from "react";
import Dropzone from "react-dropzone";
import { Button } from "rebass";
import { MdFileUpload } from "react-icons/md";
import Axios from "axios";
import moment from "moment";
class Dropzonez extends Component {
  state = {};

  onDrop = (files) => {
    console.log(files);

    //     if (this.props.user.userData && !this.props.user.userData.isAuth) {
    //       return alert('Please Log in first');
    //   }

    let formData = new FormData();

    const config = {
      header: { "content-type": "multipart/form-data" },
    };

    formData.append("file", files[0]);

    Axios.post("api/chat/uploadfiles", formData, config).then((response) => {
      if (response.data.success) {
        let chatMessage = response.data.url;
        let userId = this.props.user.userData._id;
        let userName = this.props.user.userData.name;
        let userImage = this.props.user.userData.image;
        let nowTime = moment();
        let type = "VideoOrImage";

        this.socket.emit("Input Chat Message", {
          chatMessage,
          userId,
          userName,
          userImage,
          nowTime,
          type,
        });
      }
    });
  };
  render() {
    return (
      <Dropzone onDrop={this.onDrop}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <Button>
                {" "}
                <MdFileUpload />
              </Button>
            </div>
          </section>
        )}
      </Dropzone>
    );
  }
}

export default Dropzonez;
