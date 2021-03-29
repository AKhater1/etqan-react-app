import {useEffect} from 'react';

import Container from './Container';

function Page(props) {

    useEffect(()=>{
        return(
            document.title = `${props.title} | إتقان`,
            window.scrollTo(0, 0)
        )
    }, props.title)

    return (
        <Container title={props.title}>
            {props.children}
        </Container>
    )
}

export default Page