import React from 'react';
import './login.css'
import { NavLink } from 'react-router-dom';

import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authSet';

export function Login({userName, authState, onAuthChange}) {
  return (
    <main className="main">
      <div className="body">
        {authState !== AuthState.Unknown && <h1>Welcome to Koob</h1>}
      </div>
    </main>
  );
}