import gitHub from "./../../img/icons/gitHub-black.svg"

function BtnGitHub({link}){
    return(
    <a href={link} target = "_blank" rel="noreferrer" className="btn-outline">
        <img src={gitHub} alt=""/>
        GitHub repo
    </a>
    )
}

export default BtnGitHub