import Head from 'next/head';
import { initialLocale } from '../locales/inital';
import { useRouter } from 'next/dist/client/router';

const Index = () => {
    const router = useRouter();
    React.useEffect(() => {
        router.replace('/[lang]', `/${initialLocale}`);
    });

    return (<Head>
        <meta name="robots" content="noindex, nofollow" />
    </Head>);
}

export default Index;