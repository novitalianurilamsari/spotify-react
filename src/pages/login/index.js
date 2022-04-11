import React from "react";
import { ButtonCompo } from "../../components";
import { Button } from "../../components";
import { API_SCOPE, REDIRECT_URI } from "../../config/constant";
function Login() {

  const linkURL = `https://accounts.spotify.com/en/authorize?client_id=${
    // eslint-disable-next-line no-undef
    process.env.REACT_APP_SPOTIFY_CLIENT_ID
  }&response_type=${"token"}&redirect_uri=${REDIRECT_URI}&scope=${API_SCOPE}`;

  return (
    <div className="SignIn">
      <ButtonCompo name="Login" link={linkURL} />
      <Button />
    </div>
  );
}

export default Login;