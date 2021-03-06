import Layout from '../../src/layouts';
import WebDevelopmentPage from '../../src/screens/services/webDevelopment';

const Page = () => <WebDevelopmentPage />;

export const getServerSideProps = async () => ({
  props: {
    layoutProps: {
      navigation: { index: 'WebDevelop' },
    },
  },
});

Page.layout = Layout;
export default Page;
