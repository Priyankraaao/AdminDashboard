import Link from "next/link"

const Homepage = () => {
  return (
    <div style={{position:"relative"}}>
      <iframe src="https://www.carbontrail.net/" width="100%" height="1000"></iframe>
      <div
       style={{
        position: "absolute",
        top: "61%",
        left: "60%",
        padding: 16,
        borderRadius: 30,
        background: "#016855",
        color: "#fff",
        outline: "none",
        border: "none",
        width: "200px",
        fontSize: 20,
        fontWeight: 600,
        transition: "background 0.3s ease", 
        cursor:"pointer",
        textAlign:"center"
      }}
        >
         <Link href="/login">
           Login
          </Link>{" "}
        </div>
     </div>
  )
}

export default Homepage