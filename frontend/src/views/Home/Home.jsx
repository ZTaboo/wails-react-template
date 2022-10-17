import {Button} from "@arco-design/web-react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
    const [con, setCon] = useState(0)
    const addCon = () => {
        setCon(con + 1)
    }
    const toAbout = () => {
        navigate('/about')
    }
    return (
        <>
            <div className={'flex items-center w-full h-full justify-center'}>
                <p className={'mr-2'}>content:{con}</p>
                <Button type={'primary'} onClick={addCon}>计数检测</Button>
                <div className={'ml-10'}>
                    <Button type={'primary'} onClick={toAbout}>路由跳转</Button>
                </div>
            </div>
        </>
    )
}

export default Home;