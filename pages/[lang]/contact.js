import Translate from "~/components/shared/translate";
import MetaHead from "~/components/shared/meta";
import { useLocale } from "~/locales";

const Contact = () => {
    const { translate } = useLocale();

    return (<div>
        <MetaHead title={translate({ key: 'contact' })}
            description={translate({ key: 'contact' })}
            ogDescription={translate({ key: 'contact' })}
            ogTitle={translate({ key: 'contact' })} />
        <Translate id="contact" wrapperComponent={React.Fragment} />
    </div>)
}


export default Contact;