import React from 'react';
import { connect } from 'react-redux';

class UserProfile extends React.Component {
  render() {
    const { getUser, getRepos } = this.props;
    
    return (
      <div>
        <section>
          <h1>{getUser.name}</h1>
          <h3>{getUser.login}</h3>
          <img src={getUser.avatar_url} alt="User_Image" />
          <p>{getUser.location}</p>
          <a href={getUser.blog} target="_blank" rel="noreferrer">{getUser.blog}</a>
        </section>
        <section>
          <h3>Respositorios:</h3>
          <ul>
          {getRepos.map((repos) => {
            return (
              <li>{repos.name}</li>
              )
            })}
          </ul>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getUser: state.userReducer.userProfile,
  getRepos: state.userReducer.userRepos,
})

export default connect(mapStateToProps, null)(UserProfile);
