import firebase from 'firebase/app';
import 'firebase/auth';

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const loginBtn = () => {
  const domString = `<div id="auth">
    <span style="font-size: 5em; color: Blue;"></span>
    <h4>finterest</h4>
    <button id="google-auth" class="btn btn-primary btn-lg">
      <i class="fab fa-google"></i></i>oogle Login
    </button>
  </div>`;

  $('#app').html(domString);
  $('#google-auth').on('click', signIn);
};

export default { loginBtn, signIn };
