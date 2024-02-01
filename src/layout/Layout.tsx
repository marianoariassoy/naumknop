import Header from './Header'
// import Menu from './Menu'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />

      <main>{children}</main>
    </>
  )
}

export default Layout
