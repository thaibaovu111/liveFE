import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Cookies from "js-cookie";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import setting from "../controllers/setting";
import { handleResponse } from "../utils/handleError";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
export default class Setting extends Component {
  constructor(props) {
    super(props);
    this.handleSetting = this.handleSetting.bind(this);
    this.onChangeAPIport = this.onChangeAPIport.bind(this);
    this.onChangeDomain = this.onChangeDomain.bind(this);
    this.onChangeDomainLive = this.onChangeDomainLive.bind(this);
    this.onChangeLivePort = this.onChangeLivePort.bind(this);
    this.onChangeTypeVideo = this.onChangeTypeVideo.bind(this);
    this.onChangeExtraKeyStream0 = this.onChangeExtraKeyStream0.bind(this);
    this.onChangeExtraKeyStream1 = this.onChangeExtraKeyStream1.bind(this);
    this.onChangeExtraKeyStream2 = this.onChangeExtraKeyStream2.bind(this);

    this.state = {
      value: Cookies.get("streamKey"),
      copied: false,
      DomainName: "",
      APIport: "",
      DomainLive: "",
      LivePort: "",
      TypeVideo: "",
      ExtraKeyStream0: "",
      ExtraKeyStream1: "",
      ExtraKeyStream2: "",
      loading: false,
    };
  }
  onChangeDomain(e) {
    this.setState({
      DomainName: e.target.value,
    });
  }

  onChangeAPIport(e) {
    this.setState({
      APIport: e.target.value,
    });
  }

  onChangeDomainLive(e) {
    this.setState({
      DomainLive: e.target.value,
    });
  }

  onChangeLivePort(e) {
    this.setState({
      LivePort: e.target.value,
    });
  }
  onChangeTypeVideo(e) {
    this.setState({
      TypeVideo: e.target.value,
    });
  }

  onChangeExtraKeyStream0(e) {
    this.setState({
      ExtraKeyStream0: e.target.value,
    });
  }

  onChangeExtraKeyStream1(e) {
    this.setState({
      ExtraKeyStream1: e.target.value,
    });
  }

  onChangeExtraKeyStream2(e) {
    this.setState({
      ExtraKeyStream2: e.target.value,
    });
  }

  handleSetting(e) {
    e.preventDefault();
    this.form.validateAll();
    if (this.checkBtn.context._errors.length === 0) {
      const data = {
        DomainName: this.state.DomainName,
        APIport: this.state.APIport,
        DomainLive: this.state.DomainLive,
        LivePort: this.state.LivePort,
        TypeVideo: this.state.TypeVideo,
        MainKeyStream: this.state.ExtraKeyStream0,
        ExtraKeyStream1: this.state.ExtraKeyStream1,
        ExtraKeyStream2: this.state.ExtraKeyStream2
      };
      console.log(data)
      setting(data)
      .then((res) => {
        console.log(res);
        // if (res.status && res.status == 200) {
        //   window.location.href = "/admin/setting";
        // }
        
        handleResponse(res, () => undefined);
      })
    }
  }
  render() {
    return (
      <div>
        <div className="col-md-8">
          <div className="alert alert-primary" role="alert">
            Stream Keys
            <textarea
              className="form-control"
              rows="4"
              cols="50"
              value={this.state.value}
              onChange={({ target: { value } }) =>
                this.setState({ value, copied: false })
              }
              disabled
            />
            <CopyToClipboard
              text={this.state.value}
              onCopy={() => this.setState({ copied: true })}
            >
              <span></span>
            </CopyToClipboard>
            <CopyToClipboard
              text={this.state.value}
              onCopy={() => this.setState({ copied: true })}
            >
              <button>Copy to clipboard</button>
            </CopyToClipboard>
            {this.state.copied ? (
              <span style={{ color: "red" }}>Copied.</span>
            ) : null}
          </div>
        </div>
        <div className="col-md-8">
          <div className="alert alert-warning" role="alert">
            <div className="card">
              <div className="card-body">
                <Form
                  onSubmit={this.handleSetting}
                  ref={(c) => {
                    this.form = c;
                  }}
                >
                  <div className="form-group">
                    <label >Domain name</label>
                    <Input
                      type="text"
                      name="DomainName"
                      value={this.state.DomainName}
                      className="form-control"
                      placeholder="Domain name"
                      validations={[required]}
                      onChange={this.onChangeDomain}
                    />
                  </div>
                  <div className="form-group">
                    <label >API port</label>
                    <Input
                      type="text"
                      name="APIport"
                      value={this.state.APIport}
                      className="form-control"
                      placeholder="API port"
                      validations={[required]}
                      onChange={this.onChangeAPIport}
                    />
                  </div>
                  <div className="form-group">
                    <label >
                      Domain name live
                    </label>
                    <Input
                      type="text"
                      name="DomainLive"
                      value={this.state.DomainLive}
                      className="form-control"
                      placeholder="Domain name live"
                      validations={[required]}
                      onChange={this.onChangeDomainLive}
                    />
                  </div>
                  <div className="form-group">
                    <label >Live port</label>
                    <Input
                      type="text"
                      name="LivePort"
                      value={this.state.LivePort}
                      className="form-control"
                      placeholder="Live port"
                      validations={[required]}
                      onChange={this.onChangeLivePort}
                    />
                  </div>
                  <div className="form-group">
                    <label >Type Video</label>
                    <Input
                      type="text"
                      name="TypeVideo"
                      value={this.state.TypeVideo}
                      className="form-control"
                      placeholder="Type Video"
                      validations={[required]}
                      onChange={this.onChangeTypeVideo}
                    />
                  </div>
                  <div className="form-group">
                    <label >
                      Extra Key Stream0
                    </label>
                    <Input
                      type="text"
                      name="ExtraKeyStream1"
                      value={this.state.ExtraKeyStream0}
                      className="form-control"
                      placeholder="Key stream"
                      validations={[required]}
                      onChange={this.onChangeExtraKeyStream0}
                    />
                  </div>
                  <div className="form-group">
                    <label >
                      Extra Key Stream1
                    </label>
                    <Input
                      type="text"
                      name="ExtraKeyStream1"
                      value={this.state.ExtraKeyStream1}
                      className="form-control"
                      placeholder="Key stream"
                      validations={[required]}
                      onChange={this.onChangeExtraKeyStream1}
                    />
                  </div>
                  <div className="form-group">
                    <label >
                      Extra Key Stream2
                    </label>
                    <Input
                      type="text"
                      name="ExtraKeyStream2"
                      value={this.state.ExtraKeyStream2}
                      className="form-control"
                      placeholder="Key stream"
                      validations={[required]}
                      onChange={this.onChangeExtraKeyStream2}
                    />
                  </div>
                  <div className="form-group">
                    <button
                      className="btn btn-primary btn-block"
                      disabled={this.state.loading}
                    >
                      {this.state.loading && (
                        <span className="spinner-border spinner-border-sm"></span>
                      )}
                      <span>Change</span>
                    </button>
                  </div>
                  <CheckButton
                    style={{ display: "none" }}
                    ref={(c) => {
                      this.checkBtn = c;
                    }}
                  />
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
