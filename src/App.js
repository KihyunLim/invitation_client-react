import React from 'react';
import Loading from './components/Loading';
import LoadingFail from './components/LoadingFail';
import Navbar from './components/Nabvar';
import Home from './components/Home';
import Main from './components/Main';
import BrideGroom from './components/BrideGroom';
import LoveStory from './components/LoveStory';
import WhenWhere from './components/WhenWhere';
import Gallery from './components/Gallery';
import Write from './components/Write';
// import Modal from './components/Modal';
import './App.css';
import axios from 'axios';
import * as Def from './common/def.js';

class App extends React.Component {
  state = {
    isLoading: true,
    isLoadingSuccess: false,
    invitation: undefined,
  };

  getInvitationData = async () => {
    await axios
      .get(
        'http://localhost:8080/admin/invitation/receiveInvitation.do?invSeq=1'
      )
      .then((res) => {
        this.setState(() => {
          return { isLoading: false };
        });

        if (res.data.resFlag) {
          console.log('success load data');

          this.setState(() => {
            return { isLoadingSuccess: true, invitation: res.data };
          });
        } else {
          throw new Error('resFlag false');
        }
      })
      .catch((res) => {
        console.log(res.message);

        this.setState(() => {
          return {
            isLoading: false,
            isLoadingSuccess: true,
            invitation: Def.replacementData,
          };
          // return { isLoading: false, invitation: Def.replacementData };
        });
      });

    console.log(this.state.invitation);
  };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState(() => {
    //     return { isLoading: false, isLoadingSuccess: true };
    //   });
    // }, 3000);
    this.getInvitationData();
  }

  render() {
    const { isLoading, isLoadingSuccess } = this.state;

    return isLoading ? (
      <Loading />
    ) : isLoadingSuccess ? (
      <>
        <Navbar />
        <Home
          invitation={this.state.invitation.resSyntheticInvitation.mainInfoVO}
        />
        <Main
          mainInfo={this.state.invitation.resSyntheticInvitation.mainInfoVO}
        />
        <BrideGroom
          mainInfo={this.state.invitation.resSyntheticInvitation.mainInfoVO}
        />
        <LoveStory
          loveStory={this.state.invitation.resSyntheticInvitation.loveStoryVO}
        />
        <WhenWhere
          whenWhere={this.state.invitation.resSyntheticInvitation.whenWhereVO}
        />
        <Gallery
          gallery={this.state.invitation.resSyntheticInvitation.galleryVO}
        />
        {/* sweetmessage 추후 개발 */}
        <Write
          userId={this.state.invitation.resSyntheticInvitation.invitationVO.id}
          invSeq={this.state.invitation.resSyntheticInvitation.invitationVO.seq}
        />
        {/* <Modal /> */}
      </>
    ) : (
      <LoadingFail />
    );
  }
}

export default App;
