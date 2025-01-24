
import "./App.css";

function DashboardPage() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-left">
        <div className="logo">Logotype</div>
        <h2>Welcome back to Carelybay</h2>
        <h1>Sign up</h1>
        <p>Sign in to manage your services.</p>
        <form className="signup-form">
          <input type="email" placeholder="Email*" className="input-field" />
          <div className="password-container">
            <input
              type="password"
              placeholder="Create a password"
              className="input-field"
            />
            <span className="show-password">👁️</span>
          </div>
          <div className="terms-container">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              * I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
            </label>
          </div>
          <button type="submit" className="signup-button">
            Sign up
          </button>
        </form>
        <div className="social-login">
          <p>Or</p>
          <button className="social-button google-button">Sign up with Google</button>
          <button className="social-button facebook-button">
            Sign up with Facebook
          </button>
        </div>
        <p className="signin-link">
          Already using Carelybay? <a href="#">Sign in</a>
        </p>
      </div>
      <div className="dashboard-right">
        <img
          src="https://raisingchildren.net.au/__data/assets/image/0020/48341/child-care-planning-settling-innarrow.jpg" // Replace this with the correct image URL
          alt="Service"
          className="dashboard-image"
        />
        <div className="side-content">
          <h2>Your Trusted Partner in Finding the Perfect Service!</h2>
          <p>★★★★★</p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo.
          </p>
          <p className="profile-name">Lara Doe</p>
          <p className="profile-role">Child care top rated</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
