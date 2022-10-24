import styls from './layout.module.css'

export default function Layout({ children }) {
    return <div className={styls.container}>{children}</div>;
}