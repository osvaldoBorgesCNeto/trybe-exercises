import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { getThunkApi02 } from './action/apiAction';
import { getThunkRepos, getThunkUser } from "./action/userAction";
import { FaGithubAlt } from 'react-icons/fa';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.onClickURL = this.onClickURL.bind(this);
    this.onClickSearch = this.onClickSearch.bind(this);

    this.state = {
      name: "",
      buttonBool: true,
    }
  }

  handleChange({target}) {
    const { value } = target
  
    this.setState((prevState) => {
      if(prevState.name.length !== 0) {
        this.setState({
          buttonBool: false,
        })
      }else {
        this.setState({
          buttonBool: true,
        })
      }
    }, this.setState({
      name: value,
    }))
  }

  onClickURL(url, repos_url) {
    const { setUser, setUserRepos } = this.props;

    setUser(url);
    setUserRepos(repos_url);
  }

  onClickSearch() {
    const { setResult } = this.props;
    const { name } = this.state;

    setResult(name)

    this.setState({
      name: "",
      buttonBool: true,
    })
  }

  render() {
    const { getResult, getName } = this.props
    const { name, buttonBool } = this.state

    return (
      <div className="main-body">
        <div className="main-box">
          <p className="main-gitHubImg"><FaGithubAlt /></p>
          <p className="main-text">GitHub User:</p>
          <label htmlFor="input-name">
            <input type="text" name="name" id="input-name" value={name} onChange={ this.handleChange}/>
          </label>
          <button type="button" className="button-search" onClick={ this.onClickSearch } disabled={buttonBool}>Search</button>
          <section>
            {getName && getResult.map(({login, url, repos_url}) => {
              return (
                <div>
                  <Link onClick={ () => this.onClickURL(url, repos_url) } to={`users/${login}`}>{login}</Link>
                </div>
              )
            })}
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getResult: state.apiReducer.results,
  getName: state.apiReducer.names,
});

const mapDispatchToProps = (dispatch) => ({
  setResult: (result) => dispatch(getThunkApi02(result)),
  setUser: (user) => dispatch(getThunkUser(user)),
  setUserRepos: (repos) => dispatch(getThunkRepos(repos))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
