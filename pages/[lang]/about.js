import Translate from "~/components/shared/translate";
import MetaHead from "~/components/shared/meta";
import { useLocale } from "~/locales";

const About = () => {
    const { translate } = useLocale();

    return (<div>
        <MetaHead title={translate({ key: 'about' })}
            description={translate({ key: 'about' })}
            ogDescription={translate({ key: 'about' })}
            ogTitle={translate({ key: 'about' })} />
        <Translate id="about" wrapperComponent={React.Fragment} />
    </div>)
}


export default About;