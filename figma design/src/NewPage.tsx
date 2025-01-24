
import { useNavigate } from 'react-router-dom';
import './App.css';

function NewPage() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/dashboard');
  };

  return (
    <div className="container">
      <header className="header">
        <div className="logo">Logotype</div>
      </header>
      <main className="main-content">
        <section className="account-creation">
          <h1>Choose your main service</h1>
          <p>
            A message will be shown indicating that the user will have the
            opportunity to customize each service later.
          </p>
          <div className="service-options">
            {[
              'Childcare',
              'Au Pairs',
              'Tutors',
              'Special needs care',
              'Aged care',
              'Household help',
            ].map((service, index) => (
              <div className="service-option" key={index}>
                <input type="radio" id={service} name="service-option" />
                <label htmlFor={service}>{service}</label>
              </div>
            ))}
          </div>
          <button className="continue-button" onClick={handleContinue}>
            Continue
          </button>
        </section>
        <section className="side-content">
          <div className="image-gallery">
            {[
              'https://raisingchildren.net.au/__data/assets/image/0020/48341/child-care-planning-settling-innarrow.jpg',
              'https://ifs.imgix.net/ifs-admin/resources/blog/parentaltimecohabitation.jpg?auto=format&q=80&w=600',
              'https://lirp.cdn-website.com/738140e6/dms3rep/multi/opt/2bf6b76c-d264-4280-9a0a-11d8b46c3ff8-640w.jpg',
            ].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Gallery ${index + 1}`}
                className="side-image"
              />
            ))}
          </div>
          <ul className="features-list">
            {[
              'Convenience and Efficiency',
              'Safety and Trust',
              'Personalized Matching',
            ].map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default NewPage;
