import ErrorPage from "../components/errorpage"
import styletest from "../components/error.module.css"

export default function notFound() {
    return (
        <>
            {/* <ErrorPage hoge={404}>
                childrenはこっちから渡せる
            </ErrorPage> */}
            <div className={styletest.errorstyle}>
                test
            </div>
        </>
    )
}