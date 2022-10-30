import c from './error.module.css'

export default function ErrorPage({hoge, children}) {
    return (
        <>
        <div className={c.errorstyle}>
            <h2>hoge page</h2>
            <div>{hoge}</div>
            {/* 子要素は`children`という名前で取得可能 */}
            <div>{children}</div>
            </div>
        </>
    );
};