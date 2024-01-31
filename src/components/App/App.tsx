import classes from './App.module.scss'
import {Link, Outlet} from "react-router-dom";
import About from "@/pages/about/About";
import imgPng from "@/assets/img.png"
import imgJpg from "@/assets/img.jpg"
import ImgSvg from "@/assets/img.svg"

const test = ()=>{
    test2()
}
const test2 = ()=>{
    throw new Error('aa')
}

export const App = () => {

    // test('111')
    //
    // if (__PLATFORM__==='desktop'){
    //     return <div>DESKTOP PLATFORM</div>
    // }
    // if (__PLATFORM__==='mobile'){
    //     return <div>MOBILE PLATFORM</div>
    // }


    return (
        <div data-testid={'App'}>
            <h1 data-testid={'Platform'}>PLATFORM={__PLATFORM__}</h1>
            <div>
                <img width={100} src={imgPng} alt=""/>
                <img width={100} src={imgJpg} alt=""/>
                <ImgSvg color="green" width={100} height={100}/>
            </div>
            <Link to={'/about'}>about</Link>
            <br/>
            <Link to={'/shop'}>shop</Link>
            <div className={classes.value}>
                Hello world
                <button onClick={test} className={classes.button}>aaa</button>
            </div>
            <About/>
            <Outlet/>
        </div>
    );
};
