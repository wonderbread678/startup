import React from 'react';

export function Create_login() {
  return (
    <main classNameName="main">
      <div>
        <label for="username" className="text" ><b>Username: </b></label>
        <input type="text" id="username" name="username" placeholder="Username"></input>
        <label for="password" className="text" style="border:4px gold groove; padding:20px; border-radius: 10px;"><b>Password: </b></label>
        <input type="text" id="password" name="password" placeholder="Password"></input>
        <label for="confirm" className="text" style="border:4px gold groove; padding:20px; border-radius: 10px;"><b>Confirm Password: </b></label>
        <input type="text" id="confirm" name="confirm" placeholder="Password"></input>
        <ul>
            <div>Password Requirements: </div>
            <li>
                <div>Minimum of 8 characters</div>
            </li>
            <li>
                <div>At least one capital letter (A-Z)</div>
            </li>
            <li>
                At least one lowercase letter (a-z)
            </li>
            <li>
                At least one number (0-9)
            </li>
        </ul>
        <button type="submit" className="btn btn-primary" id="submit" style="background-color:#00674F; color:lightgray; margin:10px;">Create Account</button>
      </div>
    </main>
  );
}