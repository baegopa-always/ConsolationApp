import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import './lang';
import awsExports from './aws-exports';
import Home from './Home';

Amplify.configure(awsExports);
const Configure ={
  accessKey: process.env.AWS_ACCESS_KEY,
  secretKey: process.env.AWS_SECRET_KEY
}

export default function App() {
  return (<Home/>)
}

export async function getStaticProps() {
  return {
    props: {
      isPassedToWithAuthenticator: true,
    },
  };
}