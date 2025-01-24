
import './App.css';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/new-page');
  };

  return (
    <div className="container">
      <header className="header">
        <div className="logo">Logotype</div>
      </header>
      <main className="main-content">
        <section className="account-creation">
          <h1>Create your Carelybay account</h1>
          <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing.</p>
          <div className="job-options">
            <div className="job-option">
              <input type="radio" id="post-job" name="job-option" />
              <label htmlFor="post-job">Post a Job</label>
            </div>
            <div className="job-option selected">
              <input type="radio" id="find-job" name="job-option" defaultChecked />
              <label htmlFor="find-job">Find a Job</label>
            </div>
          </div>
          <button className="continue-button" onClick={handleContinue}>Continue</button>
          <p className="signin-text">
            Already using Carelybay? <a href="#">Sign in</a>
          </p>
        </section>
        <section className="side-content">
          <img
            src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80" // Replace with your uploaded image path
            alt="Child care"
            className="side-image"
          />
          <h2>Your Trusted Partner in Finding the Perfect Service!</h2>
          <p>★★★★★ Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
          <p className="profile-name">Lara Doe</p>
          <p className="profile-role">Child care top rated</p>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
