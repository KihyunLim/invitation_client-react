import React from "react";
import Loading from "./components/Loading";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    invitation: undefined,
  };

  getInvitationData = async () => {
    let data = undefined;

    await axios
      .get(
        "http://localhost:8980/admin/invitation/receiveInvitation.do?invSeq=6"
      )
      .then((res) => {
        if (res.data.resFlag) {
          data = res.data;
        } else {
          // 에러 컴포넌트로 대체 해야하나??
        }
      })
      .catch((res) => {
        // 에러 컴포넌트로 대체 해야하나??
        console.log("fail");
        console.log(res);
      });

    console.log(data);
  };

  componentDidMount() {
    this.getInvitationData();
  }

  render() {
    const { isLoading } = this.state;

    return isLoading ? <Loading /> : <div>isLoading is false</div>;
  }
}

export default App;
