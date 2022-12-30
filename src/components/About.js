import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h3>Version 1.0.0</h3>
      <Link to='/'>Go Back</Link>
    </div>
  );
};

export default About;
