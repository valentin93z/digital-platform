import Nav from "@components/Nav";

const HomeLayout = ({ children }) => {
  return (
    <>
      <Nav />
      <div>{children}</div>
    </>
  )
}

export default HomeLayout;