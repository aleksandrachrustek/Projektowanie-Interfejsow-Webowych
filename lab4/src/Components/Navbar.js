import React, { useState, useEffect } from 'react';
import { signInWithGoogle, logOut, auth } from './firebaseConfig';
import { onAuthStateChanged } from "firebase/auth";
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [showAuthOptions, setShowAuthOptions] = useState(false);
  const [authMethod, setAuthMethod] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleSignIn = () => {
    signInWithGoogle().catch((error) => {
      console.error("Error signing in with Google:", error);
    });
  };

  const handleLogOut = () => {
    logOut().catch((error) => {
      console.error("Error logging out:", error);
    });
  };

  const handleAuthOption = (method) => {
    setAuthMethod(method);
    setShowAuthOptions(false);
  };

  return (
    <nav className="fixed-navigation">
      <ul className="nav-links">
        <li><a className="nav-link" href="#">Home</a></li>
        <li><a className="nav-link" href="#browse">Find offers</a></li>
        <li><a className="nav-link" href="#">Add new offers</a></li>
        <li><a className="nav-link" href="#">My offers</a></li>
        <li><a className="nav-link" href="#">Favourites</a></li>
        {user ? (
          <>
            <button className="button primary" onClick={handleLogOut}>Log out</button>
            <li>Welcome, {user.displayName}</li>
          </>
        ) : (
          <>
            <button className="button primary" onClick={() => setShowAuthOptions(true)}>Log in / Register</button>
            {showAuthOptions && (
              <div className="auth-options">
                <button className="button primary" onClick={() => handleAuthOption('login')}>Log in with Email</button>
                <button className="button primary" onClick={() => handleAuthOption('register')}>Register with Email</button>
                <button className="button primary" onClick={handleSignIn}>Log in with Google</button>
              </div>
            )}
          </>
        )}
      </ul>
      {authMethod === 'login' && <LoginForm onClose={() => setAuthMethod(null)} />}
      {authMethod === 'register' && <RegisterForm onClose={() => setAuthMethod(null)} />}
    </nav>
  );
};

export default Navbar;
