import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';

function NotFoundPage() {
  return (
    <Layout title="404 page">
      <div data-testid="404-page">
        <h2>Page not found</h2>
        <p>
          <Link to="/">Go to home page</Link>
        </p>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
