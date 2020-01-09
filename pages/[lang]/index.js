import Link from 'next/link';
import { Fragment } from 'react';
import MetaHead from '~/components/shared/meta';
import useTranslation from '../../components/shared/locales/useLocale';
import WithLocale from '../../components/shared/locales/withLocale';

const Index = () => {
    const { locale, translate } = useTranslation();
    return (<Fragment>
        <MetaHead title={translate('hello')} />
    </Fragment>);
}

export default WithLocale(Index);