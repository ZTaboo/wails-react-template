import {Button} from "@arco-design/web-react";
import {useNavigate} from "react-router-dom";

const About = () => {
    const navigate = useNavigate()
    const toHome = () => {
        navigate('/')
    }
    return (
        <>
            <div className={'flex h-full w-full justify-center items-center'}>
                <Button type={'primary'} onClick={toHome}>返回Home</Button>
            </div>
        </>
    )
}

export default About;